import React, { useEffect, useState } from 'react'
import About from './components/About/About'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import CursorFollower from './components/Mouse_Cursor/Mousecursor'
import ProjectsPage from './components/Project/Project'
import ContactForm from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Hide loading after 3 seconds
    }, 3000);
  }, []);
  return (
    <>
    <div className='w-[100%] '>

      <CursorFollower />
      <Header />
      <HomePage />
      <About />
      <ProjectsPage />
      <ContactForm />
      <Footer />

    </div>

    { loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-100">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-white border-dashed rounded-full animate-rotateme delay-300"></div> 
        </div>
      </div>
    )}
    </>
  )
}

export default App