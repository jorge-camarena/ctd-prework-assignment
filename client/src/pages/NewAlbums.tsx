import "../App.css";
import LoadingContainer from "../components/LoadingContainer";
import MusicContainer from "../components/MusicContainer";
import { AlbumResponse } from "../response_models/AlbumResponse";
import background from "../assets/black-background-08-vecteezy.png";

interface Props {
    albums?: AlbumResponse[];
    loading: boolean;
}

function NewAlbums({ albums, loading }: Props) {
    var count = [1, 2, 3, 4, 5];
    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "auto",
                height: "auto",
                width: "auto",
                margin: 0,
            }}
        >
            <h1 className="top-5-heading">Today's Top 5 Albums</h1>
            <div className="flex-container">
                {loading
                    ? count.map((i) => <LoadingContainer key={i} />)
                    : albums?.map((album, key) => (
                          <MusicContainer
                              key={key}
                              name={album.name}
                              cover={album.cover}
                              link={album.link}
                              tracks={album.tracks}
                          />
                      ))}
            </div>
        </div>
    );
}

export default NewAlbums;
