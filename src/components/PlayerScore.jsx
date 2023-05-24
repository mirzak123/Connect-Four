import React from "react"
import playerOneLogo from "../assets/images/player-one.svg"
import playerTwoLogo from "../assets/images/player-two.svg"

export default function PlayerScore(props) {
  const styles = {
    left: props.player === 1 ? '-20%' : '120%'
  }

  return (
    <div
      className="player-score info-block"
      style={styles}
    >
      <img
        className="player-score__icon"
        src={props.player === 1 ? playerOneLogo : playerTwoLogo}
        alt="player logo"
      />
      <p className="player-score__player">PLAYER {props.player}</p>
      <p className="score">{props.wins}</p>
    </div>
  )
}
