import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { createBrowserHistory } from 'history';
import Nav from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import EventsView from './components/EventsView/EventsView';
import './App.css';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Route exact path = "/" component={Home}/>
          <Route path = "/login" component={Login} />
          <Route path = "/signup" component={Signup}/>
          <Route path = "/events" component={EventsView}/>
        </div>
      </Router> 
    );
  }
}

export default App;
