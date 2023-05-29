import React, { useState, useEffect } from "react"
import timerRed from "../assets/images/turn-background-red.svg"
import timerYellow from "../assets/images/turn-background-yellow.svg"

export default function Timer(props) {
  let timerId = null
  const [timer, setTimer] = useState(30)

  useEffect(() => {
    setTimer(30)
  }, [props.resetTimer])

  function startTimer() {
    // TODO: countdown the timer
    timerId = setInterval(() => {
      props.game.currentGameBoard.lastMove = null
      setTimer(prevTimer => prevTimer - 1)
      if (timer <= 0) {
        setTimer(30)
        props.toggleOnMove()
      }
    }, 1000)
  }

  function pauseTimer() {
    // TODO: pause countdown of the timer
    clearInterval(timerId)
  }

  useEffect(() => {
    startTimer()

    return () => {
      clearInterval(timerId)
    }
  }, [timer, setTimer])

  const timerStyles = {
    width: props.screenSize === "large" ? "100%" : "80%",
  }

  return (
    <div
      className="timer"
    >
      <img
        className="timer__image"
        src={props.player === 1 ? timerRed : timerYellow}
        alt="move counter"
        style={timerStyles}
      />
      <div className="timer__info">
        <div className="timer__player">Player {props.player}'s turn</div>
        <div className="timer__seconds">{timer}s</div>
      </div>
    </div>
  )
}
