import "../App.css";
import { Card } from "react-bootstrap";
import { Hourglass } from "react-loader-spinner";

function LoadingContainer() {
    return (
        <div>
            <Card
                style={{ width: "18rem" }}
                className="loading-container"
                bsPrefix="loading-container"
            >
                <Card.Img variant="top" />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text></Card.Text>
                    {
                        <Hourglass
                            colors={["#00A300", "#00A300"]}
                            wrapperClass="loading-content"
                        />
                    }
                </Card.Body>
            </Card>
        </div>
    );
}

export default LoadingContainer;
