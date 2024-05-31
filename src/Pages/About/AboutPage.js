import React, { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function AboutPage() {
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
    <div>
      <>
        <Header />
        <Footer />
      </>
    </div>
  );
}

export default AboutPage;