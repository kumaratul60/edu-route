import React from "react";

import img1 from "../assets/CompetitionImage/AIPGMEE-Exam.jpg";
import img2 from "../assets/CompetitionImage/CA-Exam.jpeg";
import img3 from "../assets/CompetitionImage/CAT-Exam.jpeg";
import img4 from "../assets/CompetitionImage/CDS-Exam.jpg";
import img5 from "../assets/CompetitionImage/CSE.png";
import img6 from "../assets/CompetitionImage/CS-Exam.jpeg";
import img7 from "../assets/CompetitionImage/Gate-Exam.png";
import img8 from "../assets/CompetitionImage/Neet-Exam.jpeg";
import img9 from "../assets/CompetitionImage/NDA-Exam.webp";
import img10 from "../assets/CompetitionImage/JEE.jpg";
import Banner2 from "../components/Banner2";

const Competitions = () => {
  return (
    <div>
      <Banner2 />
      <section class="pl-8 pr-8 text-gray-300 body-font">
        <div class="container  px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3 ">
              <div class="h-full border-black border-2 border-2border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-32 w-full object-cover object-center"
                  src={img5}
                  alt="blog"
                  style={{ objectFit: "fill" }}
                />
                <hr className="border-2 border-gray-500 cursor-pointer " />
                <div class="p-4 border-solid border-yellow-200">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                    UPSC
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Civil Services Exam
                  </h1>
                  <p class="leading-relaxed mb-3 text-gray-900">
                    {" "}
                    The Civil Services Examination (CSE) is conducted by the
                    Union Public Service Commission (UPSC) to recruit candidates
                    for the Indian Administrative Service (IAS), Indian Police
                    Service (IPS), and Indian Foreign Service (IFS), among other
                    services. It is considered one of the toughest and most
                    prestigious exams in India.
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
            </div>

            <div class="p-4 md:w-1/3">
              <div class="h-full border-black border-2 border-2border-opacity-60 rounded-lg overflow-hidden ">
                <img
                  class="lg:h-48 md:h-32 w-full object-cover object-center"
                  src={img8}
                  alt="blog"
                  style={{ objectFit: "fill" }}
                />
                <hr className="border-2 border-gray-500 cursor-pointer " />
                <div class="p-4 border-solid border-yellow-200">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                    Medical
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    NEET Exam
                  </h1>
                  <p class="leading-relaxed mb-3 text-gray-900">
                    {" "}
                    "The National Eligibility cum Entrance Test (NEET) is
                    conducted by the National Testing Agency (NTA) to recruit
                    candidates for undergraduate medical courses in India. It is
                    a highly competitive exam and is considered one of the
                    toughest exams in India.",
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
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-black border-2 border-2border-opacity-60 rounded-lg overflow-hidden ">
                <img
                  class="lg:h-48 md:h-32 w-full object-cover object-center"
                  src={img10}
                  alt="blog"
                  style={{ objectFit: "fill" }}
                />
                <hr className="border-2 border-gray-500 cursor-pointer " />
                <div class="p-4 border-solid border-yellow-200">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                    Engineering
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    JEE Exam
                  </h1>
                  <p class="leading-relaxed mb-3 text-gray-900">
                    {" "}
                    JEE Main or JEE Main 2023 is the first phase of the IIT
                    Joint Entrance Exam (IIT JEE). It is a computer-based online
                    test conducted by the National Testing Agency for students
                    aspiring to pursue undergraduate courses in India in top
                    engineering institutes, such as IITs, NITs, etc.
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
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-black border-2 border-2border-opacity-60 rounded-lg overflow-hidden ">
                <img
                  class="lg:h-48 md:h-32 w-full object-cover object-center"
                  src={img7}
                  alt="blog"
                  style={{ objectFit: "fill" }}
                />
                <hr className="border-2 border-gray-500 cursor-pointer " />
                <div class="p-4 border-solid border-yellow-200">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                    Post Graduation
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Gate Exam
                  </h1>
                  <p class="leading-relaxed mb-3 text-gray-900">
                    {" "}
                    The GATE (Graduate Aptitude Test in Engineering) exam is
                    conducted by the Indian Institute of Science (IISc) and the
                    Indian Institutes of Technology (IITs) for admissions to
                    postgraduate engineering programs in Indian institutes of
                    higher education. It is considered to be highly competitive
                    and is open to engineering graduates and diploma holders."
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
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-black  h-full border-2  border-opacity-60 rounded-lg overflow-hidden ">
                <img
                  class="lg:h-48 md:h-32 w-full object-cover object-center"
                  src={img1}
                  alt="blog"
                  style={{ objectFit: "fill" }}
                />
                {/* <hr className="border-4 border-gray-500 cursor-pointer "/> */}
                <div class="p-4">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    AIPGMEE
                  </h1>
                  <p class="leading-relaxed mb-3 text-gray-900">
                    The Civil Services Examination (CSE) is conducted by the
                    Union Public Service Commission (UPSC) to recruit candidates
                    for the Indian Administrative Service (IAS), Indian Police
                    Service (IPS), and Indian Foreign Service (IFS), among other
                    services.
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
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-black  h-full border-2 border-opacity-60 rounded-lg overflow-hidden ">
                <img
                  class="lg:h-48 md:h-32 w-full object-cover object-center"
                  src={img2}
                  alt="blog"
                  style={{ objectFit: "fill" }}
                />
                <hr className="border-2 border-gray-500 cursor-pointer " />
                <div class="p-4">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                    Commerce
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    CA Exam
                  </h1>
                  <p class="leading-relaxed mb-3 text-gray-900">
                    The Chartered Accountancy (CA) exam is conducted by the
                    Institute of Chartered Accountants of India (ICAI) to
                    recruit candidates for the Chartered Accountancy (CA)
                    course. It is a highly competitive exam and is considered
                    one of the toughest exams in India.
                  </p>
                  <div class="flex items-center flex-wrap">
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
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-black  h-full border-2  border-opacity-60 rounded-lg overflow-hidden ">
                <img
                  class="lg:h-48 md:h-32 w-full object-cover object-center"
                  src={img3}
                  alt="blog"
                  style={{ objectFit: "fill" }}
                />
                <hr className="border-2 border-gray-500 cursor-pointer " />
                <div class="p-4">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                    IIM
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    CAT Exam
                  </h1>
                  <p class="leading-relaxed mb-3 text-gray-900">
                    The Indian Institute of Management (IIM) Common Admission
                    Test (CAT) is conducted by the Indian Institute of
                    Management (IIM) to recruit candidates for MBA
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
            </div>

            <div class="p-4 md:w-1/3">
              <div class="h-full border-black border-2  border-opacity-60 rounded-lg overflow-hidden ">
                <img
                  class="lg:h-48 md:h-32 w-full object-cover object-center"
                  src={img4}
                  alt="blog"
                  style={{ objectFit: "fill" }}
                />
                <hr className="border-2 border-gray-500 cursor-pointer " />
                <div class="p-4">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                    Defence Exam
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    CDS
                  </h1>
                  <p class="leading-relaxed mb-3 text-gray-900">
                    {" "}
                    The CDS exam is conducted by the Union Public Service
                    Commission (UPSC) for recruiting officers in the Indian
                    Army, Navy, and Air Force. This exam is considered to be
                    highly competitive and is open to graduates and diploma
                    holders.
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
            </div>
            <div class="p-4 md:w-1/3">
              <div class="border-black  h-full border-2  border-opacity-60 rounded-lg overflow-hidden ">
                <img
                  class="lg:h-48 md:h-32 w-full object-cover object-center"
                  src={img6}
                  alt="blog"
                  style={{ objectFit: "fill" }}
                />
                <hr className="border-2 border-gray-500 cursor-pointer " />
                <div class="p-4">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                    Commerce
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    CS Exam
                  </h1>
                  <p class="leading-relaxed mb-3 text-gray-900">
                    {" "}
                    The Company Secretary (CS) exam is conducted by the
                    Institute of Company Secretaries of India (ICSI) to recruit
                    candidates for the Company Secretary (CS) course. It is a
                    highly competitive exam and is considered one of the
                    toughest exams in India.
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
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Competitions;
