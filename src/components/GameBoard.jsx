import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import ConnectFour from '../gameLogic/connectFour'
import Field from '../components/Field'
import blacyLayer from '../assets/images/board-layer-black-large.svg'
import whiteLayer from '../assets/images/board-layer-white-large.svg'
import markerRed from '../assets/images/marker-red.svg'
import markerYellow from '../assets/images/marker-yellow.svg'

export default function GameBoard(props) {

  function handleMove(row, col) {
    props.game.makeMove(col)
    props.setGame(new ConnectFour(props.game))
    props.setResetTimer(prev => !prev)
  }

  // prevent null value checking when there has been no last move made
  let gameBegun = false, lastX, lastY
  if (props.game.currentGameBoard.lastMove) {
    gameBegun = true
    lastX = props.game.currentGameBoard.lastMove[0]
    lastY = props.game.currentGameBoard.lastMove[1]
  }

  function handleMarker(e, col) {
    const marker = document.getElementById('marker')
    const board = document.getElementById('board')
    const fieldRect = e.target.getBoundingClientRect();
    const boardRect = board.getBoundingClientRect();

    marker.style.left = `${fieldRect.x - boardRect.x + fieldRect.width / 2}px`
  }

  const fieldElements = props.game.currentGameBoard.board.map((row, i) => {
    return row.map((cell, j) => {
      return (
        <Field
          key={nanoid()}
          col={j}
          row={i}
          value={cell}
          handleMove={handleMove}
          handleMarker={handleMarker}
          animate={gameBegun && lastX === i && lastY === j ? true : false}
          active={props.game.isGameActive ? true : false}
        />
      )
    })
  })

  return (
    <div
      id="board"
      className="game-board"
    >
      <img
        className="game-board__image game-board__image--black"
        src={blacyLayer}
        alt="game board black"
      />
      <img
        className="game-board__image game-board__image--white"
        src={whiteLayer}
        alt="game board white"
      />
      <div className="game-board__fields-container">
        {fieldElements}
      </div>
      <img
        id="marker"
        className="game-board__marker"
        src={props.game.currentGameBoard.onMove === 1 ? markerRed : markerYellow}
        alt="marker"
      />
    </div>
  )
}
