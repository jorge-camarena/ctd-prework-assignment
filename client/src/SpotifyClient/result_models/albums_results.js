export function createAlbum(album) {
    const albumName = album.name
    var tracksList = []
    const tracksArray = album.tracks.items
    const albumCover = album.images[1].url
    const albumLink = album.external_urls.spotify
    tracksArray.forEach((track) => {
        
        const trackName = track.name
        const url = track.external_urls.spotify
        console.log(url)
        var artistsList = []
        var artistArray = track.artists
        artistArray.forEach((item) => {
            const artistName = item.name
            artistsList.push(artistName)
        })
        const trackItem = {
            name: trackName,
            artists: artistsList,
            url: url
        }
        tracksList.push(trackItem)
    })
    return {
        name: albumName,
        cover: albumCover,
        link: albumLink,
        tracks: tracksList

    }
}