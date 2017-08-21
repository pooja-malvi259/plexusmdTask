import React, { Component } from 'react';
import './header.css';
import logoimage from './plexusmd-logo.png';

class Navigation extends Component{
	render(){
		return (
			<div className="navigation">
				<div id="navbar-example">
	                <nav className="navbar navbar-fixed-top">
	                    <div className="container-fluid">
	                        <div className="navbar-header">
	                            <img src={logoimage} className="logo-image" alt="PlexusMD Logo"></img>
	                            <a className="navbar-brand" href="#">Career</a>
	                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	                                <span className="sr-only">Toggle navigation</span>
	                                <span className="icon-bar"></span>
	                                <span className="icon-bar"></span>
	                                <span className="icon-bar"></span>
	                            </button>
	                        </div>
	                    </div>
	                    <div id="navbar" className="navbar-collapse collapse">
	                        <div className="navbar-header">
	                            <img src={logoimage} className="logo-image" alt="PlexusMD Logo"></img>
	                            <a className="navbar-brand" href="#">Career</a>
	                        </div>
	                        <ul className="nav navbar-nav navbar-right nav-tabs" role="tablist">
	                            <li className="active"><a href="#home" id="home-link">Home</a></li>
	                            <li><a href="#about-us" id="about-us-link">Why Us?</a></li>
	                            <li><a href="#success-stories" id="success-stories-link">Success Stories</a></li>
	                            <li><a href="#news" id="news-link">In the News</a></li>
	                            <li><a href="#client" id="client-link">Client</a></li>
	                            <button className="btn btn-danger navbar-btn career-button">Contact Us</button>
	                            <button className="btn btn-danger navbar-btn jobs-button">Find Jobs</button>
	                        </ul>
	                    </div>
	                    <div className="clearfix"></div>
	                </nav>
	            </div>
			</div>
		);
	}
}

export default Navigation;