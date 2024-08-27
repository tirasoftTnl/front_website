import React from 'react';
import NavLinks from './NavLinks.tsx';
import { HashLink } from 'react-router-hash-link';
import logo_img from '../img/logo_finale_N.png'
import './style.css'
import { motion } from "framer-motion"
import { fadeIn } from '../../Effects/Variants';

export default function Header() {
  return (
    <section>
      <header className="header" id="header">
        <nav className="nav container">
          {/*+++++++ Logo is here +++++++*/}
          <motion.div
            variants={fadeIn('', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true }}
          >
            <HashLink to="/" className="nav__logo">
              <img src={logo_img} alt='logo_image' className="nav__logo_img" />
            </HashLink>
          </motion.div>

          {/*------- Logo is here -------*/}


          {/* +++++++ Navlinks here +++++++ */}
          <NavLinks />
          {/* ------- Navlinks here ------- */}


          {/* +++++++ dark\light Mode +++++++ 
          <motion.div
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true}}

          className="nav__actions">
              <i className="ri-moon-line change-theme" id="theme-button"></i>
          </motion.div>

         ------- dark\light Mode ------- */}

        </nav>
      </header>
    </section>
  );
}