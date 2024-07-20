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
        if (response.status === 400) {
            console.clear()
        }

        return (response.status === 200)
    }

    async getNewToken() {
        const url = "https://accounts.spotify.com/api/token"
        const id = import.meta.env.VITE_CLIENT_ID
        const secret = import.meta.env.VITE_CLIENT_SECRET
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `grant_type=client_credentials&client_id=${id}&client_secret=${secret}`
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

    async getPlaylistByIdAsync(id) {
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

    async getSpotifyTopAlbumsAsync(limit=5) {
        await this.validateToken()
        const url = `https://api.spotify.com/v1/browse/new-releases?limit=${limit}`
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
        albumArray.forEach((album) => {
            const albumItem = createAlbum(album)
            parsedAlbums.push(albumItem)
        })
        return parsedAlbums
    }

    async getSpotifyTopPlaylistsAsync(limit=5) {
        await this.validateToken()
        const url = `https://api.spotify.com/v1/browse/featured-playlists?limit=${limit}`
        const response = await fetch(url, {
            headers: {
                Authorization: 'Bearer ' + this.access_token
            }
        });
        const data = await response.json();
        const playlists = data.playlists.items;
        
        const detailedPlaylistResponse = []
        for (const playlist of playlists) {
            const detailedPlayListItem = await this.getPlaylistByIdAsync(playlist.id)
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