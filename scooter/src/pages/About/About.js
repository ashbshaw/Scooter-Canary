import React from "react";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

function About() {
    return (
        <div class='container-fluid'>
         
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
  </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
                <div className="row">
                    <div className="col-md-12">
                        <h2 id="start-cover">My Songs</h2>
                    </div>
                </div>

        </div>
    );
}

export default About;