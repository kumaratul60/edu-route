import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Competitions from "./pages/Competitions";
import Courses from "./pages/Courses";
import GetHired from "./pages/GetHired";
import Home from "./pages/Home";
import Signin from "./pages/signin";
import SignUp from "./pages/SignUp";

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
              <Route path="/home" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/competitions" element={<Competitions />} />
              <Route path="/get-hired" element={<GetHired />} />
            </>
          ) : (
            <>
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<SignUp />} />
            </>
          )}
        </Routes>
      </PageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
