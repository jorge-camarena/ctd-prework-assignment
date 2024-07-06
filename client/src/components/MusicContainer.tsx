import React from "react";
import { Card } from "react-bootstrap";
import Track from "./Track";

function MusicContainer() {
    return (
        <Card style={{ width: "18rem" }} className="music-container">
            <Card.Img
                variant="top"
                src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
            />
            <Card.Body>
                <Card.Title>Album Name</Card.Title>
                <Card.Text></Card.Text>
                <Card.Body className="music-content-container">
                    <Track name={"Psycho"} artists={["Post Malone", "Tyga"]} />
                    <Track name={"Psycho"} artists={["Post Malone"]} />
                    <Track name={"Psycho"} artists={["Post Malone"]} />
                    <Track name={"Psycho"} artists={["Post Malone"]} />
                    <Track name={"Psycho"} artists={["Post Malone"]} />
                </Card.Body>
            </Card.Body>
        </Card>
    );
}

export default MusicContainer;
