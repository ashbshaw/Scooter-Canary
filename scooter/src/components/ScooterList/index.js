import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Scooter = props => (
    <tr>
        <td>{props.scooter.scooter_location}</td>
        <td>{props.scooter.scooter_type}</td>
        <td>{props.scooter.scooter_date}</td>
        <td>{props.scooter.scooter_priority}</td>
        <td>
            <Link to={'/edit'+props.scooter._id}>Update Status</Link>
        </td>
    </tr>
);

export default class ScooterList extends Component {

    constructor(props) {
        super(props);
        this.state = {scooter: []};
    }

    // Send request to the back end to get scooter list
    componentDidMount() {
        axios.get('http://localhost:4000/list')
        .then(response => {
            this.setState({ scooter: response.data })
        })
        .catch(function(error) {
            console.log(error);
        });
    };

    scooterList() {
        return this.state.scooter.map(function(currentScooter, i){
            return <Scooter scooter={currentScooter} key={i} />;
        });
    };

    render() {
        return (
            <div>
                <h3>Reported Scooters</h3>
                <table className='table table-striped' style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Location: </th>
                            <th>Scooter Type: </th>
                            <th>Date Reported: </th>
                            <th>Priority: </th>
                            <th>Update Status: </th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.scooterList() }
                    </tbody>
                </table>
            </div>
        )
    }
}