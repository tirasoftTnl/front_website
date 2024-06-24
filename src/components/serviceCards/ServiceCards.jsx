import React from "react";
import './serviceCards.css'
export const ServiceCard = ({
    imgSrc,
    imgAlt,
    title,
    description,
  }) => {
    return (    
      <div className="Service-card-div">
        <div className="CARD-DIV max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
          <a href="#" class="inline-flex font-medium items-center text-blue-600 hover:underline">
              See our guideline
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
    );
  };