import React from "react";

export const ServiceCard = ({
    imgSrc,
    imgAlt,
    title,
    description,
  }) => {
    return (
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img src={imgSrc} alt={imgAlt} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" />
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{description}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{title}</p>
        </div>

      </div>
    );
  };