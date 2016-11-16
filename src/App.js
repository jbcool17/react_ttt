import React from 'react';
import Board from './Board';
import './App.css';

var App = React.createClass({
	getInitialState: function() {
		return {
			score: 0
		}	
	},
	handleClick: function(e){
		console.log("App: " + e.target)
		this.setState({score: this.state.score + 1 })
	},
	render: function(){
		return (
      		<div className="container">
        		<Board className="Board" onClick={this.handleClick} score={this.state.score}/>
      		</div>
    	);
	}
});

module.exports = App;
