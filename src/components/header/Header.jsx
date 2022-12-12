/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './header.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import CV from '../../assets/cv.pdf'

const Header = () => {
  return (
    <header>
      <div className="container header--container">
        <h5>Hello I'm</h5>
        <h1 className='typewriter'>Zouhaier Boudaya</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

        <div className='header--socials'>
          <a href="https://www.linkedin.com/in/zouhaier-boudaya-91a415145" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com/zouhaier94" target="_blank"> <FaGithub/></a>
        </div>

        <a href="#contact" className='scroll--down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header