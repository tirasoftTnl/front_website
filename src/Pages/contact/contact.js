import React, { useEffect } from 'react';
import NavBar from '../../components/header/header';
import Footer from '../../components/footer/footer';
import MapLocation from './mapLocation';
import ContactForm from './contactForm';
import 'tailwindcss/tailwind.css';

const Contact = () => {
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
      <div id="contact items-center container mx-auto my-8 px-4 lg:px-20">
        <div>
          <NavBar />
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