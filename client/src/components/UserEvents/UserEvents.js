import React, { Component } from 'react';

class UserEvents extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
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