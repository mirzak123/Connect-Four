const prompt = require("prompt-sync")();

function playGame(board) {
  while (!board.isGameOver()) {
    input = prompt()
    if (input === 'q') {
      return
    }

    x = parseInt(input)

    if (isNaN(x)) {
      console.log('invalid input')
      continue
    }

    console.log(board.makeMove(x))
    console.table(board.board)
  }

  console.log('The winner is', board.winner)
}

import('./connectFour.js').then(mod => {
  const ConnectFour = mod.default
  const game = new ConnectFour()
  playGame(game.currentGameBoard)
})


