import React, { useEffect } from 'react';
import './service.css';
import Footer from '../../components/footer/footer';
import Service from '../../components/service/service';
import Header from '../../components/header/header';
function ServicesPage() {
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
        <div className="service_container_page">
          <Service />
        </div>
        <Footer />
      </>
    </div>
  );
}
export default ServicesPage;