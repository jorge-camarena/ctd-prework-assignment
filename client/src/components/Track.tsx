import React from "react";
import { Card } from "react-bootstrap";

interface Props {
    name: string;
    artists: string[];
}

function Track({ name, artists }: Props) {
    return (
        <div className="track-container">
            <h6>{name}</h6>
            <p>by: {artists.join(", ")}</p>
        </div>
    );
}

export default Track;
