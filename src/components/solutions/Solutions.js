import React from 'react';
import './solutions.css';
import img from '../img/Product-comp.jpg';

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

      <motion.div 
      variants={fadeIn('left', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true, amount: 0.5 }}

      className="Product-image-div">
        <img src={img} alt="Product-div-img" className="Product-comp-img" />
      </motion.div>
    </section>
  );
}