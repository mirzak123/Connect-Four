import React from "react"
import playerOneLogo from "../assets/images/player-one.svg"
import playerTwoLogo from "../assets/images/player-two.svg"

export default function PlayerScore(props) {
  const styles = {
    left: props.player === 1 ? '-20%' : '120%',
  }

  const iconStyles = {
    width: props.screenSize === 'large' ? '100%' : '20%',
  }

  if (props.screenSize !== 'large') {
    styles.position = 'static'
    styles.transform = 'translate(0, 0)'
    styles.width = '100%'
    styles.marginTop = '1em'
    styles.display = 'flex'
    styles.justifyContent = 'space-between'
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
        style={iconStyles}
      />
      <p className="player-score__player">PLAYER {props.player}</p>
      <p className="score">{props.wins}</p>
    </div>
  )
}
