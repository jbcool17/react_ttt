import React, { Component } from 'react';
import './Board.css';

var boardKeys = [[11,12,13],[21,22,23],[31,32,33]]

class Board extends Component {
  render() {
  	var rowNodes = this.props.currentBoardDisplay.map(function(a, i){

  		var squareNodes = a.map(function(b,k){
  			var id = boardKeys[i][k];
  			return <div className="square" key={id} id={id}>{b}</div>;
  		})

  		return <div className="row" key={i}>{squareNodes}</div>;
  	})
  	
    return (
      <div onClick={this.props.onClick}>
		{rowNodes}
      </div>
    );
  }
}

export default Board;
