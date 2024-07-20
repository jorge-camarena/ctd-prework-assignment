import "../App.css";
import { Card } from "react-bootstrap";
import { Tracks } from "../response_models/AlbumResponse";
import Track from "./Track";

interface Props {
    name: string;
    owner?: string;
    cover: string;
    link: string;
    tracks: Tracks[];
}

function MusicContainer({ name, owner, cover, link, tracks }: Props) {
    return (
        <Card
            style={{ width: "18rem" }}
            className="music-container"
            bsPrefix="music-container"
        >
            <a href={link} target="blank">
                <Card.Img variant="top" src={cover} />
            </a>
            <Card.Body className="card-body" bsPrefix="card-body">
                <Card.Title
                    className="title-header"
                    bsPrefix="title-header"
                    style={{ color: "white" }}
                >
                    <a href={link} className="track-link">
                        {name}
                    </a>
                </Card.Title>
                {owner ? (
                    <Card.Text style={{ color: "white" }}>
                        {"Owner: " + owner}
                    </Card.Text>
                ) : (
                    <p />
                )}
                <Card.Body className="music-content-container">
                    {tracks.map((track, i) => (
                        <Track
                            key={i}
                            name={(i + 1).toString() + ". " + track.name}
                            artists={track.artists}
                            url={track.url}
                        />
                    ))}
                </Card.Body>
            </Card.Body>
        </Card>
    );
}

export default MusicContainer;
