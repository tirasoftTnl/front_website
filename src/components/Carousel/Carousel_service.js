import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { motion } from "framer-motion"
import { fadeIn } from '../../Effects/Variants';


export default function CarouselServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [homeImagesBackend, setHomeImagesBackend] = useState([]);
  useEffect(() => {
    fetchImages();
  }, []);
  const fetchImages = async () => {
    try {
      const response = await fetch("/api/public/carousel_service/list");
      if (response.ok) {
        const data = await response.json();
        setHomeImagesBackend(data.data);
      } else {
        throw new Error("Error fetching images");
      }
    } catch (error) {
      console.error("There was an error fetching the images:", error);
    }
  };
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? homeImagesBackend.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === homeImagesBackend.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <motion.div
      variants={fadeIn('', 0.6)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true }}
      
      className='max-w-[1900px] my-24 h-[590px] w-full relative group'>
      {homeImagesBackend.length > 0 && (
        <div
          style={{ backgroundImage: `url(/${homeImagesBackend[currentIndex]?.img_path})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
      )}
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 
      translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white 
      cursor-pointer'
        onClick={prevSlide}>
        <BsChevronCompactLeft size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 
      translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white 
      cursor-pointer'
        onClick={nextSlide}>
        <BsChevronCompactRight size={30} />
      </div>
      <div className='flex justify-center '>
        {homeImagesBackend.map((slide, slideIndex) => (
          <div
            key={slide.id}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
