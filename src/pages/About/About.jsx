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
          <div className="w-full h-auto flex items-center justify-between gap-7">
            <div className="w-[25%] h-auto flex items-center flex-col gap-y-4">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/04/18/hot-air-balloons-1867279_640.jpg"
                alt="team member"
                className="w-full h-[55vh] object-cover object-center"
              />
            </div>
          </div>
        </div>
        {/* Hiking expert, Jungle Safari expert, Beach expert, Boat expert, City tour expert, Adventure, Hot Air Ballon, Expert offroad driver, Traveller, Mountainery expert, Waterfall expert, Climbing expert, Camping expert, Food expert, Photography expert, Nature expert, Cooking expert, Cultural expert, Transportation expert, Cooking expert, Cultural expert, Transportation expert, Cooking expert, Cultural expert, Transportation expert, Cooking expert, Cultural expert, Transportation expert */}
      </div>
    </>
  );
};

export default About;
