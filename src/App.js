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
              <Link to={'/howdy'} className="nav-link active" >How is your day?</Link>
            </li>
            <li className="nav-item">
              <Link to={'#'} className="nav-link">Meeting Tracker</Link>
            </li>
            <li className="nav-item">
              <Link to={'#'} className="nav-link">Time Tracker</Link>
            </li>
            <li className="nav-item">
              <Link to={'#'} className="nav-link disabled">Login</Link>
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
