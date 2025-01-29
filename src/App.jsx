import React from 'react'
import About from './components/About/About'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import CursorFollower from './components/Mouse_Cursor/Mousecursor'

function App() {
  return (
    <div className='w-[100%]'>
      <CursorFollower />
      <Header />
      <HomePage />
      <About />

    </div>
  )
}

export default App