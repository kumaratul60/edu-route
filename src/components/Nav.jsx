import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../App";

const Nav = () => {
  const context = useContext(PageContext);
  const { user, setUser } = context;

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">GuideMe</span>
        </a>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {user ? (
            <>
              <Link to={"/home"}>
                <a className="mr-5 hover:text-gray-900">Home</a>
              </Link>
              <Link to={"/courses"}>
                <a className="mr-5 hover:text-gray-900">Course</a>
              </Link>
              <Link to={"/competitions"}>
                <a className="mr-5 hover:text-gray-900">Competitions</a>
              </Link>
              <Link to={"/get-hired"}>
                <a className="mr-5 hover:text-gray-900">Get Hired</a>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/signin"}>
                <a className="mr-5 hover:text-gray-900">SignIn</a>
              </Link>
              <Link to={"/signup"}>
                <a className="mr-5 hover:text-gray-900">SignUp</a>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
