import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                    <Row>
                        <Col sm="6">
                            <p>Need to insert the logo. Temporary fill-in is Canary in assets->img folder.</p>
                        </Col>
                        <Col sm="6">
                            <h2>About Scooter Canary</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Pulvinar etiam non quam lacus. Arcu dictum varius duis at consectetur lorem donec massa sapien.
                            Venenatis urna cursus eget nunc scelerisque viverra. Id diam maecenas ultricies mi.</p>
                        </Col>
                    </Row>
            </div>
        )
    }
}

export default Home;