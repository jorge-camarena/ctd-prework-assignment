import SpotifyClient from "../SpotifyClient/client";
import { AlbumResponse } from "../response_models/AlbumResponse";
import { PlaylistResponse } from "../response_models/PlaylistResponse";
interface Props {
    albums?: AlbumResponse[];
    playlists?: PlaylistResponse[];
}

function TestSpotifyClient({ albums, playlists }: Props) {
    const client = new SpotifyClient();

    const handleTestAlbumsAPI = () => {
        // const albums = await client.getSpotifyTopAlbumsAsync();
        console.log(albums);
    };
    const handleTestPlaylistAPI = () => {
        // const playlists = await client.getSpotifyTopPlaylistsAsync();
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
