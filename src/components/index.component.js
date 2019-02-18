import React, { Component } from 'react';

export default class Index extends Component {
	render() {
		return (
			<div className="index">
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
      </div>
		);
	}
}