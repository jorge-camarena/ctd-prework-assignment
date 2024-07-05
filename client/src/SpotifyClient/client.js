import { createAlbum } from "./result_models/albums_results";
import { createPlaylist } from "./result_models/playlists_results";

class SpotifyClient {
    constructor() {
        this.access_token = ""
    }

    async isTokenValid() {
        const url = "https://api.spotify.com/v1/browse/new-releases"
        const response = await fetch(url, {
            headers: {
                Authorization: 'Bearer ' + this.access_token
            }
        });
        return (response.status === 200)
    }

    async getNewToken() {
        const url = "https://accounts.spotify.com/api/token"
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "grant_type=client_credentials&client_id=bf3f95cfe2694da996661edeb4853709&client_secret=5fbe0881301642ca9e147118a7cfe19f"
        })
        const data = await response.json()
        return data.access_token
    }

    setToken(new_token) {
        this.access_token = new_token
    }

    async validateToken() {
        const validToken = await this.isTokenValid()
        if(!validToken) {
            const newToken = await this.getNewToken()
            this.setToken(newToken);
        }
    }

    async getAlbumbsByIdAsync(IdList) {
        await this.validateToken()
        var idString = IdList.join()
        const url = `https://api.spotify.com/v1/albums?ids=${idString}`
        const response = await fetch(url, {
            headers: {
                Authorization: 'Bearer ' + this.access_token
            }
        });
        const data = await response.json();
        return data
    }

    async getPlaylistsByIdAsync(idList) {
        await this.validateToken()
        const playlistArray = []
        idList.forEach(async (id) => {
            const url = `https://api.spotify.com/v1/playlists/${id}`
            const response = await fetch(url, {
                headers: {
                    Authorization: 'Bearer ' + this.access_token
                }
            });
            const data = await response.json();
            playlistArray.push(await data)
        })
        return playlistArray
    }

    async getPlaylistById(id) {
        await this.validateToken();
        const url = `https://api.spotify.com/v1/playlists/${id}`
        const response = await fetch(url, {
            headers: {
                Authorization: 'Bearer ' + this.access_token
            }
        });
        const data = await response.json();
        return data
        
    }

    async getSpotifyTopAlbumsAsync() {
        await this.validateToken()
        const url = "https://api.spotify.com/v1/browse/new-releases"
        const response = await fetch(url, {
            headers: {
                Authorization: 'Bearer ' + this.access_token
            }
        });
        const data = await response.json();
        const albums = data.albums.items
        const albumIds = []
        albums.forEach((album) => {
            albumIds.push(album.id)
        })
        const detailedAlbumResponse = await this.getAlbumbsByIdAsync(albumIds)
        const albumArray = await detailedAlbumResponse.albums
        var parsedAlbums = []
        //Add await if fails
        albumArray.forEach((album) => {
            const albumItem = createAlbum(album)
            parsedAlbums.push(albumItem)
        })
        return parsedAlbums
    }

    async getSpotifyTopPlaylistsAsync() {
        await this.validateToken()
        const url = "https://api.spotify.com/v1/browse/featured-playlists"
        const response = await fetch(url, {
            headers: {
                Authorization: 'Bearer ' + this.access_token
            }
        });
        const data = await response.json();
        const playlists = data.playlists.items;
        const detailedPlaylistResponse = []
        for (const playlist of playlists) {
            const detailedPlayListItem = await this.getPlaylistById(playlist.id)
            detailedPlaylistResponse.push(detailedPlayListItem);
        }
        const parsedPlaylists = []
        for (const playlist of detailedPlaylistResponse) {
            const playlistItem = createPlaylist(playlist)
            parsedPlaylists.push(playlistItem)
        }
        return parsedPlaylists
    }
}

export default SpotifyClient