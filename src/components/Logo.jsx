import React, { useState } from "react"
import { motion } from 'framer-motion'
import logo from '../assets/images/logo.svg'

export default function Logo() {
  const [rotateLogo, setRotateLogo] = useState(false)

  return (
    <motion.img
      className="logo"
      src={logo}
      alt="logo"
      animate={{ rotate: rotateLogo ? 360 : 0 }}
      // transition={{ type: "tween", duration: 0.3 }}
      onClick={() => {
        setRotateLogo((prevRotate) => !prevRotate)
      }}
    />
  )
}
