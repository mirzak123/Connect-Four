import React from "react"
import { motion } from 'framer-motion'
import counterRedLarge from "../assets/images/counter-red-large.svg"
import counterYellowLarge from "../assets/images/counter-yellow-large.svg"
import counterRedSmall from "../assets/images/counter-red-small.svg"
import counterYellowSmall from "../assets/images/counter-yellow-small.svg"

export default function Field(props) {
  let counterRed = counterRedLarge
  let counterYellow = counterYellowLarge

  const styles = {
    // width: props.screenSize !== 'small' ? '64px' : '39px',
    // height: props.screenSize !== 'small' ? '64px' : '39px',
    width:`${0.101266 * props.boardWidth}px`,
    height:`${0.101266 * props.boardWidth}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
    // border: '2px solid red',
    margin: '0',
    padding: '0',
    // bowShadow: '0 0 10px 10px #fff inset',
  }

  if (props.screenSize === 'small') {
    counterRed = counterRedSmall
    counterYellow = counterYellowSmall
  }

  const tween = {
    type: "tween",
    duration: 0.2
  }

  return (
    <motion.div
      animate={{ y: props.animate ? [-500, 0] : 0 }}
      transition={tween}
      className={props.active ? "field" : "field inactive"}
      data-col={props.col}
      data-row={props.row}
      onClick={() => props.handleMove(props.row, props.col)}
      onMouseEnter={(e) => props.handleMarker(e, props.col)}
      style={styles}
    >
      {props.value !== 0 &&
        <img src={props.value === 1 ? counterRed : counterYellow} alt="counter disk" />
      }
      {props.isWinningTile &&
        <div className="field__circle"></div>
      }
    </motion.div>
  )
}
