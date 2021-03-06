import React, { Component } from 'react';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './css/howdy.css';

import Header from './common/header.component';
import Footer from './common/footer.component';

const marks = {
  1: {
    style: {
      color: 'green'
    },
    label: <strong>1</strong>
  },
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: {
    style: {
      color: 'red'
    },
    label: <strong>7</strong>
  }
};

function log(value) {
  console.log("slider change: " + value);
};

export default class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    // the rest is the same...

    if (isMobile) {
      return (
        <p> This is a mobile view</p>
      );
    } else {
      return (
        <div className="index">
          <Header />
          <div className="day-box">
            <div className="row">
              <div className="col-12" align="center">
                <h2>How bad was your day?</h2>
              </div>
            </div>
            <form>
              <div className="form-group row">
                <div className="col-12" align="center">
                  <Slider dots min={1} max={7} marks={marks} step={1} onChange={log} defaultValue={4} />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-12" align="center">
                  <input type="checkbox" name="escalation" value="escalation"/>
                  <label className="label-text">Check if there was an escalation today</label>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-12" align="right">
                  <input type="submit" value="SUBMIT" className="btn btn-large orange-background button-text day-btn"/>
                </div> 
              </div>
            </form>
          </div>
          <Footer />
        </div>
      );
    } 
  }
}

