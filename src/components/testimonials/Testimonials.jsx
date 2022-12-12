import React from 'react'
import './textimonials.css'
import JonSnow from '../../images/jon-snow.jpg'
import Tyrion from '../../images/tyrion.jpg'
import Angelina from '../../images/angelina.jpg'
import Mike from '../../images/mike.jpg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    avatar:JonSnow,
    name:'Jon',
    review: 'Nakeh fwere! yeios djuu haennoet  ytten u khkown lyrnguebo'
  },
  {
    avatar:Tyrion,
    name:'Tyrion',
    review: 'Zouhaier ub djuu haest ae jhera haest kantvelopeub en ae nhyrlbedii'
  },
  {
    avatar:Angelina,
    name:'Angelina',
    review: 'Zouhaier ub leu ch jhaimezz lin uterheorkuut ♥'
  },
  {
    avatar:Mike,
    name:'Mike',
    review: 'Zouhaier nyehgudaya djuu haest ae jherast!!!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper 
      className="container testimonials--container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >

        {
          data.map(({avatar, name, review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client--avatar">
                <img src={avatar} alt="avtr" />
              </div>
              <h5 className='client--name'>{name}</h5>
                <small className='client--review'>{review}</small>
            </SwiperSlide>
            )
          })
        }  

      </Swiper>
    </section>
  )
}

export default Testimonials