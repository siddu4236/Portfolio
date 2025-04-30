import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Certificate from './components/Certificate.jsx'
import Contact from './components/Education.jsx'
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      {/* Sections with corresponding ids */}
      <div id="home" className="HEROO">
        <Hero />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="Projects">
        <Projects />
      </div>

      <div id="certifications">
        <Certificate />
      </div>

      <div id="Education">
        <Contact />
      </div>

      <Footer/>
    </>
  )
}

export default App
