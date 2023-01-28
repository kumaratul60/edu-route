import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Competitions from "./pages/Competitions";
import Courses from "./pages/Courses";
import GetHired from "./pages/GetHired";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/get-hired" element={<GetHired />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
