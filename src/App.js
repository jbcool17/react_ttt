import React from 'react';
import Board from './Board';
import './App.css';

var winningCombos = [[11, 12, 13],
			        [21, 22, 23],
			        [31, 32, 33],
			        [11, 21, 31],
			        [12, 22, 32],
			        [13, 23, 33],
			        [11, 22, 33],
			        [13, 22, 31]];

function checkForWinner(currentPlayer, squares){
	var output = false;
	// console.log("Checking for winner: " + currentPlayer )
	if ( squares.length >= 0){
		for (var i = 0; i < winningCombos.length; i++){
			var wc = winningCombos[i],
				score = 0;

			for (var j = 0; j < squares.length; j++){
				var num = parseInt(squares[j], 10)
			
				if (wc.indexOf(num) >= 0){
					score += 1
					if (score >= 3) output = true;
				}
			}
		}
	}
	
	return output;

}
var App = React.createClass({
	getInitialState: function() {
		return {
			clicks: 0,
			turnX: true,
			currentPlayer: 'X',
			currentBoardDisplay: [[null, null, null],
        						[null, null, null],
        						[null, null, null]],
        	xBoardState: [],
        	oBoardState: [],
        	STATUS: 'NOT FOUND'

		}	
	},
	handleClick: function(e){
		var squareId = e.target.id;
		console.log("Square ID: " + squareId)
		this.setState({clicks: this.state.clicks + 1 })

		var idArray = squareId.toString().split('').map(function(n){ return (parseInt(n, 10) - 1).toString() });
		var cbs = this.state.currentBoardDisplay,
			xbs = this.state.xBoardState,
			obs = this.state.oBoardState,
			currentSquare = cbs[idArray[0]][idArray[1]];

		//Checkout Square / STATUS of game OVER?
		if ( currentSquare === null && this.state.STATUS === 'NOT FOUND') {
			
			cbs[idArray[0]][idArray[1]] = this.state.currentPlayer
			
			document.getElementById(squareId).style.backgroundColor = 'blue'

			//Check whos turn
			if (this.state.turnX)
			{
				xbs.push(squareId);

				this.setState({
					turnX:false,
					currentPlayer: 'O',
					xBoardState: xbs,
					STATUS: checkForWinner(this.state.currentPlayer, xbs) ? "WINNER FOUND!" : "NOT FOUND"
				});

				
			} else 
			{
				obs.push(squareId);

				this.setState({
					turnX:true,
					currentPlayer: 'X',
					oBoardState: obs,
					STATUS: checkForWinner(this.state.currentPlayer, obs) ? "WINNER FOUND!" : "NOT FOUND"
				});

				checkForWinner(this.state.currentPlayer, obs)
			}

			this.setState({ currentBoardDisplay: cbs })

		} else {
			console.log('already chosen or game over');
		}

	},
	render: function(){
		return (
      		<div className="container">
      			<p> Clicks: {this.state.clicks} | {this.state.STATUS} </p>
      			<p> CurrentPlayer: {this.state.currentPlayer} </p>
        		<Board className="Board" currentBoardDisplay={this.state.currentBoardDisplay} onClick={this.handleClick}/>

      		</div>
    	);
	}
});

module.exports = App;
