import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './UserEvents.css';

class UserEvents extends Component{
    constructor(props){
        super(props);
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
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default UserEvents;