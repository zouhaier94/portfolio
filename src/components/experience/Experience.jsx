import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experiences</h2>
      <div className="container experience--container">

        <div className="experience--frontend">
          <h3>Frontend Development</h3>
          <div className="experience--content">
            <article className='experience--details'>
            <BsPatchCheckFill/>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience--details'>
            <BsPatchCheckFill/>
            <h4>CSS</h4>
            <small className='text-light'>Itermediate</small>
            </article>
            <article className='experience--details'>
            <BsPatchCheckFill/>
            <h4>JAVASCRIPT</h4>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience--details'>
            <BsPatchCheckFill/>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience--details'>
            <BsPatchCheckFill/>
            <h4>Tailwind</h4>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience--details'>
            <BsPatchCheckFill/>
            <h4>React JS</h4>
            <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>

        <div className="experience--backend">
        <h3>Backend Development</h3>
          <div className="experience--content">
            <article className='experience--details'>
            <BsPatchCheckFill/>
            <h4>Node JS</h4>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience--details'>
            <BsPatchCheckFill/>
            <h4>MongoDB</h4>
            <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience--details'>
            <BsPatchCheckFill/>
            <h4>PHP</h4>
            <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience--details'>
            <BsPatchCheckFill/>
            <h4>MySQL</h4>
            <small className='text-light'>Basic</small>
            </article>
            <article className='experience--details'>
            <BsPatchCheckFill/>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience