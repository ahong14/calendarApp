import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import CalendarImage from '../../images/calendarImage.jpg';

class Home extends Component{
    render(){
        return(
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1> Calendar App </h1>
                        <Image thumbnail fluid src = { CalendarImage }/>
                        <h5>
                            Web app to maintain and personalize events and reminders
                        </h5>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Home;