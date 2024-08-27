import React, { useState, useEffect } from 'react'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer';
import Featured from '../../../components/products/featured';
import Index from '../../../components/PhoneNavigation/index'

function TelephonesPage() {

  const [Cards_Data, setCardsData] = useState([]);

  useEffect(() => {
    fetch("/api/public/products/list")
      .then(response => response.json())
      .then(Cards_Data => {
        // Set the returned data to the state
        setCardsData(Cards_Data);
      })
      .catch(error => {
        console.error("There was an error fetching the products:", error);
      });
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
        <Index />
        <Featured />
        {/*
        
        */}
        <div className="Products_container_in_page">
        </div>
        <Footer />
      </>
    </div>
  );
}

export default TelephonesPage