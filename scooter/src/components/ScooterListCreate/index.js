import React, { Component } from 'react';
import axios from 'axios';

export default class ScooterListCreate extends Component {

    constructor(props) {
        super(props);

        this.onChangeScooterLocation = this.onChangeScooterLocation.bind(this);
        this.onChangeScooterType = this.onChangeScooterType.bind(this);
        this.onChangeScooterDate = this.onChangeScooterDate.bind(this);
        this.onChangeScooterPriority = this.onChangeScooterPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            scooter_location: '',
            scooter_type: '',
            scooter_date: '',
            scooter_priority: '',
            scooter_resolved: false
        };

    };

    onChangeScooterLocation(e) {
        this.setState({
            scooter_location: e.target.value
        });
    };

    onChangeScooterType(e) {
        this.setState({
            scooter_type: e.target.value
        });
    };

    onChangeScooterDate(e) {
        this.setState({
            scooter_date: e.target.value
        });
    };

    onChangeScooterPriority(e) {
        this.setState({
            scooter_priority: e.target.value
        });
    };

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Scooter Location: ${this.state.scooter_location}`);
        console.log(`Scooter Type: ${this.state.scooter_type}`);
        console.log(`Date Found: ${this.state.scooter_date}`);
        console.log(`Priority: ${this.state.scooter_priority}`);

        const newScooter = {
            scooter_location: this.state.scooter_location,
            scooter_type: this.state.scooter_type,
            scooter_date: this.state.scooter_date,
            scooter_priority: this.state.scooter_priority,
            scooter_resolved: this.state.scooter_resolved
        };

        axios.post('http://localhost:4000/list/create', newScooter)
            .then(res => console.log(res.data));
        
        this.setState({
            scooter_location: '',
            scooter_type: '',
            scooter_date: '',
            scooter_priority: '',
            scooter_resolved: false
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Report a Scooter in the Way</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Location: </label>
                        <input type="text" 
                        // value={this.state.value}
                            className="form-control"
                            value={this.state.scooter_location}
                            onChange={this.onChangeScooterLocation}
                        />
                    </div>
                    <div className="form-group">
                        <label>Scooter Type: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.scooter_type}
                            onChange={this.onChangeScooterType}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date Reported: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.scooter_date}
                            onChange={this.onChangeScooterDate}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={this.state.scooter_priority === 'Low'}
                                onChange={this.onChangeScooterPriority}
                            />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Medium"
                                checked={this.state.scooter_priority === 'Medium'}
                                onChange={this.onChangeScooterPriority}
                            />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="High"
                                checked={this.state.scooter_priority === 'High'}
                                onChange={this.onChangeScooterPriority}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Report Scooter" className="btn btn-warning" />
                    </div>
                </form>
            </div>
        );
    };
};