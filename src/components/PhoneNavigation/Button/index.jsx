import React from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';

export default function Button({ isActive, toggleMenu }) {
  return (
    <div className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.el} onClick={toggleMenu}>
          <MenuIcon />
        </div>
        <div className={styles.el} onClick={toggleMenu}>
          <CloseIcon />
        </div>
      </motion.div>
    </div>
  );
}

function MenuIcon() {
  return (
    <div className={styles.icon}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="4" width="24" height="2" fill="black"/>
        <rect y="11" width="24" height="2" fill="black"/>
        <rect y="18" width="24" height="2" fill="black"/>
      </svg>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className={styles.icon}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="2" x2="22" y2="22" stroke="black" strokeWidth="2"/>
        <line x1="22" y1="2" x2="2" y2="22" stroke="black" strokeWidth="2"/>
      </svg>
    </div>
  );
}
