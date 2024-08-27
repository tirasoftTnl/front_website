import React, { useRef, useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import '../../App.css';
import { motion } from "framer-motion";
import { fadeIn } from '../../Effects/Variants';
import { Menu2 } from './menu2.tsx';
import { FiMenu } from "react-icons/fi";
import { SlideWrapper } from './slideWrapper.tsx';

export default function NavLinks() {
  const [hovering, setHovering] = useState<number | null>(null);
  const [popoverHeight, setPopoverHeight] = useState<number | null>(null);
  const refs = useRef<(HTMLElement | null)[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);

  const onToggleMenu = (index: number, el: HTMLElement) => {
    setHovering(prev => (prev === index ? null : index));
    const menuElement = refs.current[index];
    if (menuElement) {
      setPopoverHeight(menuElement.offsetHeight);
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setHovering(null);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="nav__menu" ref={menuRef}>
        <motion.ul
          variants={fadeIn('', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0 }}
          className="nav__list">
          <li className="nav__item">
            <button className="nav__link"
              onClick={(event) => {
                onToggleMenu(2, event.currentTarget);
              }}>
              <div className='flex'>
                <FiMenu className='mt-1 mr-2' />
                <span>Products</span>
              </div>
            </button>
          </li>
          <li className="nav__item">
            <Link to="/services" className="nav__link">
              <span>Services</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">
              <span>About</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              <span>Contact</span>
            </Link>
          </li>
          <div className={clsx(
            "mega-menu-div-container1 absolute top-10 pt-6 -ml-22 duration-800",
            hovering !== null ? "transition-all" : "opacity-0 pointer-events-none"
          )}>
            <div
              style={{ height: popoverHeight || 100 }}
              className="mega-menu-div-container2 absolute
                        overflow-hidden transform-gpu transition-all duration-300">

              <SlideWrapper index={2} hovering={hovering}>
                <Menu2 ref={(ref) => (refs.current[2] = ref)} />
              </SlideWrapper>
              
            </div>
          </div>
        </motion.ul>
      </div>
    </>
  );
}
