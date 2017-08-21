import React, { Component } from 'react';
import './news.css';

class News extends Component{
	render(){
		return (
			<div className="News">
				<div className="section-header-text">
	                <p className="header-text-bold">In the News</p>
	                <div className="text-border"></div>
            	</div>
			</div>
		);
	}
}

export default News;