import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserEvents from '../UserEvents/UserEvents';
import axios from 'axios';
import actions from '../../actions/actions';

class EventsView extends Component{
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount(){
        axios.get('/api/events/getEvents')
            .then(res => {
                if(res.data.success === true && this.props.login === true){
                    this.setState({
                        events: res.data.data
                    }, () => {
                        //update redux store of events
                        this.props.updateEvents(this.state.events);
                    })
                }
                else{
                    alert("Please login to view events.");
                    this.props.history.push("/login");
                }
            })
            .catch(err => {
                console.log(err);
                alert(err);
            })
    }

    render(){
        const events = this.state.events.map(event => {
            return(
                <UserEvents key = {event.id} id = {event.id} title = {event.title} content = {event.content} eventDate = {event.eventDate} startTime = {event.startTime} endTime = {event.endTime}/>
            )
        });
        return(
            <div>
                <div>
                    <h3> Events </h3>
                    <button> Add events </button> 
                </div>

                <div>
                    {events}
                </div>
            </div>
        );
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
                type: actions.events.GET_EVENTS
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsView);

