import React, { Component } from 'react';
import Header from './common/header.component';
import Footer from './common/footer.component';
import Hero from './hero.component';

const staticData = {
	"heroData": {
		"title": "Be data driven about hating your job",
		"body": ["rate & track each and every day to know when it is time for a change."],
		"button":"Start Tracking Now"
	},

	"whyData": {
		"title": "Why?",
		"body": [
			"We started company X in 2018 when we realized that we had no real way to judge how bad our days " +
		 	"really were.  Everyday seemed bad… but did that mean they were all just average. ",
		 	"We ask you to track your day on a 7 point scale - science shows that raing on a scale of 7 will " +
		 	"give you more accurate, un-average data. You define for yourself what 1 means and what 7 means " +
		 	"(or pick from a number of themes we’ve thought up for you!), so when you rate your day you remember " +
		 	"what the scale is.",
		 	"You can look back at your data at any time and compare yourself to everyone else, set alarms to " +
		 	"trigger if you have too many bad days in a row and many other new features we are constantly " +
		 	"experimenting with!"],
		"button":"Start Today, Get the APP"
	},
	
	"howData": {

	},

  "corpHow": {

  },

	"peek": {

	}
};

export default class Index extends Component {
	render() {
		return (
			<div className="index">
				<Header />
				<Hero data={staticData.heroData}/>
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
	      <Footer />
      </div>
		);
	}
}