import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import ConnectFour from '../gameLogic/connectFour'
import Field from '../components/Field'
import blackLayerLarge from '../assets/images/board-layer-black-large.svg'
import whiteLayerLarge from '../assets/images/board-layer-white-large.svg'
import blackLayerSmall from '../assets/images/board-layer-black-small.svg'
import whiteLayerSmall from '../assets/images/board-layer-white-small.svg'
import markerRed from '../assets/images/marker-red.svg'
import markerYellow from '../assets/images/marker-yellow.svg'

export default function GameBoard(props) {

  let blackLayer = blackLayerLarge
  let whiteLayer = whiteLayerLarge
  let showMarker = true

  const board = document.getElementById('board')
  const boardWidth = board ? board.offsetWidth : 0

    // padding: props.screenSize !== 'small' ? '20px' : '7px',
    // gap: props.screenSize !== 'small' ? '24px' : '8px'
    // padding:`${Math.floor(0.031645 * boardWidth)}px}`,
    // gap:`${0.037975 * boardWidth}px}`
  const fieldsContainerStyles = {
    padding: `${0.031646 * boardWidth}px`,
    paddingBottom: `${3 * 0.031646 * boardWidth}px`,
    columnGap:`${0.037975 * boardWidth}px`,
    rowGap:`${0.03 * boardWidth}px`,
  }

  if (props.screenSize === 'small') {
    blackLayer = blackLayerSmall
    whiteLayer = whiteLayerSmall
    showMarker = false
  } else if (props.screenSize === 'medium') {
    showMarker = false
  }

  function handleMove(row, col) {
    const move = props.game.makeMove(col)
    props.setGame(new ConnectFour(props.game))
    if (move) {
      props.setResetTimer(prev => !prev)
    }
  }

  // prevent null value checking when there has been no last move made
  let gameBegun = false, lastX, lastY
  if (props.game.currentGameBoard.lastMove) {
    gameBegun = true
    lastX = props.game.currentGameBoard.lastMove[0]
    lastY = props.game.currentGameBoard.lastMove[1]
  }

  function handleMarker(e, col) {
    if (!showMarker) return

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
          screenSize={props.screenSize}
          boardWidth={boardWidth}
          isWinningTile={props.game.currentGameBoard.connectedTiles?.some(coord => {
            if (coord[0] === i && coord[1] === j) {
              return true
            }
          })}
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
        src={blackLayer}
        alt="game board black"
      />
      <img
        className="game-board__image game-board__image--white"
        src={whiteLayer}
        alt="game board white"
      />
      <div
        className="game-board__fields-container"
        style={fieldsContainerStyles}
      >
        {fieldElements}
      </div>
      {showMarker &&
        <img
          id="marker"
          className="game-board__marker"
          src={props.game.currentGameBoard.onMove === 1 ? markerRed : markerYellow}
          alt="marker"
        />
      }
    </div>
  )
}
