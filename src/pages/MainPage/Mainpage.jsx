import React from "react";
import Home from "../MainPage/Home/Home";
import Category from "../MainPage/Category/Category";
import About from "../MainPage/About/About";
import Destination from "../MainPage/Destination/Destination";
import Packages from "../MainPage/Packages/Packages";
import Banner from "../MainPage/Banner/Banner";
import Contact from "../MainPage/Contact/Contact";
import Offer from "../MainPage/Offer/Offer";
import Blog from "../MainPage/Blog/Blog";

const Mainpage = () => {
  return (
    <div>
      <Home />
      <Category />
      <About />
      <Packages />
      <Destination />
      <Banner />
      <Offer />
      <Blog />
      <Contact />
    </div>
  );
};

export default Mainpage;
