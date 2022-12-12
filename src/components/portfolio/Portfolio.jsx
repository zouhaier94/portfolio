/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './portfolio.css'
import PetShop from '../../images/pet-shop.png'
import AdminPanel from '../../images/admin-panel.png'
import Messenger from '../../images/messenger.png'
import GoMama from '../../images/go-mama.png'
import FoodHome from '../../images/android-game.png'
import Game from '../../images/android-game.png'



// ...
const data = [
{
  id:1,
  image:PetShop,
  title:'Pet Shop',
  github:'https://github.com/zouhaier94/pet-shop-user-interface',
  demo:'https://best-pet-shop.netlify.app'
},
{
  id:2,
  image:AdminPanel,
  title:'Pet Shop Admin Panel',
  github:'https://github.com/zouhaier94/pet-shop-admin-panel',
  demo:'https://pet-shop-admin-panel.netlify.app'
},
{
  id:3,
  image:Messenger,
  title:'Messenger Web App',
  github:'https://github.com/zouhaier94/realtime-private-chat-app',
  demo:'https://new-messenger.netlify.app'
},
{
  id:4,
  image:GoMama,
  title:'Flutter Mobile App',
  github:'https://github.com',
  demo:'https://drive.google.com/file/d/18kDBUTd0DEs0rG7tSa4L-tkXalPKYB4I/view'
},
{
  id:5,
  image:FoodHome,
  title:'Android Retaurant App',
  github:'https://github.com',
  demo:'https://drive.google.com/file/d/1hcTHe5PwtwgTEkgnyz6FlUwT0ZHGASRC/view'
},
{
  id:6,
  image:Game,
  title:'Android Mobile Game',
  github:'https://github.com',
  demo:'https://drive.google.com/file/d/1qbxYH6ujmbYIc_p1_xrEBjKKq7CXSj5R/view'
},

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio--container">

        {
          data.map(({id,image,title,github,demo})=>{
            return(
          <article key={id}className="portfolio--item">
          <div className="portfolio--item--image">
          <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className='portfolio--item--cta'>
          <a href={github} className='btn' target='_blank'>Github</a> 
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio