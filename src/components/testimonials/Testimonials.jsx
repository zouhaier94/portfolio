import React from 'react'
import './textimonials.css'
import AVTR1 from '../../images/avatar1.jpg'
import AVTR2 from '../../images/avatar2.jpg'
import AVTR3 from '../../images/avatar3.jpg'
import AVTR4 from '../../images/avatar4.jpg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    avatar:AVTR1,
    name:'Name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, possimus.'
  },
  {
    avatar:AVTR2,
    name:'Name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, possimus.'
  },
  {
    avatar:AVTR3,
    name:'Name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, possimus.'
  },
  {
    avatar:AVTR4,
    name:'Name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, possimus.'
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