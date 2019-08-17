import React, { Component } from 'react';
import Navbar from 'react-bootstrap';

class Nav extends Component{
    render(){
        return(
            <div>
                <Navbar>
                    <Navbar.Brand > Calendar App </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Test
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Nav;
