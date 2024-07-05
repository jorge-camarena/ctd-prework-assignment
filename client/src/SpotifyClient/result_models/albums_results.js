export function createAlbum(album) {
    const albumName = album.name
    var tracksList = []
    const tracksArray = album.tracks.items
    tracksArray.forEach((track) => {
        const trackName = track.name
        var artistsList = []
        var artistArray = track.artists
        artistArray.forEach((item) => {
            const artistName = item.name
            artistsList.push(artistName)
        })
        const trackItem = {
            name: trackName,
            artists: artistsList
        }
        tracksList.push(trackItem)
    })
    return {
        name: albumName,
        tracks: tracksList
    }
}