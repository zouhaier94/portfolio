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
            <BsPatchCheckFill className='experience--details--icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience--details'>
            <BsPatchCheckFill className='experience--details--icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience--details'>
            <BsPatchCheckFill className='experience--details--icon'/>
            <div>
            <h4>JAVASCRIPT</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience--details'>
            <BsPatchCheckFill className='experience--details--icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>

            <article className='experience--details'>
            <BsPatchCheckFill className='experience--details--icon'/>
            <div>
            <h4>Tailwind</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience--details'>
            <BsPatchCheckFill className='experience--details--icon'/>
            <div>
            <h4>React JS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience--details'>
            <BsPatchCheckFill className='experience--details--icon'/>
            <div>
            <h4>Android</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>

            <article className='experience--details'>
            <BsPatchCheckFill className='experience--details--icon'/>
            <div>
            <h4>Flutter</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>

          </div>
        </div>


        <div className="experience--backend">
        <h3>Backend Development</h3>
          <div className="experience--content">

            <article className='experience--details'>
            <BsPatchCheckFill className='experience--details--icon'/>
            <div>
            <h4>Node JS</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>

            <article className='experience--details'>
            <BsPatchCheckFill className='experience--details--icon'/>
            <div>
            <h4>PHP</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>

            <article className='experience--details'>
            <BsPatchCheckFill className='experience--details--icon'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>

            <article className='experience--details'>
            <BsPatchCheckFill className='experience--details--icon'/>
            <div>
            <h4>Firebase</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>

            <article className='experience--details'>
            <BsPatchCheckFill className='experience--details--icon'/>
            <div>
            <h4>CMS</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience