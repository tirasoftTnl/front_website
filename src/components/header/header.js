import React from 'react';
import NavLinks from './NavLinks.tsx';
import { HashLink } from 'react-router-hash-link';
import logo_img from '../img/logo_finale_N.png'

export default function Header () {
  return (
    <section>
      <header className="header" id="header">
        <nav className="nav container">
          <HashLink to="/" className="nav__logo">
            <img src={logo_img} alt='logo_image' className="nav__logo_img"/>
          </HashLink>
          <NavLinks />
          <div class="nav__actions">
              <i class="ri-moon-line change-theme" id="theme-button"></i>
          </div>
        </nav>
      </header>
    </section>
  );
}