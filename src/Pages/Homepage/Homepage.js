import React from 'react'
import Navbar from '../../Components/1-Navbar/Navbar'
import Hero from '../../Components/2-Hero/Hero'
import About from '../../Components/3-About/About'
import Projects from '../../Components/4-Projects/Projects'
import Skills from '../../Components/5-Skills/Skills'
import Contact from '../../Components/6-Contact/Contact'
import "./Homepage.css"

export default function Homepage() {

  window.onload = () =>{
    document.title = "Armaan | Full Stack Developer"
  }

  return (
    /**
     * ClassName = homepage-container-parent
     */
    <div className='homepage-container-p'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}
