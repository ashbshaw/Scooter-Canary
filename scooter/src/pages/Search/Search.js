import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ScooterList from '../../components/ScooterList';
import ScooterListCreate from '../../components/ScooterListCreate';
import ScooterListEdit from '../../components/ScooterListEdit';
import Map from '../../components/Map';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchButton from '../../components/SearchButton';
import './search.css';

class Search extends Component {
    render() {
        return (
            <Router>
                <div className='container-fluid'>
                    <div id='table'>
                        <Row>
                            <Col md='4'><SearchButton />
                                <div className='scooter-container'>
                                    <ul>
                                        <li><Link to='/list'>Scooter List</Link></li>
                                        <li> <Link to='/create'>Add to Scooter List</Link></li>
                                    </ul>
                                    <Route path='/list' exact component={ScooterList} />
                                    <Route path='/edit/:id' component={ScooterListEdit} />
                                    <Route path='/create' component={ScooterListCreate} />
                                </div>
                            </Col>
                            <Col md="8"><Map /> Map</Col>
                        </Row>
                    </div>
                </div>
            </Router>
        );
    };
};

export default Search;