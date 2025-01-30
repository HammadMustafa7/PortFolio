import React from 'react'
import About from './components/About/About'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import CursorFollower from './components/Mouse_Cursor/Mousecursor'
import ProjectsPage from './components/Project/Project'

function App() {
  return (
    <div className='w-[100%] cursor-none'>
      <CursorFollower />
      <Header />
      <HomePage />
      <About />
      <ProjectsPage />

    </div>
  )
}

export default App