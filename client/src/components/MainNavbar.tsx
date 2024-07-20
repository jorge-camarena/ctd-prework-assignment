import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import logo from "../assets/Spotify_Full_Logo_RGB_Green.png";

interface Props {
    changePage: Function;
}

function MainNavbar({ changePage }: Props) {
    const [currentlySelected, setCurrentlySelected] = useState("albums");
    const handleAlbumClick = () => {
        changePage("albums");
        setCurrentlySelected("albums");
    };

    const handlePlaylistClick = () => {
        changePage("Playlists");
        setCurrentlySelected("playlists");
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a
                        className="navbar-brand"
                        href="https://open.spotify.com/"
                        target="_blank"
                    >
                        <img src={logo} alt="" height={40} width={150} />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                ></a>
                            </li>
                            <li
                                className={
                                    "nav-item " +
                                    (currentlySelected === "albums"
                                        ? "nav-item-currently-selected"
                                        : "")
                                }
                            >
                                <a
                                    className="nav-link"
                                    href="#"
                                    onClick={handleAlbumClick}
                                >
                                    Newly Released Albums
                                </a>
                            </li>
                            <li
                                className={
                                    "nav-item " +
                                    (currentlySelected === "playlists"
                                        ? "nav-item-currently-selected"
                                        : "")
                                }
                            >
                                <a
                                    className="nav-link"
                                    href="#"
                                    onClick={handlePlaylistClick}
                                >
                                    Top Playlists
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default MainNavbar;
