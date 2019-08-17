import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path = "/" component={Home}/>
          <Route path = "/login" component={Login} />
        </div>
      </Router> 
    );
  }
}

export default App;
