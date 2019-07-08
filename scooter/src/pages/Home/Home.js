import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <div class='container-fluid'>
            <Row className="justify-content-md-center">
                <Col md="auto">Variable width content</Col>
            </Row>
            <Row>
                <Col md="auto">Variable width content</Col>
                <Col md="auto">Variable width content</Col>
                <Col md="auto">Variable width content</Col>
            </Row>
        </div>
    );
}

export default Home;