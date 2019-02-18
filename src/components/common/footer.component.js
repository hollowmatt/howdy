import React, { Component } from 'react';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import '../css/howdy.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <ul className="nav justify-content-center footer">
        <li className="nav-item">
          <Link to={'#'} className="nav-link active" >Get the App</Link>
        </li>
        <li className="nav-item">
          <Link to={'#'} className="nav-link">Help</Link>
        </li>
        <li className="nav-item">
          <Link to={'#'} className="nav-link">Email</Link>
        </li>
        <li className="nav-item">
          <Link to={'#'} className="nav-link">Copyright</Link>
        </li>
      </ul> 
    );
  }
}

export default Footer;