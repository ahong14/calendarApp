import React, { Component } from 'react';
import './UserEvents.css';

class UserEvents extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className = ".eventContainer" >
                <p> {this.props.id} </p>   
                <p> {this.props.content} </p>   
                <p> {this.props.eventDate} </p>   
                <p> {this.props.startTime} </p>   
                <p> {this.props.endTime} </p>   
            </div>
        );
    }
}

export default UserEvents;