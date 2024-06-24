import React, { useEffect, useState } from 'react';
import NavBar from '../../components/header/header';
import Footer from '../../components/footer/footer';
import MapLocation from './mapLocation';
import ContactForm from './contactForm';
import 'tailwindcss/tailwind.css';
import './contact.css'

import { motion } from "framer-motion"
import { fadeIn } from '../../Effects/Variants';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';



const Contact = () => {
  const [home_images_backend, setHomeImagesBackend] = useState([])
  useEffect(() => {
    fetch("/api/public/images/list").then(
      response => response.json()
    ).then(data => {
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
      <div id="contact items-center container mx-auto my-8 px-4 lg:px-20">
        <div>
          <NavBar />

          <div className='carousel-container'>
          <motion.div
        variants={fadeIn('', 1.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true}}
        className="container_home">
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
          </motion.div>
          </div>

        </div>


        <div className="fas alt-font text-center w-full bg-gray py-12 lg:py-24 text-2xl mt-12">
          <h1> LOOKING FOR AN EXCELLENT SOLUTION ?</h1>
          <h1>CONTACT US ! </h1>
        </div>
        <div>
          <ContactForm />
        </div>
        <div className="flex justify-center mt-4 w-full bg-gray py-12 lg:py-24">
          <MapLocation />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;