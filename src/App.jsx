
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
        <Home/> 
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
