import React from 'react'
import './about.css'
import ME from '../../images/git-me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

    <div className="container about--container">

    <div className="about--me">
        <div className="about--me--image">
          <img src={ME} alt="img" />
        </div>
    </div>

      <div className="about--content">
        <div className="about--cards">
          <article className='about--card'>
            <FaAward className='about--icon'/>
          <h5>Experience</h5>
          <small>99+ Years Working</small>
          </article>

          <article className='about--card'>
            <FiUsers className='about--icon'/>
          <h5>Clients</h5>
          <small>999+ Worldwide</small>
          </article>

          <article className='about--card'>
            <VscFolderLibrary className='about--icon'/>
          <h5>Projects</h5>
          <small>99+ Completed</small>
          </article>
    </div>

    <p>
    I am a self-taught Frontend Web Developer. I enjoy coding and the challenge 
    of learning something new everyday. I am looking for a new challenge to work 
    as a Frontend Web Developer to have the chance of practicing the skills 
    I learned through my journey.
    </p>

      <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>

</div>
    </section>
  )
}

export default About