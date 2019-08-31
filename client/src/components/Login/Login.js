import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../../variables.scss';
import axios from 'axios';
import { connect } from 'react-redux';
import actions from '../../actions/actions';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    //handle login submittion
    submitLogin = () => {
        axios.post("/api/users/login", {
            params: {
                email: this.state.email.trim(),
                password: this.state.password.trim()
            }
        }).then(res => {
            if (res.data.success === true){
                alert(res.data.message);
                //update store of login status
                this.props.updateLogin();
                this.props.history.push("/events");
            }

            else{
                alert(res.data.message);
            }
        })
        .catch(err => {
            console.log(err);
            alert(err);
        })
    }

    handleEnter = (e) => {
        if(e.key === "Enter"){
            e.preventDefault;
            this.submitLogin();
        }
    }

    render(){
        return(
            <div onKeyPress = {this.handleEnter} className = {styles.contentContainer}>
                <h1> Login </h1>
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
 
                         <Button variant="primary" onClick = {this.submitLogin}>
                             Login
                         </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

//connect login state as prop to component
const mapStateToProps = state => {
    return{
        loggedIn: state.login.login
    }
}

//update state of store
const mapDispatchToProps = dispatch => {
    return{
        updateLogin: () => 
            dispatch({
                type: actions.login.LOGGED_IN
            })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
