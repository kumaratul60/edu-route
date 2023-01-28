import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { PageContext } from "../App";

const SignUp = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });
  const context = useContext(PageContext);
  const { user, setUser } = context;
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    if (e.target.name === "full-name") {
      const name = e.target.value.split(" ");
      setUserData({
        ...userData,
        firstName: name[0],
        lastName: name[1] ?? "",
      });
      return;
    }
    if (e.target.name === "mobile") {
      if (!isNaN(e.target.value) && e.target.value.length <= 10) {
        setUserData({
          ...userData,
          mobile: Number(e.target.value),
        });
      }
    }

    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onClickSubmit = async () => {
    try {
      const { data } = await axios.post(`${BASE_URL}/api/user`, userData);
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        navigate("/");
      }
    } catch (error) {
      if (error.response.data) {
        alert(error.response.data.message);
      }
      console.log(error.response.data);
    }
  };

  return (
    <section className="text-gray-600 body-font h-13 w-full bg-no-repeat bg-[url('https://invact.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStart_icon_v2.66c37340.webp&w=1080&q=75')]">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        {/* <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 p-5">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p className="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div> */}
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Full Name
            </label>
            <input
              onChange={onChangeHandler}
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              onChange={onChangeHandler}
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="mobile" className="leading-7 text-sm text-gray-600">
              Mobile
            </label>
            <input
              onChange={onChangeHandler}
              type="text"
              id="mobile"
              name="mobile"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              onChange={onChangeHandler}
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button
            onClick={onClickSubmit}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
