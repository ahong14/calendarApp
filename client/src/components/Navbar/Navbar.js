import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.scss';

class AppNavbar extends Component{
    render(){
        return(
            <div>
                <Navbar className = "navbarContainer" bg = "dark" expand = "lg" fixed = "top">
                    <Navbar.Brand > <Link to = "/"> Calendar App </Link> </Navbar.Brand>
                    <Nav>
                        <Link to = "/signup"> 
                            <NavItem> Sign Up </NavItem> 
                        </Link>
                        <Link to = "login"> 
                            <NavItem> Login </NavItem> 
                        </Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;
