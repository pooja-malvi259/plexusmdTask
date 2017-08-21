import React, { Component } from 'react';
import './success.css';
import successImage from './Success_Stories.png'

class Success extends Component{
	render(){
		return (
			<div className="success">
				<div className="section-header-text">
                	<p className="header-text-bold">Success Stories</p>
                	<div className="text-border"></div>
            	</div>
	            <div className="success-stories-image">
	                <img src={successImage} className="img-responsive" alt="Success Stories Image"></img>
	            </div>
			</div>
		);
	}
}

export default Success;