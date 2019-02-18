import React, { Component } from 'react';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
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
    );
  }
}

export default Header;