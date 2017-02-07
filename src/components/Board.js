import React, { Component } from 'react';
import '../styles/Board.css';

var boardKeys = [[11,12,13],[21,22,23],[31,32,33]]

class Board extends Component {
  render() {
    var onClick     = this.props.onClick,
        onMouseOver = this.props.onMouseOver,
        onMouseOut  = this.props.onMouseOut;

// Compiles 3 Board Rows with 3 Squares Each
  	var rowNodes = this.props.currentBoardDisplay.map(function(a, i){

  		var squareNodes = a.map(function(b,k){
  			var id = boardKeys[i][k],
            styles = b === 'O' || b === 'X' ? {backgroundColor: "#27AE5E"} : {backgroundColor: "#DAF7A6"};

  			return (<div onClick={onClick}
                      onMouseOver={onMouseOver}
                      onMouseOut={onMouseOut}
                      style={styles} className="square" key={id} id={id}>{b}</div>);
  		})

  		return <div className="row" key={i}>{squareNodes}</div>;
  	})

    return (
      <div>
		    {rowNodes}
      </div>
    );
  }
}

export default Board;
