import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ToolbarButton from './ToolbarButton'

export default function WinnerInfo(props) {
  return (
    <motion.div
      className="winner-info-wrapper info-block"
      key="winner-info__div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -100 }}
      transition={{ duration: 0.5 }}
    >
      {!props.isTie &&
        <p className="winner-info__player">{props.winner}</p>
      }
      <div className="winner-info__game-status">
        {props.isTie ? 'TIE' : 'WINS'}
      </div>
      <ToolbarButton
        value="play again"
        onClick={props.restartGame}
      />
    </motion.div>
  )
}
