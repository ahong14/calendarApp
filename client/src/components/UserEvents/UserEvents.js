import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './UserEvents.css';
import axios from 'axios';
import { connect } from 'react-redux';
import actions from '../../actions/actions';
import PropTypes from 'prop-types';

class UserEvents extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id
        }
    }

    //get events from database to display
    getEvents = () => {
        //get updated events from database
        axios.get("/api/events/getevents")
            .then(res => {
                if(res.data.success === true){
                    //update redux store of events
                    this.props.updateEvents(res.data.data);
                    // this.props.updateEventsArray(res.data.data);
                }
            })
            .catch(err => {
                alert(err);
            })
    }

    //delete event from database
    deleteEvent = () => {
        axios.delete("/api/events/deleteEvent", {
            params:{
                id: this.state.id
            }
        })
        .then(res => {
            if(res.data.success === true){
                alert(res.data.message);
                this.getEvents();
            }
        })
        .catch(err => {
            alert(err);
        })
    }

    //if the component updated, check for new updates to re-render
    componentDidUpdate(){
        this.getEvents();
    }

    render(){
        return(
            <div>
                <Card border = "primary">
                    <Card.Header> Event </Card.Header>
                    <Card.Body>
                        <Card.Title> {this.props.title} </Card.Title>
                        <Card.Text> Event ID: {this.props.id} </Card.Text>
                        <Card.Text> {this.props.content} </Card.Text>
                        <Card.Text> Date: {this.props.eventDate} </Card.Text>
                        <Card.Text> Start Time: {this.props.startTime} </Card.Text>
                        <Card.Text> End Time: {this.props.endTime} </Card.Text>
                        <Button onClick = {this.deleteEvent} variant = "danger"> Delete Event </Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

//check prop types
UserEvents.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    eventDate: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired
};

//default values
UserEvents.defaultProps = {
    eventDate: "2018-01-01",
    startTime:"12:00 AM",
    endTime: "12:00 AM"
}

//update state of store
const mapDispatchToProps = dispatch => {
    return{
        updateEvents: events => 
            dispatch({
                type: actions.events.GET_EVENTS,
                events: events
            })
    }
}

export default connect(null, mapDispatchToProps) (UserEvents);