import React from 'react'
import Button from '../components/Button'
import Logo from '../components/Logo'
import playerVsPlayerLogo from '../assets/images/player-vs-player.svg'

export default function MainMenu() {
  return (
    <div className="modal-container">
      <div className="modal">
        <Logo />
        <div className="main-menu-buttons">
          <Button
            color="yellow"
            value="PLAYER VS PLAYER"
            link="/Connect-Four/player-vs-player"
            icon={playerVsPlayerLogo}
          />
          <Button
            color="white"
            value="GAME RULES"
            link="/Connect-Four/game-rules"
          />
        </div>
      </div>
    </div>
  )
}
