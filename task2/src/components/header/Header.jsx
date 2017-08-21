import React, { Component } from 'react';
import Navigation from './Navigation.jsx';

class Header extends Component{
	render(){
		return (
			<div className="header">
				<Navigation/>
				<div className="header-content-box">
                    <p className="header-text">The easiest way to recruit doctors</p>
                    <p className="header-subtext">1 of 6 doctors in India are searching for their new career move in PlexusMD</p>                       
                </div>
			</div>
		);
	}
}

export default Header;