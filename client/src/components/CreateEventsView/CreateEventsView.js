import React, { Component } from 'react';
import './CreateEventsView.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import TimePicker from 'react-time-picker';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
const format = 'h:mm a';
import axios from 'axios';
import { connect } from 'react-redux';


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

    componentDidMount(){
        if(this.props.login === false){
            alert("Please login to edit events");
            this.props.history.push("/login");
        }
    }
    
    sendEventCreated = () => {
        axios.post("/api/events/createEvent", {
            params:{
                title: this.state.title,
                content: this.state.content,
                date: this.state.eventDate,
                startTime: this.state.startTime,
                endTime: this.state.endTime
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
                            <TimePicker showSecond = {false} inputReadOnly use12Hours onChange = {(time) => this.setState({startTime: time.format(format)})}/>

                            <Form.Label> Select End Time </Form.Label>
                            <TimePicker showSecond = {false} inputReadOnly use12Hours onChange = {(time) => this.setState({endTime: time.format(format)})}/>
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

const mapStateToProps = state => {
    return{
        login: state.login.login
    }
}

export default connect(mapStateToProps, null) (CreateEventsView);