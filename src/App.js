import React, { Component } from 'react';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Quiz from './components/quiz.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" href="howdy.html">How is your day?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Meeting Tracker</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Time Tracker</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Login</a>
            </li>
          </ul>  
          <Switch>
            <Route exact path='/' component={ Index } />
            <Route exact path='/howdy' component={ Quiz } /> 
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
