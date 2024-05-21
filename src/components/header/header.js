import React from 'react';
import '../../App.css'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <section>
      <header className="header" id="header">
        <nav className="nav container">
          <Link to="/" className="nav__logo">
            <i className="ri-book-3-line"></i> logo
          </Link>
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link"><span>Home</span></Link>
              </li>
              <li className="nav__item">
                <a href="#service" className="nav__link">
                  <span>Service</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#featured" className="nav__link">
                  <span>Featured</span>
                </a>
              </li>

              <li className="nav__item">
                  <Link to="/AboutPage" className="nav__link"><span>About us</span></Link>
              </li>

              <li className="nav__item">
                <a href="#footer" className="nav__link">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__actions">
            <i className="ri-search-line search-button" id="search-button"></i>
            <i className='light' id="theme-button"></i>
          </div>
        </nav>
      </header>
    </section>
  );
}