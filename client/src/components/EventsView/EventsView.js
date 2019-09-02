import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserEvents from '../UserEvents/UserEvents';
import axios from 'axios';
import actions from '../../actions/actions';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class EventsView extends Component{
    constructor(props){
        super(props);
        this.state = {
            events: this.props.events
        }
    }

    //when component loads, get collection of events for user from database
    componentDidMount(){
        axios.get('/api/events/getEvents')
            .then(res => {
                //if user is logged in, update events
                if(res.data.success === true && this.props.login === true){
                    this.props.updateEvents(res.data.data);
                    this.setState({
                        events: res.data.data
                    }, () => {
                        this.props.updateEvents(this.state.events);
                    })
                }
                //redirect user to login
                else{
                    alert("Please login to view events.");
                    this.props.history.push("/login");
                }
            })
            .catch(err => {
                alert(err);
            })
    }

    //function that is passed as prop to UserEvent component
    //if user deletes or adds an event, update array of events for re-rendering
    // updateEventsArray = (newEvents) => {
    //     this.setState({
    //         events: newEvents
    //     })
    // }
    
    //function to redirect to create event
    linkToCreate = () => {
        this.props.history.push("/createEvent");
    }

    render(){
        const events = this.state.events.map(event => {
            return(
                <UserEvents key = {event.id} id = {event.id} title = {event.title} content = {event.content} eventDate = {event.eventDate} startTime = {event.startTime} endTime = {event.endTime}/>
            )
        });

        //if there are events to be displayed
        if(this.state.events.length > 0){
            return(
                <div>
                    <div>
                        <h3> Events </h3>
                        <Button onClick = {this.linkToCreate} variant = "outline-warning">  Add events  </Button> 
                    </div>
                    <div>
                        {events}
                    </div>
                </div>
            );
        }

        //no events, default display text "No events"
        else if(this.state.events.length === 0){
            return(
                <div>
                    <div>
                        <h3> Events </h3>
                        <Button onClick = {this.linkToCreate} variant = "outline-warning">  Add events  </Button> 
                    </div>
                    <div>
                        No events!
                    </div>
                </div>
               
            )
        }
    }
}

const mapStateToProps = state => {
    return{
        events: state.events.events,
        login: state.login.login
    }
}

const mapDispatchToProps = dispatch => {
    return{
        updateEvents: events => {
            dispatch({
                type: actions.events.GET_EVENTS,
                events: events
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsView);

