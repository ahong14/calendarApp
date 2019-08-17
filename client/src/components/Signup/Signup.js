import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render(){
        return(
            <div>
                <h1> Sign Up </h1>
                <div>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange = {(event) => this.setState({email: event.target.value})}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange = {(event) => this.setState({password: event.target.value})}/>
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Signup
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Signup;