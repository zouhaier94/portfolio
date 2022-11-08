import React from 'react'
import './header.css'
import CTA from '../header/CTA'
import ME from '../../images/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header--container">
        <h5>Hello I'm</h5>
        <h1>Zouhaier Boudaya</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll--down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header