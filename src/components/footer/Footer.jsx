/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {CiInstagram} from 'react-icons/ci'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer--logo'>Zouhaier</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer--socials">
        <a href="https://facebook.com" target='_blank'><FaFacebookF/></a>
        <a href="https://instagram.com" target='_blank'><CiInstagram/></a>
        <a href="https://twitter.com" target='_blank'><IoLogoTwitter/></a>
      </div>

      <div className="footer--copyright">
        <small>
          &copy; Zouhaier. All rights reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer