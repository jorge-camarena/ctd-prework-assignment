import "./App.css";
import { useState, useEffect } from "react";
import SpotifyClient from "./SpotifyClient/client";
import { AlbumResponse } from "./response_models/AlbumResponse";
import { PlaylistResponse } from "./response_models/PlaylistResponse";
import NewAlbums from "./pages/NewAlbums";
import TopPlaylists from "./pages/TopPlaylists";
import MainNavbar from "./components/MainNavbar";

function App() {
    const client = new SpotifyClient();

    const [currentPage, setCurrentPage] = useState("albums");
    const [loadingAlbums, setLoadingAlbums] = useState(true);
    const [loadingPlaylists, setLoadingPlaylists] = useState(true);

    const [albums, setAlbums] = useState<AlbumResponse[]>();
    const [playlists, setPlaylists] = useState<PlaylistResponse[]>();

    useEffect(() => {
        (async () => {
            const albumsResponse = await client.getSpotifyTopAlbumsAsync();
            setAlbums(albumsResponse);
            setLoadingAlbums(false);
            const playlistsResponse =
                await client.getSpotifyTopPlaylistsAsync();
            setPlaylists(playlistsResponse);
            setLoadingPlaylists(false);
        })();
    }, []);
    return (
        <>
            <MainNavbar changePage={setCurrentPage} />
            {currentPage === "albums" ? (
                <NewAlbums albums={albums} loading={loadingAlbums} />
            ) : (
                <TopPlaylists
                    playlists={playlists}
                    loading={loadingPlaylists}
                />
            )}
        </>
    );
}

export default App;
