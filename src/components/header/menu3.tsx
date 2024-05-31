import React, { forwardRef } from "react";
import { FiPhone } from "react-icons/fi";

const TaskItem = ({ children }) => (
  <li className="flex items-center py-4 border-t border-solid border-neutral-200">
    <FiPhone className="mr-2" />
    <span>{children}</span>
  </li>
);

const tasks = [
  "24/7 Phonecall Service",
  "Monthly payement",
  "Easability of the usage"
];

export const Menu3 = forwardRef<HTMLElement>((props, ref) => {

  return (
    <section ref={ref} className="flex flex-col items-start px-10 pt-3 pb-20 text-base font-medium
                        leading-6 text-black bg-white max-w-[600px] max-md:px-5">
      <header className="flex flex-col max-w-full">
        <h1 className="self-center text-xl font-semibold tracking-normal">
          About Us
        </h1>
      </header>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index}>{task}</TaskItem>
        ))}
      </ul>
    </section>
  );
})
