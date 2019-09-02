import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { connect } from 'react-redux';
import actions from '../../actions/actions';
import axios from 'axios';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();


class AppNavbar extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    //call dispatch action to change redux state to logout user
    logoutUser = () => {
        this.props.updateLogout();
        //TODO: fix route change on logout
        // this.props.history.push("/login");
    }
    render(){
        //if user is not logged in, display non-authenticated navbar
        if(this.props.loggedIn != true){
            return(
                <div>
                    <Navbar bg = "light" expand = "lg" fixed = "top">
                        <Navbar.Brand > <Link to = "/"> Calendar App </Link> </Navbar.Brand>
                        <Nav justify variant = "tabs">
                            <Link to = "/signup"> 
                                <Nav.Item> Sign Up </Nav.Item> 
                            </Link>
                            <Link to = "/login"> 
                                <Nav.Item> Login </Nav.Item> 
                            </Link>
                        </Nav>
                    </Navbar>
                </div>
            );
        }

        //if user is logged in, display another navbar with events and logout
        else{
            return(
                <div>
                    <Navbar bg = "light" expand = "lg" fixed = "top">
                        <Navbar.Brand > <Link to = "/"> Calendar App </Link> </Navbar.Brand>
                        <Nav justify variant = "tabs">
                            <Link to = "/events"> 
                                <Nav.Item> Events </Nav.Item> 
                            </Link>
                            <Link to = ""> <Nav.Item onClick = {this.logoutUser}> Logout </Nav.Item> </Link>
                        </Nav>
                    </Navbar>
                </div>
            )
        }
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
        updateLogout: () => 
            dispatch({
                type: actions.login.LOGOUT
            })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavbar);
