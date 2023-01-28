import React from "react";

import defaultBanner from "../assets/banner/defaultBanner.webp";

const Banner = () => {
  return (
   <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-24 md:flex-row flex-col items-center">
         <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Start with a Beginner COURSE
            </h1>
            <p class="mb-8 leading-relaxed">Beginner courses are designed to just get you into the course. It is an admission exercise for you to learn the basics and do some exercises.</p>
            <div class="flex justify-center">
            </div>
         </div>
         <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src={defaultBanner}/>
         </div>
      </div>
   </section>
  );
};

export default Banner;
