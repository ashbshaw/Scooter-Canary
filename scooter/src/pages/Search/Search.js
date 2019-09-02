import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import ScooterList from '../../components/ScooterList';
import ScooterListCreate from '../../components/ScooterListCreate';
import ScooterListEdit from '../../components/ScooterListEdit';
import MapContainer from '../../components/Map';
import './search.css';

class Search extends Component {
    render() {
        return (
            <div className='search-container'>
                <Router>
                    <Row>
                        <Col sm={5}>
                            <div className='report'>
                                <h3><Link to='/list'>Scooter List</Link></h3>
                                <h3><Link to='/create'>Add to Scooter List</Link></h3>
                                <Route path='/list' exact component={ScooterList} />
                                <Route path='/edit/:id' component={ScooterListEdit} />
                                <Route path='/create' component={ScooterListCreate} />
                            </div>
                        </Col>
                        <Col sm={7}>
                            <div className='map-div'>
                                <MapContainer />
                            </div>
                        </Col>
                    </Row>
                </Router>
            </div>
        );
    };
};

export default Search;