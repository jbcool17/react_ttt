import React from 'react';
import './Square.css';

var Square = React.createClass({
	handleClick: function(e){
		console.log(e.target.id)
	},
	handleHover: function(e){
		console.log("hover: " +e.target.id)
	},
	render: function(){
		return <div className="Square" 
    			id={this.props.startNumber} 
    			onClick={this.handleClick}
    			onMouseOver={this.handleHover}></div>;
	}
})



module.exports = Square;
