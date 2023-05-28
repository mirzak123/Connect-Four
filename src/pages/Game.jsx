import { React, useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import PlayerScore from '../components/PlayerScore'
import GameBoard from '../components/GameBoard'
import ConnectFour from '../gameLogic/connectFour.js'
import Logo from '../components/Logo'
import WinnerInfo from '../components/WinnerInfo'
import Timer from '../components/Timer'
import ToolbarButton from '../components/ToolbarButton'

export default function Game() {
  const [game, setGame] = useState(new ConnectFour())
  const [showWinnerInfo, setShowWinnerInfo] = useState(false)

  // Controlling which images render in which view (desktop, tablet, mobile)
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      setScreenSize(innerWidth > 1024 ? 'large' : innerWidth > 768 ? 'medium' : 'small');
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /*
   * If we were to put timer state into the Game component, every time
   * the timer updated (every second), the entire Game component would
   * rerender which causes the GameBoard to be glitchy and uplayable
   * The GameBoard however needs a way to interract with the timer
   * because we want it to be able to reset the timer upon every made move.
   * The solution was to create the timer state inside the Timer component,
   * but create a state called resetTimer inside the Game component which
   * would essentially be a toggle that would be used inside the Timer
   * component to reset the timer, and the setResetTimer function would be
   * used inside the GameBoard component in order to indicate that the timer
   * needs to be reset.
   * */
  const [resetTimer, setResetTimer] = useState(false)

  useEffect(() => {
    if (game.isGameActive) {
      setShowWinnerInfo(false)
    } else {
      setShowWinnerInfo(true)
    }
  }, [game])

  function restartGame() {
    game.startNewGame()
    setGame(new ConnectFour(game))
  }

  function restartMatch() {
    setGame(new ConnectFour())
    setResetTimer(prev => !prev)
  }

  function toggleOnMove() {
    game.currentGameBoard.onMove = game.currentGameBoard.onMove === 1 ? 2 : 1
    setGame(new ConnectFour(game))
  }

  return (
    <div className="container">
      <div className="game-container">
        <div className="toolbar">
          <ToolbarButton
            to="/"
            value="menu"
          />
          <Logo />
          <ToolbarButton
            to=""
            onClick={restartMatch}
            value="restart"
          />
        </div>
        <div className="player-score-container">
          <PlayerScore
            player={1}
            wins={game.gamesWon[1]}
            screenSize={screenSize}
          />
          <PlayerScore
            player={2}
            wins={game.gamesWon[2]}
            screenSize={screenSize}
          />
        </div>
        <GameBoard
          game={game}
          setGame={setGame}
          setResetTimer={setResetTimer}
          screenSize={screenSize}
        />
        <div className="game__info">
          { showWinnerInfo ?
            <AnimatePresence>
              <WinnerInfo
                key="winner-info"
                gameBoard={game.currentGameBoard}
                restartGame={restartGame}
                isTie={game.currentGameBoard.winner > 0 ? false : true}
                winner={game.currentGameBoard.winner === 1 ? 'PLAYER 1' : 'PLAYER 2'}
              />
            </AnimatePresence> :
            <Timer
              resetTimer={resetTimer}
              player={game.currentGameBoard.onMove}
              toggleOnMove={toggleOnMove}
              game={game}
              screenSize={screenSize}
            />
          }
        </div>
      </div>
      <div
        className="game__winner-indicator"
        style={{
          backgroundColor: game.isGameActive ? 'var(--dark-purple)' :
            game.currentGameBoard.winner === 1 ? 'var(--red)' : 'var(--yellow)'
        }}
      ></div>
    </div>
  )
}
