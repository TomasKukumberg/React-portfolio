import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Sidenav />
      <Main />
      <Timeline />
      <Projects />
      <Contact />
    </>
  )
}

export default App
