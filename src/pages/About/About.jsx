import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import AboutComp from "../MainPage/About/About";
import Tag from "../../components/Tag/Tag";
import "./About.css";

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
            <div className="w-[30%] h-auto relative rounded-3xl overflow-hidden cursor-pointer">
              <img
                src="https://cdn.pixabay.com/photo/2019/03/24/22/05/man-4078827_1280.jpg"
                alt="team member"
                className="w-full h-[75vh] object-cover object-center"
              />
              <div className="w-full h-full absolute bottom-0 left-0 team_bg flex items-end px-6 py-8">
                This is the section.
              </div>
            </div>
            <div className="w-[70%] h-[75vh] flex items-start gap-7">
              <img
                src="https://images.unsplash.com/photo-1593035013811-2db9b3c36980?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
                className="w-1/2 h-1/2 object-cover object-center rounded-3xl cursor-pointer"
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
