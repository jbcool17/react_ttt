import React from 'react';
import Square from './Square';
import './SquareRow.css';

var SquareRow = React.createClass({
  render: function(){
    var squareNodes = this.props.startNumber.map(function(n){
      return <Square key={n} startNumber={n}/>;
    })
    return (
        <div onClick={this.props.onClick} className="SquareRow">
          {squareNodes}
        </div>
      )
  }
})

module.exports = SquareRow;
// export default SquareRow;
