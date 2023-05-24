import GameBoard from './gameBoard.js'

export default class ConnectFour {
  constructor(connectFour = null) {
    if (connectFour === null) {
      // no object to clone has been provided
      this.currentGameBoard = new GameBoard()
      this.startedCurrentGame = 1
      // player 1, player 2 and ties
      this.gamesWon = { 1: 0,  2: 0, 0: 0 }
      this.previousGames = []
      this.isGameActive = true
    } else {
      // clone provided object
      this.currentGameBoard = connectFour.currentGameBoard
      this.startedCurrentGame = connectFour.startedCurrentGame
      this.gamesWon = connectFour.gamesWon
      this.previousGames = connectFour.previousGames
      this.isGameActive = connectFour.isGameActive
    }
  }

  makeMove(col) {
    const move = this.currentGameBoard.makeMove(col)
    if (this.currentGameBoard.isGameOver()) {
      this.gamesWon[this.currentGameBoard.winner] += 1
      this.previousGames.push(this.currentGameBoard)
      this.currentGameBoard.lastMove = null
      this.isGameActive = false
    }

    return move
  }

  startNewGame() {
    this.currentGameBoard = new GameBoard()
    this.startedCurrentGame = this.startedCurrentGame === 1 ? 2 : 1
    this.currentGameBoard.onMove = this.startedCurrentGame
    this.isGameActive = true
  }

  endCurrentGame() {
    this.previousGames.push(this.currentGameBoard)
    this.currentGameBoard = null
    // TODO: update game statistics
  }
}
