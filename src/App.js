import React, { Component } from 'react';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Quiz from './components/quiz';

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

          <div className="jumbotron main-jumbo">
            <h1 className="display-4">Howdy!</h1>
            <p className="lead">How was your day?  We want to know, and so do others.</p>
            <hr className="my-4"/>
            <p>
              Having a particularly good, or particularly bad day?  Let us know, then see 
              how others compare.  We will segment by company, by role and by geography.  
              The intent is to just see how happy you are.
            </p>
            <p>
              Want an enterprise version?  You can have this to guage your employee contentness, 
              all data will be anonomized (but will require login to associate with the company).  
              We at <strong>Howdy!</strong> feel that the only way to make things better is to 
              know how things are.
            </p>
            <p className="lead">
              <a className="btn btn-warning btn-lg" href="#" role="button">Learn more</a>
            </p>
          </div>

          <div className="row">
            <div className="col">
              <div className="jumbotron">
                <h1 className="display-4">Personal Use</h1>
                <p className="lead">How was your day?  We want to know, and so do others.</p>
                <hr className="my-4"/>
                <p>
                  Having a particularly good, or particularly bad day?  Let us know, then see 
                  how others compare.  We will segment by company, by role and by geography.  
                  The intent is to just see how happy you are.
                </p>
                <p>
                  Want an enterprise version?  You can have this to guage your employee contentness, 
                  all data will be anonomized (but will require login to associate with the company).  
                  We at <strong>Howdy!</strong> feel that the only way to make things better is to 
                  know how things are.
                </p>
                <p className="lead">
                  <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
              </div>
            </div>
            <div className="col">
              <div className="jumbotron">
                <h1 className="display-4">Enterprise Use</h1>
                <p className="lead">How was your day?  We want to know, and so do others.</p>
                <hr className="my-4"/>
                <p>
                  Having a particularly good, or particularly bad day?  Let us know, then see 
                  how others compare.  We will segment by company, by role and by geography.  
                  The intent is to just see how happy you are.
                </p>
                <p>
                  Want an enterprise version?  You can have this to guage your employee contentness, 
                  all data will be anonomized (but will require login to associate with the company).  
                  We at <strong>Howdy!</strong> feel that the only way to make things better is to 
                  know how things are.
                </p>
                <p className="lead">
                  <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
              </div>
            </div>
          </div>
          <Switch>
            <Route exact path='/howdy' component={ Quiz } /> 
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
