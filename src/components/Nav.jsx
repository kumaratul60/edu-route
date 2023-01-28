import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../App";

const Nav = () => {
  const [searchInput, setSearchInput] = useState("");
  const context = useContext(PageContext);
  const { user, setUser } = context;

  return (
    <header className="text-gray-600 body-font sticky top-0  bg-blue-100  drop-shadow shadow-blue-100  z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={ "/" }>
          { " " }
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              className=" h-11 w-11"
              src="https://cdn-icons-png.flaticon.com/512/1189/1189142.png"
              alt=""
            />
            <span title="back to home" className="ml-3 text-xl">
              GuideMe
            </span>
          </a>
        </Link>
        {/* Middle Search  */ }
        <div className="flex items-center  md:border-1 rounded-lg py-1.5 md:shadow-sm bg-white space-x-4 ml-[30%]"
        >
          <input
            value={ searchInput }
            onChange={ (e) => setSearchInput(e.target.value) }
            className=" flex-grow pl-6 bg-transparent outline-none text-md text-gray-600 placeholder-gray-400 text-xs sm:text-sm lg:text-md xl:text-lg"
            type="text"
            placeholder="Start your search"
          />

         
        </div>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
          { user ? (
            <>
              <Link to={ "/home" }>
                <a className="mr-5 hover:text-gray-900">Home</a>
              </Link>
              <Link to={ "/courses" }>
                <a className="mr-5 hover:text-gray-900">Course</a>
              </Link>
              <Link to={ "/competitions" }>
                <a className="mr-5 hover:text-gray-900">Competitions</a>
              </Link>
              <Link to={ "/get-hired" }>
                <a className="mr-5 hover:text-gray-900">Get Hired</a>
              </Link>
              <Link to={"/blogs"}>
                <a className="mr-5 hover:text-gray-900">Blogs</a>
              </Link>
              <button
                onClick={ () => {
                  setUser(null);
                  localStorage.removeItem("user");
                } }
                class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              >
                SignOut
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </>
          ) : (
            <>
              <Link to={ "/signin" }>
                <a className="mr-5 hover:text-gray-900">SignIn</a>
              </Link>
              <Link to={ "/signup" }>
                <a className="mr-5 hover:text-gray-900">SignUp</a>
              </Link>
            </>
          ) }
        </nav>
      </div>
    </header>
  );
};

export default Nav;
