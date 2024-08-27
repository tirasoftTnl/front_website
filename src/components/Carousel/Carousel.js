import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { motion } from "framer-motion";
import { fadeIn } from '../../Effects/Variants';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [homeImagesBackend, setHomeImagesBackend] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch("/api/public/images/list");
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
      className='relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[590px] mx-auto my-24 group'>
      {homeImagesBackend.length > 0 && (
        <div
          style={{ backgroundImage: `url(${homeImagesBackend[currentIndex]?.img_path})` }}
          className='w-full h-full rounded-lg bg-center bg-cover duration-500'
        ></div>
      )}

      {/* Left Arrow */}
      <div
        className='hidden group-hover:flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-4 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>

      {/* Right Arrow */}
      <div
        className='hidden group-hover:flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>

      {/* Dots */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {homeImagesBackend.map((slide, slideIndex) => (
          <div
            key={slide.id}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-white' : 'text-gray-400'}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
