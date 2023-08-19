export default class GameBoard {
  constructor() {
    this.board = GameBoard.getNewBoard()
    this.onMove = 1
    this.lastMove = null
    this.winner = null // null if game isn't over, 0 for tie, 1 and 2 for players
    this.moveCount = 0
    this.connectedTiles = null // array of 4 connected tiles that won the game
  }

  static ROWS = 6
  static COLUMNS = 7

  static getNewBoard() {
    // instantiate matrix and assign value of 0 to each cell
    const board = []
    for(let i = 0; i < GameBoard.ROWS; i++) {
      board[i] = new Array(GameBoard.COLUMNS).fill(0)
    }
    return board
  }

  makeMove(col) {
    // input: column in which we wish to insert a value from above
    //
    if (col < 0 || col >= GameBoard.COLUMNS) {
      // nonexistent column
      return 0
    }

    for (let i = GameBoard.ROWS - 1; i >= 0; i--) {
      // find first available cell in column from the bottom
      if (this.board[i][col] === 0) {
        this.board[i][col] = this.onMove
        this.onMove = this.onMove === 1 ? 2 : 1
        this.moveCount += 1
        this.lastMove = [i, col]
        return ([i, col])
      }
    }

    this.lastMove = null
    // no cells available in the column
    return 0
  }

  isGameOver() {
    // no more possible moves to be made
    // results in draw
    if (this.moveCount >= 42) {
      this.winner = 0
      return true
    }

    // Four functions that check whether we have connected
    // 4 identical values
    //
    // arrow functions because we need access to
    // 'this' refering to instance variables
    const checkRight = (x, y) => {
      // out of bounds
      if (y > 3) {
        return false
      }

      // slice 4 element array to the right of what we are checking
      // and see if the values are equal
      if (this.board[x].slice(y, y + 4).every(cell => {
        return cell === this.board[x][y]
      })) {
        // if they are equal we set the winner of the current game
        this.winner = this.board[x][y]

        this.connectedTiles = [[x, y], [x, y+1], [x, y+2], [x, y+3]]
        return true
      }

      return false
    }

    const checkRightBottom = (x, y) => {
      if (x > 2 || y > 3) {
        return false
      }

      const value = this.board[x][y]

      if (value === this.board[x+1][y+1] &&
        value === this.board[x+2][y+2] &&
        value === this.board[x+3][y+3]) {
        this.winner = this.board[x][y]

        this.connectedTiles = [[x, y], [x+1, y+1], [x+2, y+2], [x+3, y+3]]
        return true
      }

      return false
    }

    const checkBottom = (x, y) => {
      if (x > 2) {
        return false
      }

      // using map to create an array accross the desired column and then slice it
      if (this.board.map(row => row[y]).slice(x, x + 4).every(cell => {
        return cell === this.board[x][y]
      })) {
        this.winner = this.board[x][y]
        this.connectedTiles = [[x, y], [x+1, y], [x+2, y], [x+3, y]]
        return true
      }

      return false
    }

    const checkLeftBottom = (x, y) => {
      if (x > 2 || y < 3) {
        return false
      }
      
      const value = this.board[x][y]

      if (value === this.board[x+1][y-1] &&
        value === this.board[x+2][y-2] &&
        value === this.board[x+3][y-3]) {
        this.winner = this.board[x][y]

        this.connectedTiles = [[x, y], [x+1, y-1], [x+2, y-2], [x+3, y-3]]
        return true
      }

      return false
    }

    // run all four checks on every cell that isn't a zero
    for (let i = 0; i < GameBoard.ROWS; i++) {
      for (let j = 0; j < GameBoard.COLUMNS; j++) {
        if (this.board[i][j] === 0) continue
        if (checkRight(i, j) || checkBottom(i, j) || checkRightBottom(i, j) || checkLeftBottom(i, j)) {
          return true
        }
      }
    }

    return false;
  }
}
