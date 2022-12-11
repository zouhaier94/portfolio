/* eslint-disable react/jsx-no-target-blank */
import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cdluns9', 'template_lwkralq', form.current, 'ump_S3OM7flZL4qio')
    e.target.reset()
  };

  return (
    <section id='contact' >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact--container'>
        <div className="contact--options">

        <article className='contact--option'>
          <MdOutlineEmail className='contact--option--icon'/>
          <h4>Email</h4>
          <h5>zou@gmail.com</h5>
          <a href="mailto:zouyos@gmail.com" target='_blank'>Send a message</a>
        </article>

{/*         <article className='contact--option'>
          <RiMessengerLine className='contact--option--icon'/>
          <h4>Messenger</h4>
          <h5>ZOUY0SYO</h5>
          <a href="https://m.me/ZOUY0SYO" target='_blank'>Send a message</a>
        </article> */}

        <article className='contact--option'>
          <BsWhatsapp className='contact--option--icon'/>
          <h4>WhatsaApp</h4>
          <h5>01639899228</h5>
          <a href="https://api.whatsapp.com/send?phone=4901639899228" target='_blank'>Send a message</a>
        </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

{/* npm install emailjs-com --save*/}