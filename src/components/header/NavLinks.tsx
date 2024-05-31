import React, { useRef, useState } from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import '../../App.css';
import {Menu1} from './menu1.tsx';
import {Menu2} from './menu2.tsx';
import {Menu3} from './menu3.tsx';
import {Menu4} from './menu4.tsx';
import { SlideWrapper }  from './slideWrapper.tsx';
export default function NavLinks() {
  const [hovering, setHovering] = useState<number | null>(null);
  const [popoverLeft, setPopoverLeft] = useState<number | null>(null);
  const [popoverHeight, setPopoverHeight] = useState<number | null>(null);

  const refs = useRef<(HTMLElement | null) []>([]);

  const onMouseEnter = (index: number, el: HTMLElement) =>{
    setHovering(index);
    setPopoverLeft(el.offsetLeft);
    const menuElement = refs.current[index];
    if (menuElement){
      setPopoverHeight(menuElement.offsetHeight);
    }
  }

  return (
    <>
      <div className="nav__menu" 
            onMouseLeave={() => {
              setHovering(null);
            }}>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/services" className="nav__link"
            onMouseEnter={(event) => {
              onMouseEnter(1,event.currentTarget)
            }}>
              <i className="ri-message-3-line"></i>
              <span>Services</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/product"
              className="nav__link"
              onMouseEnter={(event) => {
                onMouseEnter(2,event.currentTarget)
              }}
            >
              <i className="ri-book-3-line"></i>
              <span>Products</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/about"
              className="nav__link"
              onMouseEnter={(event) => {
                onMouseEnter(3,event.currentTarget)
              }}
            >
              <i className="ri-book-3-line"></i>
              <span>About Us</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/contact"
              className="nav__link"
              onMouseEnter={(event) => {
                onMouseEnter(4,event.currentTarget)
              }}
            >
              <i className="ri-book-3-line"></i>
              <span>Contact Us</span>
            </Link>
          </li>

          {hovering && (
            <div 
            style={{
              left : popoverLeft || 0,
              height : popoverHeight || 0,
            }}
            className="absolute rounded-md top-14 shadow bg-white pt-6 -ml-80 bg-white w-[850px] overflow-hidden transform-gpu shadow-lg transition-all duration-300"

            >
            <SlideWrapper index={1} hovering={hovering}>
              <Menu1 ref={(ref) => (refs.current[1] = ref)} />
            </SlideWrapper>

            <SlideWrapper index={2} hovering={hovering}>
              <Menu2 ref={(ref) => (refs.current[2] = ref)} />
            </SlideWrapper>

            <SlideWrapper index={3} hovering={hovering}>
              <Menu3 ref={(ref) => (refs.current[3] = ref)} />
            </SlideWrapper>

            <SlideWrapper index={4} hovering={hovering}>
              <Menu4 ref={(ref) => (refs.current[4] = ref)} />
            </SlideWrapper>  
          </div>
          )}
        </ul>
        
      </div>
    </>
  );
}