import React from 'react'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import CursorFollower from './components/Mouse_Cursor/Mousecursor'

function App() {
  return (
    <div>
      <CursorFollower />
      <Header />
      <HomePage />
    </div>
  )
}

export default App