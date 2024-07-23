import './testimonial.css';
import avatar from '../img/avatar-1.png';
import { ReactTyped } from "react-typed";
import Lottie from "lottie-react";
import animationData from '../../Animations-Lottie/animation-prototype-1.json';

import { motion } from "framer-motion";
import { fadeIn } from '../../Effects/Variants';

export default function Testimonial() {
  return (
    <section className="id-testimonial">
      <motion.div
        variants={fadeIn('down', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.8 }}
        className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">

        <figure className="max-w-screen-md mx-auto">
          <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
          </svg>
          <blockquote>
            <p className="text-2xl font-medium text-gray-900">
              "Tirasoft is specialized in the Design and development of value added
              solutions tailored for small and large businesses.
              We offer our partners a wide range of opportunities to boost their
              business and become even more successful."
            </p>

          </blockquote>
          <figcaption className="flex relative items-center justify-center mt-6 space-x-3">
            <motion.div
              variants={fadeIn('left', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.4 }}
              className='Lottie-animation-container-div'>
              {/* i want to control the lottie animaiton with this div here */}
              <Lottie
                animationData={animationData}
                loop={true}
              />
            </motion.div>
            <img className="w-6 h-6 rounded-full" src={avatar} alt="avatar" />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              {/*++++++ Typing animation on Ceo and Ceo's name ++++++*/}
              <div className="pr-3 font-medium text-gray-900">
                <ReactTyped
                  startWhenVisible={true}
                  className="text-2xl font-medium text-gray-900"
                  strings={["Mohamed Ikbel"]}
                  typeSpeed={150}
                />

              </div>
              {/*------ Typing animation on Ceo and Ceo's name ------*/}

              <motion.div
                variants={fadeIn('up', 1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.8 }}
                className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                CEO at Tirasoft.
              </motion.div>
            </div>
          </figcaption>
        </figure>
      </motion.div>

    </section>
  )
}
