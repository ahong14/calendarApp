import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            phone: ''
        }
    }

    sendSignup = () => {
        axios.post("/api/users/signup", {
            params: {
                email: this.state.email.trim(),
                password: this.state.password.trim(),
                phone: this.state.phone.trim()
            }
        })
        .then(res => {
            if(res.data.success === true){
                alert(res.data.message);
                this.props.history.push("/login");
            }
        })
        .catch(err => {
            alert(err);
        })
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

                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type = "tel" onChange = {(event) => this.setState({phone: event.target.value})}/>
                        </Form.Group>


                        <Button onClick = {this.sendSignup} variant="primary">
                            Signup
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Signup;