import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services--container">
        <article className='service'>
          <div className="service--head">
          <h3>Backend Web Development</h3>
          </div>
          <ul className='service--list'>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>CMS Systems Development </p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>Firebase Realtime Database</p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>MySQL Database implementation </p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>Fetching of JSON API's and Libraries</p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>Implementation of PHP with MySQL</p>
            </li>
        
          </ul>
        </article>
        {/* End UI/UX Design */}
        <article className='service'>
          <div className="service--head">
          <h3>Frontend Web Development </h3>
          </div>
          <ul className='service--list'>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>React JS Responsive Web Apps </p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>Implementation of React JS Hooks</p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>The integration of Third Part JS Libraries </p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>CSS Design with Native CSS3</p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>CSS Design with Modern Tailwind CSS</p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>CSS Design with Bootstrap Tool</p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>Implementation of React Libraries</p>
            </li>
        
          </ul>
        </article>
        {/* End Web Development */}
        <article className='service'>
          <div className="service--head">
          <h3>Mobile App Development </h3>
          </div>
          <ul className='service--list'>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>Android Studio Native Apps</p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>Flutter Cross Platform Apps</p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>UI/UX Design of Mobile Apps</p>
            </li>
            <li>
              <BiCheck className='service--list--icon'/>
              <p>SLQLite and Firebase Implementation </p>
            </li>
        
          </ul>
        </article>
        {/* End Mobile App Development */}
      </div>
    </section>
  )
}

export default Services