import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Intro() {
  const [home_images_backend, setHomeImagesBackend] = useState([])

  useEffect(() => {
    fetch("/api/public/images/list").then(
      response => response.json()
    ).then(data => {
      // Set the returned data to the state
      setHomeImagesBackend(data.data);
    }).catch(error => {
      console.error("There was an error fetching the cards:", error);
    });

    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section id="home">
        <div className="container_home">
          <Swiper pagination={true} loop={true} modules={[Pagination]} className="mySwiper">
            {home_images_backend.length > 0 ? (
              home_images_backend.map((card, i) => (
                <SwiperSlide key={card.id}>
                  <img src={`/${card.img_path}`} alt={`/${card.img_path}`} class="home__img" />
                </SwiperSlide>
              ))
            ) : (
                <p>Loading...</p>)
            }
          </Swiper>
        </div>
      </section>
    </>
  );
}