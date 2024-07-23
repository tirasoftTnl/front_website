import React, { useState } from "react";
import "./solutions.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../Effects/Variants";

export default function Accordion({ title, answer }) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <motion.div
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}
      className="accordion-container-div"
      onClick={() => setAccordionOpen(!accordionOpen)}
    >
      <button className="flex justify-between w-full">
        <span className="title-div-container">{title}</span>
        <svg className="the-icon-div fill-indigo-500 shrink-0 ml-8" width="16" height="16"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
              }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
              }`}
          />

        </svg>
      </button>
      <motion.div
        className="grid overflow-hidden"
        animate={{
          height: accordionOpen ? "auto" : 0,
          opacity: accordionOpen ? 1 : 0,
        }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      >
        <div className="answer-div-container">{answer}</div>
      </motion.div>
    </motion.div>
  );
}