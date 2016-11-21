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
  if ( squares.length >= 0){
    for (var i = 0; i < winningCombos.length; i++){
      var wc = winningCombos[i],
        score = 0;

      for (var j = 0; j < squares.length; j++){
        var num = parseInt(squares[j], 10)

        if (wc.indexOf(num) >= 0){
          score += 1
          if (score >= 3) {
            output = true;
            document.body.style.backgroundColor = 'red';
          }
        }
      }
    }
  }

  return output;

}

module.exports = checkForWinner;
