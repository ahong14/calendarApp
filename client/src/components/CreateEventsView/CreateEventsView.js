import React, { Component } from 'react';
import './CreateEventsView.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Datetime from 'react-datetime';

class CreateEventsView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label> Event Title </Form.Label>
                    <Form.Control placeholder="Enter event title" />

                    <Form.Label> Event Content </Form.Label>
                    <Form.Control placeholder="Enter event content" />

                </Form.Group>

                <Datetime/>


                <Button variant="primary">
                    Create Event!
                </Button>
            </Form> 
        );
    }
}

export default CreateEventsView;