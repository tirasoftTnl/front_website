import React, { forwardRef } from "react";
import { Link } from 'react-router-dom';
import { FiPhone, FiDollarSign, FiGrid } from "react-icons/fi";

export const Menu1 = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="menu2-container-div flex flex-col items-start text-base">
      <div className="container-of-menu2-desc flex">
        <div className="services-container">
          <header className="flex flex-col max-w-full">
            <h1 className="self-center text-xl font-semibold tracking-normal">
              Our Services
            </h1>
          </header>
        <ul className="list-of-services-ul flex">
          <li className="flex items-center py-4 border-t border-solid border-neutral-200 mr-6">
            <FiPhone className="mr-2" />
            <span>24/7 Phonecall Service</span>
          </li>
          <li className="flex items-center py-4 border-t border-solid border-neutral-200 mr-6">
            <FiDollarSign className="mr-2" />
            <span>Monthly payment</span>
          </li>
          <li className="flex items-center py-4 border-t border-solid border-neutral-200 ">
            <FiGrid className="mr-2" />
            <span>Easability of the usage</span>
          </li>
        </ul>
        </div>

        <div className="get-in-touch-container">
            <div className="get-in-touch-title">
              <h1 className="title">GET IN TOUCH</h1>
              <p className="under-title">FILL UP OUR FORM HERE.</p>

            </div>
            <div className="get-in-touch-button">
              <Link to="/contact">
                <button className="git-btn">CONTACT US</button>
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
});