import React, { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Index from '../../components/PhoneNavigation/index'

function AboutPage() {
  useEffect(() => {
    // Scroll to top when component mounts
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
        <Footer />
      </>
    </div>
  );
}

export default AboutPage;