import React, { useState, useContext, useEffect } from "react";
import { state } from "../categories/States";
import { PageContext } from "../App";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useNavigate } from "react-router-dom";
import { QuestionsEng } from "../categories/QuesEng";
import { QuestionsFin } from "../categories/QuesFin";
import { QuestionsMath } from "../categories/QuesMath";
import OptionQuestion from "./OptionQuestion";

const Profile = () => {
  const [userData, setUserData] = useState({
    dob: "",
    gender: "",
    city: "",
    zip: "",
    state: "",
    academic: {
      higher: "",
      level: "",
    },
    vision: "",
  });
  const context = useContext(PageContext);
  const { user, setUser } = context;
  const navigate = useNavigate();
  const [data, setData] = useState([
    ...QuestionsEng,
    ...QuestionsFin,
    ...QuestionsMath,
  ]);

  useEffect(() => {
    if (user === null) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user != null) {
        setUserData(user?.data);
      }
    }
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let sendData = { ...userData };
    if (userData.vision == "no") {
      sendData = { ...userData, vision: "MBA" };
    }

    try {
      const { data } = await axios.put(
        `${BASE_URL}/api/user/${user._id}`,
        sendData
      );
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.data));
        setUser(data.data);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (e) => {
    if (e.target.name === "higher" || e.target.name === "level") {
      setUserData({
        ...userData,
        academic: { ...userData.academic, [e.target.name]: e.target.value },
      });
      return;
    }

    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onChangeHandlerVision = (e) => {
    console.log(e.target);
  };

  return (
    <div className=" flex items-center justify-center m-5">
      <form className="w-full max-w-lg" onSubmit={handleFormSubmit}>
        {userData.vision == "no" ? (
          data.map((item, index) => {
            return (
              <OptionQuestion
                key={index}
                data={item}
                dataIndex={index}
                onChangeHandlerVision={onChangeHandlerVision}
              />
            );
          })
        ) : (
          <>
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="dob"
                >
                  DOB
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="dob"
                  type="date"
                  name="dob"
                  placeholder="05/04/1997"
                  onChange={onChangeHandler}
                  required
                  value={userData.dob}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-8 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="gender"
                >
                  Gender
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="gender"
                    name="gender"
                    onChange={onChangeHandler}
                    placeholder="Gender"
                    required
                    value={userData.gender}
                  >
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                    <option value={"other"}>Prefer to not say</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="higher"
                >
                  Higher Education
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="higher"
                  type="text"
                  name="higher"
                  placeholder="B.A"
                  onChange={onChangeHandler}
                  required
                  value={userData.academic.higher}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-8 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="level"
                >
                  Level
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="level"
                    name="level"
                    onChange={onChangeHandler}
                    required
                    value={userData.academic.level}
                  >
                    <option value={"some_schools"}>Some schools</option>
                    <option value={"10th"}>10th</option>
                    <option value={"12th"}>12th</option>
                    <option value={"UG"}>UG</option>
                    <option value={"PG"}>PG</option>
                    <option value={"other"}>Prefer to not say</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mx-3 mb-6 mt-1">
                <div className="w-full md:w-1/3 px-2 mb-5 md:mb-0 ">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="city"
                    name={"city"}
                    type="text"
                    placeholder="Mumbai"
                    onChange={onChangeHandler}
                    required
                    value={userData.city}
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="state"
                  >
                    State
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="state"
                      name="state"
                      onChange={onChangeHandler}
                      required
                      value={userData.state}
                    >
                      {state.map((item) => (
                        <option key={item.key} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="zip"
                  >
                    Zip
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="zip"
                    name="zip"
                    type="text"
                    placeholder={1234}
                    onChange={onChangeHandler}
                    required
                    value={userData.zip}
                  />
                </div>
              </div>
            </div>
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="vision"
              >
                Have your Vision cleared ?
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="vision"
                  name="vision"
                  onChange={onChangeHandler}
                  required
                  value={userData.vision}
                >
                  <option value="" selected>
                    Select vision
                  </option>

                  <option value={"mass-communication"}>
                    Mass communication
                  </option>
                  <option value={"engineering"}>Engineering</option>
                  <option value={"doctor"}>Doctor</option>
                  <option value={"finance"}>Finance</option>
                  <option value="MBA">MBA</option>
                  <option value={"SSC"}>SSC</option>
                  <option value={"IAS"}>IAS</option>
                  <option value={"no"}>No</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </>
        )}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Profile;
