import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainMenu from './pages/MainMenu.jsx'
import Game from './pages/Game.jsx'
import Rules from './pages/Rules.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/Connect-Four" element={<MainMenu />} />
        <Route path="/player-vs-player" element={<Game />} />
        <Route path="/game-rules" element={<Rules />} />
      </Routes>
    </div>
  )
}

export default App
