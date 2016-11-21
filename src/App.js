import React from 'react';
import checkForWinner from './lib/checkForWinner';
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
      STATUS: 'GAME IN PROGRESS'
		}
	},
	handleClick: function(e){
		var squareId = e.target.id;
		this.setState({clicks: this.state.clicks + 1 })

		var idArray = squareId.toString()
                          .split('')
                          .map(function(n){ return (parseInt(n, 10) - 1)
                          .toString() }),
		    cbs = this.state.currentBoardDisplay,
			  xbs = this.state.xBoardState,
			  obs = this.state.oBoardState,
			  currentSquare = cbs[idArray[0]][idArray[1]],
        currentPlayer = this.state.currentPlayer;

		//Checkout Square / STATUS of game OVER?
		if ( currentSquare === null && this.state.STATUS === 'GAME IN PROGRESS') {

			cbs[idArray[0]][idArray[1]] = currentPlayer

			//Check whos turn
			if (this.state.turnX) {

				xbs.push(squareId);

				this.setState({
					turnX:false,
					currentPlayer: 'O',
					xBoardState: xbs,
					STATUS: checkForWinner(currentPlayer, xbs) ? "X Is The Winner!" : "GAME IN PROGRESS"
				});

			} else {

				obs.push(squareId);

				this.setState({
					turnX:true,
					currentPlayer: 'X',
					oBoardState: obs,
					STATUS: checkForWinner(currentPlayer, obs) ? "O Is The Winner!" : "GAME IN PROGRESS"
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
            <header> STATUS: <strong>{this.state.STATUS}</strong></header>
            <h1>Welcome to Tic Tac Toe : React</h1>
            <div className="info">
      			 <p> Clicks: <strong>{this.state.clicks}</strong> | Player Turn: <strong>{this.state.currentPlayer}</strong> </p>
            </div>
        		<Board className="Board"
                    currentBoardDisplay={this.state.currentBoardDisplay}
                    onClick={this.handleClick}
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}/>

            <button id="reset" onClick={this.resetBoard}>RESET</button>

      		</div>
    	);
	}
});

module.exports = App;
