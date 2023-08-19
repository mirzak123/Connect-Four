import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainMenu from './pages/MainMenu.jsx'
import Game from './pages/Game.jsx'
import GameRules from './pages/GameRules.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/Connect-Four" element={<MainMenu />} />
        <Route path="/Connect-Four/player-vs-player" element={<Game />} />
        <Route path="/Connect-Four/game-rules" element={<GameRules />} />
        <Route element={<MainMenu />} />
      </Routes>
    </div>
  )
}

export default App
