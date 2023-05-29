import React from 'react'
import { Link } from 'react-router-dom'
import checkbox from '../assets/images/icon-check.svg'

export default function Rules() {
  return (
    <div className="modal-container bg-purple">
      <div className="game-rules">
        <h1>GAME RULES</h1>
        <div className="game-rules__section">
          <div className="game-rules__subtitle">
            OBJECTIVES
          </div>
          <div className="game-rules__text">
            Be the first player to connect 4 of the same colored discs in a
            row (either vertically, horizontally, or diagonally).
          </div>
        </div>
        <div className="game-rules__section">
          <div className="game-rules__subtitle">
            HOW TO PLAY
          </div>
          <ol className="game-rules__list">
            <li>
              Red goes first in the first game
            </li>
            <li>
              Players must alternate turns, and only
              one disc can be dropped in each turn.
            </li>
            <li>
              The game ends when there is a 4-in-a-row or a stalemate.
            </li>
            <li>
              The starter of the previous game goes second on the next game.
            </li>
          </ol>
        </div>
        <Link
          to="/Connect-Four"
          style={{
            position: 'absolute',
            bottom: '-12%'
          }}
        >
          <img src={checkbox} alt="checkbox" />
        </Link>
      </div>
    </div>
  )
}
