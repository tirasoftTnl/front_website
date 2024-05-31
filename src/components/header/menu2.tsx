import React, { forwardRef } from "react";
import { FiPhone } from "react-icons/fi";
import { HiOutlineServer } from "react-icons/hi";
import { GoCloud } from "react-icons/go";

export const Menu2 = forwardRef<HTMLElement>((props, ref) => {
  const tasks = [
    { text: "TelePhone System Products", icon: <FiPhone className="mr-2" /> },
    { text: "On-Promise IPBX Products", icon: <HiOutlineServer className="mr-2" /> },
    { text: "Cloud USCAS-SAAS Products", icon: <GoCloud className="mr-2" /> }
  ];

  return (
    <section
      ref={ref}
      className="flex flex-col items-start px-10 pt-3 pb-20 text-base font-medium leading-6 text-black bg-white max-w-[600px] max-md:px-5"
    >
      <header className="flex flex-col max-w-full">
        <h1 className="self-center text-xl font-semibold tracking-normal">
          Check out our Products
        </h1>
      </header>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center py-4 border-t border-solid border-neutral-200 mb-4">
            {task.icon}
            <span>{task.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
});