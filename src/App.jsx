import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'


function App() {


  return (
    <>
     <Header/>
     <div className="HEROO"><Hero/></div>
     <Skills/>
     <Projects/>
   
    </>
  )
}

export default App
