import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { PageContext } from "../App";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const context = useContext(PageContext);
  const { user, setUser } = context;
  const navigate = useNavigate();


  const onClickSubmit = async () => {
    try {
      if (userData.email.trim() === "" || userData.password.trim() === "") {
        return;
      }
      const { data } = await axios.post(`${BASE_URL}/api/user/signin`, {
        email: userData.email.trim(),
        password: userData.password.trim(),
      });

      if (data.token) {
        await localStorage.setItem("user", JSON.stringify(data));
        setUser(data.data);
        navigate("/");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      if (error.response.data) {
        alert(error.response.data.message);
      }
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font h-13 w-full bg-no-repeat bg-[url('https://invact.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofessional_icon_v1.62f3d35a.webp&w=540&q=75')]">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign In
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
                type="password"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              onClick={onClickSubmit}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
