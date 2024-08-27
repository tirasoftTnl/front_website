import React from 'react';
import './solutions.css';
import img from '../img/Product-comp-removebg.png';
import { motion } from "framer-motion";
import { fadeIn } from '../../Effects/Variants';
import Accordion from './Accordion';
export default function Solutions() {
  return (
    <section className="solutions-section">
      <div className="Product-description-div">
        <motion.h1
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          className="Product-description-title">
          PRODUCT COMPATIBILITY & APPLICATIONS
        </motion.h1>
        <div className="Accordions-questions">
          <Accordion
            title="PBX for Medium and Large Enterprises"
            answer="Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Sequi quaerat soluta laborum ipsum, 
              illo impedit vel quasi delectus ipsa cumque magnam 
              voluptate incidunt magni explicabo voluptatibus 
              consectetur ad voluptas aliquam."
          />
          <Accordion
            title="Intercom Communication and Security System for Modern Apartments"
            answer="Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Sequi quaerat soluta laborum ipsum, 
              illo impedit vel quasi delectus ipsa cumque magnam 
              voluptate incidunt magni explicabo voluptatibus 
              consectetur ad voluptas aliquam.Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Sequi quaerat soluta laborum ipsum, 
              illo impedit vel quasi delectus ipsa cumque magnam 
              voluptate incidunt magni explicabo voluptatibus 
              consectetur ad voluptas aliquam."
          />
          <Accordion
            title="Hospitality Solution for Hotels and Guest Houses"
            answer="Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Sequi quaerat soluta laborum ipsum, 
            illo impedit vel quasi delectus ipsa cumque magnam 
            voluptate incidunt magni explicabo voluptatibus 
            consectetur ad voluptas aliquam!Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Sequi quaerat soluta laborum ipsum, 
            illo impedit vel quasi delectus ipsa cumque magnam 
            voluptate incidunt magni explicabo voluptatibus 
            consectetur ad voluptas aliquam.Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Sequi quaerat soluta laborum ipsum, 
            illo impedit vel quasi delectus ipsa cumque magnam 
            voluptate incidunt magni explicabo voluptatibus 
            consectetur ad voluptas aliquam."
          />

          <Accordion
            title="The first all in one PBW TWT/GSM, LTE, HF-UHF/VHF, VSAT"
            answer="Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Sequi quaerat soluta laborum ipsum, 
            illo impedit vel quasi delectus ipsa cumque magnam 
            voluptate incidunt magni explicabo voluptatibus 
            consectetur ad voluptas aliquam."
          />

          <Accordion
            title="Integration with Our PBX"
            answer="Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Sequi quaerat soluta laborum ipsum, 
            illo impedit vel quasi delectus ipsa cumque magnam 
            voluptate incidunt magni explicabo voluptatibus 
            consectetur ad voluptas aliquam."
          />

          <Accordion
            title="Detect Fire Hazard before it even starts"
            answer="Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Sequi quaerat soluta laborum ipsum, 
            illo impedit vel quasi delectus ipsa cumque magnam 
            voluptate incidunt magni explicabo voluptatibus 
            consectetur ad voluptas aliquam."
          />

        </div>
      </div>
      <div className="Product-image-div">
        <div className="blue-glass-overlay">
        </div>
        <div className='text-over-glass'>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.5 }}
            className='text-og-title'>
            <h1 className='title-txt'>Modern. Innovative. Practical</h1>
            <div className='checkbox-list'>
              <ul className="ul-list">
                <li>
                  <svg className="w-3 h-3 fill-current text-green-500
                    mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <h2>
                    200 000 Satisfied Customers
                  </h2>
                </li>
                <li>
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                    viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <h2>200 Emlpoyees</h2>
                </li>
                <li>
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                    viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <h2>2 Locations in the world</h2>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        <img src={img} alt="Product-div-img" className="Product-comp-img" />
      </div>
    </section>
  );
}