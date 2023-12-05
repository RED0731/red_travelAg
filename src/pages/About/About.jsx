import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import AboutComp from "../MainPage/About/About";
import Tag from "../../components/Tag/Tag";

const About = () => {
  return (
    <>
      <div className="w-full h-[40vh] mb-14 mt-16">
        <Breadcrumb title="About Us" breadcrumb="Home / About" />
      </div>
      <div className="w-full h-auto py-6 lg:px-20 md:px-16 sm:px-8 px-4">
        <AboutComp />
        <div className="w-full h-auto pt-14 pb-6">
          <Tag tagSlog="Our Teams" tagTitle="Meet Expert Teams" />
        </div>
      </div>
    </>
  );
};

export default About;
