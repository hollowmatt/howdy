import React, { Component } from 'react';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import './components/css/app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Quiz from './components/quiz.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
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
