import React, { Component } from 'react';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import './css/howdy.css';

class How extends Component {
  render() {
    return (
      <div className={this.props.data.style}>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1 className="display-4 center">{this.props.data.title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <hr className="my-4 center"/>
            </div>
          </div>
          <div className="row">
            {this.props.data.images.map(function(image, index) {
            	return( 
                <div className="col-sm" align="center">
                  <div className="image-box" key={index} >
                    <img className="how-image img-fluid" src={image.imageURL} />
                    <p>{image.imageText}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default How;