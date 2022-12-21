import React from 'react'
import Data from '../../Content/Hero';
import './Hero.css'

export default function Hero() {
  return (
    <div className='hero-container-p'>
      <section id='hero' className='hero'>
        <div id='hero-1' className="hero-greeting"><p>{Data.greeting}</p></div>
        <div id="hero-2" className="hero-name"><p>{Data.name}</p></div>
        <div id="hero-3" className="hero-headline"><p>{Data.headline}</p></div>
        <div id="hero-4" className="hero-Data"><p>{Data.content}</p></div>
      </section>
    </div>
  )
}
