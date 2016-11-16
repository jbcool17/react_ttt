import React, { Component } from 'react';
import SquareRow from './SquareRow';
// import './Board.css';

class Board extends Component {
  render() {
    return (
      <div>
      	<p onClick={this.props.onClick}> {this.props.score} </p>

      	<SquareRow onClick={this.props.onClick} startNumber={[0,1,2]}/>
      	<SquareRow startNumber={[3,4,5]}/>
      	<SquareRow startNumber={[6,7,8]}/>
      </div>
    );
  }
}

export default Board;
