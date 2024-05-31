import React, { forwardRef } from "react";
import { FiPhone, FiDollarSign, FiGrid } from "react-icons/fi";

export const Menu1 = forwardRef<HTMLElement>((props, ref) => (
  <section
    ref={ref}
    className="flex flex-col items-start px-10 pt-3 pb-20 text-base 
    font-medium leading-6 text-black bg-white max-w-[600px] max-md:px-5"
  >
    <header className="flex flex-col max-w-full">
      <h1 className="self-center text-xl font-semibold tracking-normal">
        Our Services
      </h1>
    </header>
    <ul>
      <li className="flex items-center py-4 border-t border-solid border-neutral-200 mb-4">
        <FiPhone className="mr-2" />
        <span>24/7 Phonecall Service</span>
      </li>
      <li className="flex items-center py-4 border-t border-solid border-neutral-200 mb-4">
        <FiDollarSign className="mr-2" />
        <span>Monthly payment</span>
      </li>
      <li className="flex items-center py-4 border-t border-solid border-neutral-200 mb-4">
        <FiGrid className="mr-2" />
        <span>Easability of the usage</span>
      </li>
    </ul>
  </section>
));