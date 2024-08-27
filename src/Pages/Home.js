import '../App.css'
import React, { useEffect } from 'react';
import Header from '../components/header/header'
import Intro from '../components/home_slider/Intro'
import Service from '../components/service/service'
import Footer from '../components/footer/footer'
import Testimonial from '../components/testimonial/testimonials'
import Solutions from '../components/solutions/Solutions';
import Zigzag from '../components/ZigZags/zigzag';
import Index from '../components/PhoneNavigation/index'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
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


    <div>
      <>
        < Header />
        < Index />
        < Intro />
        < Testimonial />


        < Zigzag />


        < Service />
        < Solutions />
        {
          /* 
          */
        }
        < Footer />

      </>
    </div>
  );
}
export default Home;