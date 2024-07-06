import "./App.css";
import { useState, useEffect } from "react";
import SpotifyClient from "./SpotifyClient/client";
import TestSpotifyClient from "./components/TestSpotifyClient";
import MainNavbar from "./components/MainNavbar";
import MusicContainer from "./components/MusicContainer";
import { AlbumResponse } from "./response_models/AlbumResponse";
import { PlaylistResponse } from "./response_models/PlaylistResponse";

function App() {
    const client = new SpotifyClient();
    const [albums, setAlbums] = useState<AlbumResponse[]>();
    const [playlists, setPlaylists] = useState<PlaylistResponse[]>();

    useEffect(() => {
        (async () => {
            const albumsResponse = await client.getSpotifyTopAlbumsAsync();
            setAlbums(albumsResponse);
            const playlistsResponse =
                await client.getSpotifyTopPlaylistsAsync();
            setPlaylists(playlistsResponse);
        })();
    }, []);
    return (
        <>
            <TestSpotifyClient albums={albums} playlists={playlists} />
            {/* <MainNavbar />
            <div className="flex-container">
                <MusicContainer />
                <MusicContainer />
                <MusicContainer />
                <MusicContainer />
                <MusicContainer />
                <MusicContainer />
            </div> */}
        </>
    );
}

export default App;
