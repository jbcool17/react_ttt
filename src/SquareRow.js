// import React, { Component } from 'react';
import React from 'react';
import Square from './Square';
import './SquareRow.css';

// class SquareRow extends Component {
//   handleClick(e){
//     console.log(e.target)
//   }
//   render() {
//     return (
//         <div className="SquareRow">
//           <Square onClick={this.handlClick} />
//           <Square onClick={this.handlClick} />
//           <Square onClick={this.handlClick} />
//         </div>
//       )
//   }
// }

var SquareRow = React.createClass({
  render: function(){
    var squareNodes = this.props.startNumber.map(function(n){
      return <Square key={n} startNumber={n}/>;
    })
    return (
        <div className="SquareRow">
          {squareNodes}
        </div>
      )
  }
})

module.exports = SquareRow;
// export default SquareRow;
