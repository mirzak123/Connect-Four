import React from "react"
import playerOneLogo from "../assets/images/player-one.svg"
import playerTwoLogo from "../assets/images/player-two.svg"

export default function PlayerScore(props) {
  const styles = {
    left: props.player === 1 ? '-20%' : '120%',
  }

  const iconStyles = {}

  if (props.screenSize !== 'large') {
    styles.position = 'static'
    styles.transform = 'translate(0, 0)'
    styles.width = '100%'
    styles.marginTop = '1em'
    styles.display = 'flex'
    styles.justifyContent = 'space-between'
    styles.padding = '0.2em 1em'

    iconStyles.scale = props.screenSize === 'medium' ? '1' : '0.7'
    iconStyles.transform = 'translate(0%, -50%)'
    iconStyles.top = '40%'

    if (props.player === 1) {
      iconStyles.left = '-18%'
    } else {
      iconStyles.right = '-18%'
    }
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
