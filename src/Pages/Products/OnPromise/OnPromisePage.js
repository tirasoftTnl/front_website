import React, { useEffect } from "react";
import Index from '../../../components/PhoneNavigation/index'

import Header from '../../../components/header/header'
import FeaturedONP from '../../../components/products/featuredOnP'

function OnPromisePage() {
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
    <>
      < Header />
      < Index />
      < FeaturedONP />
    </>
  )
}

export default OnPromisePage