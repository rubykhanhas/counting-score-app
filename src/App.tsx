import InputPlayer from "components/InputPlayer";
import Scoreboard from "components/Scoreboard";
import React from "react";
import { Col, Container, Row } from "reactstrap";

function App() {
    return (
        <div className="App">
            <Container>
                <Row className="justify-content-center my-5">
                    <Col xs={12} sm={10} md={9}>
                        <Scoreboard />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={9}>
                        <InputPlayer />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
