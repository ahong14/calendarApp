import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class AppNavbar extends Component{
    render(){
        return(
            <div>
                <Navbar bg = "dark" expand = "lg">
                    <Navbar.Brand > Calendar App </Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;
