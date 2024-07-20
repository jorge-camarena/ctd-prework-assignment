import { PlaylistResponse } from "../response_models/PlaylistResponse";
import MusicContainer from "../components/MusicContainer";
import LoadingContainer from "../components/LoadingContainer";
import background from "../assets/black-background-08-vecteezy.png";

interface Props {
    playlists?: PlaylistResponse[];
    loading: boolean;
}

function TopPlaylists({ playlists, loading }: Props) {
    const count = [1, 2, 3, 4, 5];
    console.log;
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
            <h1 className="top-5-heading">Today's Top 5 Playlists</h1>
            <div className="flex-container">
                {loading
                    ? count.map((i) => <LoadingContainer key={i} />)
                    : playlists?.map((playlist, key) => (
                          <MusicContainer
                              key={key}
                              name={playlist.name}
                              owner={playlist.owner}
                              cover={playlist.cover}
                              link={playlist.link}
                              tracks={playlist.tracks}
                          />
                      ))}
            </div>
        </div>
    );
}

export default TopPlaylists;
