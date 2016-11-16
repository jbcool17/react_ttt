import React from 'react';
import checkForWinner from './checkForWinner';
import Board from './Board';
import './App.css';

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
		this.setState({clicks: this.state.clicks + 1 })

		var idArray = squareId.toString()
                          .split('')
                          .map(function(n){ return (parseInt(n, 10) - 1)
                          .toString() });

		var cbs = this.state.currentBoardDisplay,
			  xbs = this.state.xBoardState,
			  obs = this.state.oBoardState,
			  currentSquare = cbs[idArray[0]][idArray[1]],
        currentPlayer = this.state.currentPlayer;

		//Checkout Square / STATUS of game OVER?
		if ( currentSquare === null && this.state.STATUS === 'NOT FOUND') {

			cbs[idArray[0]][idArray[1]] = currentPlayer

			//Check whos turn
			if (this.state.turnX) {

				xbs.push(squareId);

				this.setState({
					turnX:false,
					currentPlayer: 'O',
					xBoardState: xbs,
					STATUS: checkForWinner(currentPlayer, xbs) ? "X Is The Winner!" : "NOT FOUND"
				});


			} else {

				obs.push(squareId);

				this.setState({
					turnX:true,
					currentPlayer: 'X',
					oBoardState: obs,
					STATUS: checkForWinner(currentPlayer, obs) ? "O Is The Winner!" : "NOT FOUND"
				});

			}

			this.setState({ currentBoardDisplay: cbs })

		}



	},
  resetBoard: function(){
    this.setState(this.getInitialState())
    document.body.style.backgroundColor = "#2777AE";
  },
  onMouseOver:function(e){
    document.getElementById(e.target.id).style.backgroundColor = "#27AE5E"
  },
  onMouseOut:function(e){
    document.getElementById(e.target.id).style.backgroundColor = "#DAF7A6"
  },
	render: function(){
		return (
      		<div className="container">
      			<p> Clicks: {this.state.clicks} | STATUS: {this.state.STATUS} </p>
      			<p> CurrentPlayer: {this.state.currentPlayer} </p>
        		<Board className="Board"
                    currentBoardDisplay={this.state.currentBoardDisplay}
                    onClick={this.handleClick}
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}/>

            <button onClick={this.resetBoard}>RESET</button>

      		</div>
    	);
	}
});

module.exports = App;
