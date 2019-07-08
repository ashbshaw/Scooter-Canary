import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchButton from '../../components/SearchButton';
import Map from '../../components/Map';
import "./search.css";

function Search() {
    return (
        <div class='container-fluid'>
            <div id='table'>
                <Row>
                        <Col md='2'><SearchButton /></Col>
                        <Col md="10"><Map /> Map</Col>
                </Row>
            </div>
        </div>
    );
}

export default Search;