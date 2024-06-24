import React, { useEffect } from 'react';
import Carousel from '../Carousel/Carousel'
import './style.css'
import { motion } from "framer-motion"
import { fadeIn } from '../../Effects/Variants';


export default function Intro() {
  useEffect(() => {
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
        <motion.div
              variants={fadeIn('', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true}}
              className="container_home">
          <Carousel/>
        </motion.div>
      </section>
    </>
  );
}