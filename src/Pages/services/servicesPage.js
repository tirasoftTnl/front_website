import React, { useEffect } from 'react';
import './service.css';
import Footer from '../../components/footer/footer';
import Service from '../../components/service/service';
import Header from '../../components/header/header';
import CarouselServices from '../../components/Carousel/Carousel_service';
import Index from '../../components/PhoneNavigation/index'

function ServicesPage() {
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
        <Header />
        < Index />

        <CarouselServices />
        <Service />
        <Footer />
      </>
    </div>
  );
}
export default ServicesPage;