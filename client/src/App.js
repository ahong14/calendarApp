import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Nav from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Route exact path = "/" component={Home}/>
          <Route path = "/login" component={Login} />
          <Route path = "/signup" component={Signup}/>
        </div>
      </Router> 
    );
  }
}

export default App;
