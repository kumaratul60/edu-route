import React, { useContext } from "react";
import { PageContext } from "../App";
// import img1 from "../assets/CompetitionImage/AIPGMEE-Exam.jpg";
// import img2 from "../assets/CompetitionImage/CA-Exam.jpeg";
// import img3 from "../assets/CompetitionImage/CAT-Exam.jpeg";
// import img4 from "../assets/CompetitionImage/CDS-Exam.jpg";
// import img5 from "../assets/CompetitionImage/CSE.png";
// import img6 from "../assets/CompetitionImage/CS-Exam.jpeg";
// import img7 from "../assets/CompetitionImage/Gate-Exam.png";
// import img8 from "../assets/CompetitionImage/Neet-Exam.jpeg";
// import img9 from "../assets/CompetitionImage/NDA-Exam.webp";
// import img10 from "../assets/CompetitionImage/JEE.jpg";
import Banner2 from "../components/Banner2";
import { exams } from "../categories/competitive";

const Competitions = () => {
  const context = useContext(PageContext);
  const { user } = context;

  const data = exams.filter((item) => {
    return item.target === user?.vision;
  });

  return (
    <div>
      <Banner2 />
      <section class="pl-8 pr-8 text-gray-300 body-font">
        <div class="container  px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {data.length > 0  && data.map(item =><div key={item.id} class="p-4 md:w-1/3 ">
              <div class="h-full border-black border-2 border-2border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-32 w-full object-cover object-center"
                  src={item.img}
                  alt="blog"
                  style={{ objectFit: "fill" }}
                />
                <hr className="border-2 border-gray-500 cursor-pointer " />
                <div class="p-4 border-solid border-yellow-200">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                    {item.target}
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    {item.name}
                  </h1>
                  <p class="leading-relaxed mb-3 text-gray-900">
                 
                    {item.description}
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
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
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 ">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Competitions;
