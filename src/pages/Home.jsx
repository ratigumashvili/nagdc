import { useEffect } from "react";
import React from "react";
import About from "../components/about/About";
import MainSearch from "../components/mainSearch/MainSearch";
import Recent from "../components/recent/Recent";

const Home = () => {
  
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <MainSearch />
      <div className="main-content">
        <About />
        <Recent />
      </div>
    </>
  );
};

export default Home;
