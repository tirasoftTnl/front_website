import React from "react";
import { ReactTyped } from "react-typed";
import './zigzag.css'
import { motion } from "framer-motion";
import { fadeIn } from '../../Effects/Variants';

import Lottie from "lottie-react";
import animationData3 from '../../Animations-Lottie/animation-prototype-3.json';
import animationData4 from '../../Animations-Lottie/animation-prototype-4.json';
import animationData5 from '../../Animations-Lottie/animation-prototype-5.json'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1
                      px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Reach goals that matter
            </div>
            {/* +++++++++ Welcome, to our website ++++++++ */}
            <h1 className="h2 mb-4">
              <ReactTyped
                startWhenVisible={true}
                strings={[
                  "Welcome, to our website."
                ]}
                typeSpeed={100}
              />
            </h1>
            <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
            {/* --------- Welcome, to our website -------- */}
          </motion.div>
          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Animation */}
              <motion.div
                variants={fadeIn('left', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}

                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 
              lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Lottie
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  animationData={animationData4}
                  loop={true}
                />
              </motion.div>
              {/* Content */}
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}

                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7
              lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Target Customers</h3>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500
                        mr-2 shrink-0" viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Telecom operators to better adress the Small and Middle Businesses
                      </span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Consultants, Doctors, Architects, Chartered Accountants</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Offices, Factories, Branch Offices, Ware Houses</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Banks, Hospitals, Universities and School</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Internet Telephony Service Provider, Government Organizations</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Animation */}
              <motion.div
                variants={fadeIn('left', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}

                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 
              lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Lottie
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  animationData={animationData3}
                  loop={true}
                />
              </motion.div>
              {/* Content */}
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                  <h3 className="h3 mb-3">Products and Solutions</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Products and Solutions that combines easy-to-use software with flexible connectivity services:
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Governmental Mission Critical solutions</span>
                    </li>

                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Wireless broadband solutions</span>
                    </li>

                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Security and Private networks solutions</span>
                    </li>

                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Surveillance, education and hospitality</span>
                    </li>

                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Cost-effective UCS for Telecom companies</span>
                    </li>

                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>End to end VOIP solutions</span>
                    </li>

                  </ul>
                </div>
              </motion.div>
            </div>
            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Animation */}
              <motion.div
                variants={fadeIn('left', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.6 }}
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 
              lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">

                <Lottie
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  animationData={animationData5}
                  loop={true}
                />

              </motion.div>
              {/* Content */}
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.6 }}
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                  <h3 className="h3 mb-3">SAAS ADVANTAGES</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Tirasoft's platform is built with cutting-edge
                    technology provide high throughput, reliability,
                    with exceptional functionality.
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Tirasoft USCAS supports up to 1M users by a single server</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Our solution is based Kubernetes and is easy to scale to support more users by simply adding more servers.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Users can call from anywhere using a whole range
                        of different devices.
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}