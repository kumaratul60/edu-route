import React from "react";

const Card = ({ image, title, text }) => {
  return (
    <div className="p-4 md:w-1/3 ">
      <div className="h-full border-2 border-gray-200 border-opacity-60  overflow-hidden rounded-2xl cursor-pointer hover:shadow-lg hover:bg-gradient-to-t hover:from-red-200 hover:text-red-900  first:border-t-2 ">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={image}
          alt="blog"
        />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">{text}</p>
          <div className="flex items-center flex-wrap ">
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
