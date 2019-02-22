import React, { Component } from 'react';
import Header from './common/header.component';
import Footer from './common/footer.component';
import Hero from './hero.component';
import How from './how.component';
import Peek from './peek.component';
import Carousel from './carousel.component';
const staticData = {
	"heroData": {
		"title": "Be data driven about hating your job",
		"body": ["rate & track each and every day to know when it is time for a change."],
		"button":"Start Tracking Now",
		"style": "jumbotron jumbo-odd"
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
		"button":"Start Today, Get the APP",
		"style": "jumbotron jumbo-odd"

	},
	
	"howData": {
		"title": "Here's how",
		"images": [
			{
				"imageURL": "./images/star.png",
				"imageText": "We'll ask you to rate how bad each of your days is"
			},
			{
				"imageURL": "./images/arrow.png",
				"imageText": "Look back every week, every month, every year"
			},
			{
				"imageURL": "./images/circle.png",
				"imageText": "Compare yourself to others in your industry or in your role"
			}
		],
		"style": "jumbotron jumbo-even"
	},

  "corpHow": {
  	"title": "Here's how for Corporations",
		"images": [
			{
				"imageURL": "./images/star.png",
				"imageText": "Sign up for an enterprise account to start tracking your employees happiness"
			},
			{
				"imageURL": "./images/arrow.png",
				"imageText": "Employees will login with their company email and be asked to rate their days of work"
			},
			{
				"imageURL": "./images/circle.png",
				"imageText": "Data is annonymized for you to track by level, function or group"
			}
		],
		"style": "jumbotron jumbo-even"
  },

	"peek": {
		"title": "Take a Peek",
		"images": [
		 {
		 		"imageURL": "./images/square.png"
		 },
		 {
		 		"imageURL": "./images/square.png"
		 }
		],
		"button": "Yes. I'm ready!",
		"style": "jumbotron jumbo-odd"
	}
};

export default class Index extends Component {
	render() {
		return (
			<div className="index">
				<Header />
				<Hero data={staticData.heroData}/>
				<How data={staticData.howData}/>
	      <Hero data={staticData.whyData}/>
	      <How data={staticData.corpHow}/>
	      <Peek data={staticData.peek}/>
	      <Footer />
      </div>
		);
	}
}