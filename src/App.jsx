import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Media from "./components/Media";
import Media1 from "./components/Media1";
import Count from "./components/Count";
import Bitiruv from "./components/Bitiruv";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#151515] w-full h-full">
      <Navbar />
      <Home />
      <Media />
      <Media1 />
      <Count />
      <Bitiruv />
      <Footer />
    </div>
  );
};

export default App;
