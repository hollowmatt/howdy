import React, { Component } from 'react';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import './css/howdy.css';

class Peek extends Component {
  render() {
    return (
      <div className={this.props.data.style}>
        <h1 className="display-4 center">{this.props.data.title}</h1>
        <hr className="my-4 center"/>
        <p className="center">
          {this.props.data.images.map(function(image, index) {
          	return <img className="how-image" src={image.imageURL} key={index} height="200" width="200"></img>
          })}
        </p>
         <p className="lead center">
          <a className="btn btn-primary btn-lg btn-outline " href="#" role="button">{this.props.data.button}</a>
        </p>
      </div>
    );
  }
}

export default Peek;