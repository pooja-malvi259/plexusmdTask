import React, { Component } from 'react';
import FormComponent from './FormComponent';
import './contact.css';

class Contact extends Component{
	render(){
		return (
			<div className="Contact">
				<div className="section-header-text">
	                <p className="header-text-bold">Contact Us</p>
	                <div className="text-border"></div>
            	</div>
			</div>
		);
	}
}

export default Contact;