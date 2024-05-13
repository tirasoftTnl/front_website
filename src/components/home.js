import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import './style.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation } from 'swiper';

export default function Header() {
  const [home_images_backend, setHomeImagesBackend] = useState([])

  useEffect(() => {
    fetch("/api/get_images").then(
      response => response.json()
    ).then(data => {
      // Set the returned data to the state
      setHomeImagesBackend(data);
    }).catch(error => {
      console.error("There was an error fetching the cards:", error);
    })
  }, [])
  
   return (

   <section id="home">
    <div className="container_home">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={-30}
        slidesPerView={3}
        loop = {true}
        autoplay = {{
          enabled: true,
          delay: 3000,
          waitForTransition: false,
          disableOnInteraction: false,
          stopOnLastSlide: false,
          reverseDirection: false,
          pauseOnMouseEnter: false
        }}
        coverflowEffect={
         {
            rotate : 0,
            stretch : 0,
            depth : 100,
            modifier : 2.5
         }
        }
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="swiper_container">

         {home_images_backend.length > 0 ? (
         home_images_backend.map((card, i) => (
            <SwiperSlide key={card.id}>
               <img src={`/${card.img_path}`} alt={`/${card.img_path}`} class="home__img"/>
            </SwiperSlide>
         ))
         ) : (
         <p>Loading...</p>)
         }

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>

        </div>
      </Swiper>
    </div>
  </section>

  );

}
