import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Competitions from "./pages/Competitions";
import Courses from "./pages/Courses";
import GetHired from "./pages/GetHired";
import Home from "./pages/Home";
import Signin from "./pages/signin";
import SignUp from "./pages/SignUp";
import Blogs from "./pages/Blogs";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

export const PageContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user === null) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user != null) {
        setUser(user?.data);
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <PageContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Nav />
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/competitions" element={<Competitions />} />
              <Route path="/get-hired" element={<GetHired />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/*" element={<Navigate to="/" replace />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/*" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
        <div className="bg-blue-gray-50/50">
          <Footer />
        </div>
      </PageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
