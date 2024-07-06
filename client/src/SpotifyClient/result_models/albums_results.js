export function createAlbum(album) {
    const albumName = album.name
    var tracksList = []
    const tracksArray = album.tracks.items
    const albumCover = album.images[1].url
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
        cover: albumCover,
        tracks: tracksList

    }
}