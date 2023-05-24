import React from "react"
import { motion } from 'framer-motion'
import counterRed from "../assets/images/counter-red-large.svg"
import counterYellow from "../assets/images/counter-yellow-large.svg"

export default function Field(props) {
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
    >
      {props.value !== 0 &&
        <img src={props.value === 1 ? counterRed : counterYellow} alt="counter disk" />
      }
    </motion.div>
  )
}
