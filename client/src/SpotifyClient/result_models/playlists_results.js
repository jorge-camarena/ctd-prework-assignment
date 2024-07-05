export function createPlaylist(playlist) {
    const playlistName = playlist.name
    const playListOwner = playlist.owner.display_name
    const tracksList = []
    const tracksArray = playlist.tracks.items
    
    for (const trackObj of tracksArray) {
        const track = trackObj.track;
        const trackName = track.name;
        const trackAlbum = track.album.name
        const artistArray = track.artists;
        const artistList = []
        
        for (const artist of artistArray){
            const artistName = artist.name;
            artistList.push(artistName)
        }
        const trackItem = {
            name: trackName,
            album: trackAlbum,
            artists: artistList
        }
        tracksList.push(trackItem)
    }

    return {
        name: playlistName,
        owner: playListOwner,
        tracks: tracksList
    }
}