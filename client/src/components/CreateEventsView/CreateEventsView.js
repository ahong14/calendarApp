import React, { Component } from 'react';
import './CreateEventsView.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import axios from 'axios';
import { getTime } from 'date-fns';


class CreateEventsView extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            content: "",
            eventDate: "",
            startTime: "",
            endTime:""
        }
    }
    
    sendEventCreated = () => {
        var startTime = getTime(this.state.startTime);
        var endTime = getTime(this.state.endTime);

        console.log("Times: ", startTime, endTime);

        axios.post("/api/events/createEvent", {
            params:{
                title: this.state.title,
                content: this.state.content,
                date: this.state.eventDate,
                startTime: startTime,
                endTime: endTime
            }
        })
        .then(res => {
            if(res.data.success === true){
                alert(res.data.message);
            }
        })
        .catch(err => {
            alert(err);
        })
    }

    render(){
        return(
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label> Event Title </Form.Label>
                        <Form.Control onChange = {(event) => this.setState({title: event.target.value})}placeholder="Enter event title" />

                        <Form.Label> Event Content </Form.Label>
                        <Form.Control onChange = {(event) => this.setState({content: event.target.value})} placeholder="Enter event content" />
                        
                        <div className = "dateTimeSelect"> 
                            <Form.Label> Select Start Date </Form.Label>
                            <DatePicker dateFormat="MMMM d, yyyy" selected = {this.state.eventDate} onChange = {(date) => {this.setState({eventDate: date})}}/>

                            <Form.Label> Select Start Time </Form.Label>
                            <TimePicker clearIcon = "Clear" amPmAriaLabel disableClock onChange = {(time) => {this.setState({startTime: time})}} />
                            {/* <DatePicker selected = {this.state.startTime} onChange = {(time) => {this.setState({startTime: time})}} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa"/> */}


                            <Form.Label> Select End Time </Form.Label>
                            <TimePicker clearIcon = "Clear" amPmAriaLabel disableClock onChange = {(time) => {this.setState({endTime: time})}} />
                            {/* <DatePicker selected = {this.state.endTime} onChange = {(time) => {this.setState({endTime: time})}} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa"/> */}
                        </div>
                       
                    </Form.Group>

                    <Button onClick = {this.sendEventCreated} variant="primary">
                        Create Event!
                    </Button>
                </Form> 
            </div>

        );
    }
}

export default CreateEventsView;