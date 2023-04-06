import React, { useState } from 'react'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'

const App = () => {
  const [mode, setMode] = useState('dark')

  const modeChangeHandler = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = '#ccc'
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#1C1B1F'

    }
  }

  return (
    <>
      <Navbar mode={mode} modeChangeHandler={modeChangeHandler} />
      <Intro mode={mode} />
      <About mode={mode} />
      <Skills mode={mode} />
      <Portfolio mode={mode} />
      <Footer mode={mode} />
    </>
  )
}

export default App
