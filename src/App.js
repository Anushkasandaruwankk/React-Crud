import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './home';
import Login from './login';
class App extends Component{
  render() {
    return(
        <Router>
          <div>
            <h2>
              Welcome to React Router
            </h2>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              
