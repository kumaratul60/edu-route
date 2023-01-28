import React, { useContext, useEffect } from "react";
import { PageContext } from "../App";
const Home = () => {
  const context = useContext(PageContext);
  const { user, setUser } = context;

  useEffect(() => {

  }, []);

  return <div className="text-3xl"></div>;
};

export default Home;
