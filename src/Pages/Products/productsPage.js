import React, { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ProductCategories from '../../components/ProductCategory/ProductCategories';
import Carousel_produit from '../../components/Carousel/Carousel_produit';
import Index from '../../components/PhoneNavigation/index'

function ProductsPage() {
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
      <Header />
      < Index />
      <Carousel_produit />
      <ProductCategories />
      <Footer />
    </div>
  );
}
export default ProductsPage;