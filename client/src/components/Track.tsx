interface Props {
    name: string;
    artists: string[];
    url: string;
}

function Track({ name, artists, url }: Props) {
    return (
        <a className="track-link" href={url} target="_blank">
            <div className="track-container">
                <h6>{name}</h6>
                <p>by: {artists.join(", ")}</p>
            </div>
        </a>
    );
}

export default Track;
