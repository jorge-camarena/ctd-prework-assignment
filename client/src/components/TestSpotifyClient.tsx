import SpotifyClient from "../SpotifyClient/client";

function TestSpotifyClient() {
    const client = new SpotifyClient();

    const handleTestAlbumsAPI = async () => {
        const albums = await client.getSpotifyTopAlbumsAsync();
        console.log(albums);
    };
    const handleTestPlaylistAPI = async () => {
        const playlists = await client.getSpotifyTopPlaylistsAsync();
        console.log(playlists);
    };
    return (
        <div>
            <button onClick={handleTestAlbumsAPI}>Test Albums API</button>
            <button onClick={handleTestPlaylistAPI}>Test Playlist API</button>
        </div>
    );
}

export default TestSpotifyClient;
