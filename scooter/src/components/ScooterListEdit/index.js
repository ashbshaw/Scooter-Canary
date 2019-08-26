import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

export default class ScooterListEdit extends Component {

    constructor(props) {
        super(props);

        this.onChangeScooterLocation = this.onChangeScooterLocation.bind(this);
        this.onChangeScooterType = this.onChangeScooterType.bind(this);
        this.onChangeScooterDate = this.onChangeScooterDate.bind(this);
        this.onChangeScooterPriority = this.onChangeScooterPriority.bind(this);
        this.onChangeScooterResolved = this.onChangeScooterResolved.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            scooter_location: '',
            scooter_type: '',
            scooter_date: '',
            scooter_priority: '',
            scooter_resolved: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/list/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    scooter_location: response.data.scooter_location,
                    scooter_type: response.data.scooter_type,
                    scooter_date: response.data.scooter_date,
                    scooter_priority: response.data.scooter_priority,
                    scooter_resolved: response.data.scooter_resolved
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeScooterLocation(e) {
        this.setState({
            scooter_location: e.target.value
        });
    }

    onChangeScooterType(e) {
        this.setState({
            scooter_type: e.target.value
        });
    }

    onChangeScooterDate(e) {
        this.setState({
            scooter_date: e.target.value
        });
    }

    onChangeScooterPriority(e) {
        this.setState({
            scooter_priority: e.target.value
        });
    }

    onChangeScooterResolved(e) {
        this.setState({
            scooter_resolved: !this.state.scooter_resolved
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            scooter_location: this.state.scooter_location,
            scooter_type: this.state.scooter_type,
            scooter_date: this.state.scooter_date,
            scooter_priority: this.state.scooter_priority,
            scooter_resolved: this.state.scooter_resolved
        };
        console.log(obj);
        axios.post('http://localhost:4000/list/edit/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/list/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Resolve Scooter Issue</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Location: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.scooter_location}
                                onChange={this.onChangeScooterLocation}
                                />
                    </div>
                    <div className="form-group">
                        <label>Scooter Type: </label>
                        <input 
                                type="text" 
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
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.scooter_priority==='Low'} 
                                    onChange={this.onChangeScooterPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.scooter_priority==='Medium'} 
                                    onChange={this.onChangeScooterPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.scooter_priority==='High'} 
                                    onChange={this.onChangeScooterPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeScooterResolved}
                                checked={this.state.scooter_resolved}
                                value={this.state.scooter_resolved}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Resolved
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Resolve" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }





}

