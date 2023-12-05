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
        <div className="w-full h-auto py-16 flex items-center gap-7">
          <div className="w-1/2 h-auto bg-indigo-500 rounded-xl px-10 py-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="60"
              height="60"
              className="text-gray-900"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-1 6h-4V4h4v4zm-6.002 0H9.002V4H13v4zm-4.001 6h-4V9h4v4zm6.001 0h-4V9h4v4zm-4 6h-4v-4h4v4zm6 0h-4v-4h4v4z" />
            </svg>
            Our travel agency is devoted to exceptional customer service and
            personalized experiences. We're a reliable partner with meticulously
            planned options. Our expert team ensures professionalism, exceeding
            expectations, and creating unforgettable memories.
          </div>
          <div className="w-1/2 h-auto bg-orange-500 rounded-xl px-10 py-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="60"
              height="60"
              className="text-gray-900"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M11 18h2v-2h-2v2zm4-10.44L12 3 7 7.56V17h10V7.56zm-2 9h-2v-2h2v2z" />
            </svg>
            We aim to be a leading, innovative travel agency, setting high standards for excellence and customer satisfaction. Our goal is to be the preferred choice for expert travel guidance and outstanding service.
          </div>
        </div>
        <div className="w-full h-auto pb-16">
          <Tag tagSlog="Our Teams" tagTitle="Meet Expert Teams" />
          <div className="w-full h-auto flex items-center justify-between gap-7">
            <div className="w-[30%] h-[80vh] relative rounded-bl-3xl rounded-tl-3xl overflow-hidden cursor-pointer">
              <img
                src="https://cdn.pixabay.com/photo/2019/03/24/22/05/man-4078827_1280.jpg"
                alt="team member"
                className="w-full h-full object-cover object-center"
              />
              <div className="w-full h-full absolute bottom-0 left-0 team_bg flex items-end text-center px-6 py-8">
                <div className="w-full h-auto flex items-start flex-col">
                  <h1 className="text-3xl text-gray-200 font-black mb-1">
                    Gokarna Adhikari
                  </h1>
                  <p className="text-base text-orange-400 font-normal">
                    CEO/Founder of TravelAg
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[70%] h-[80vh] relative flex items-start flex-col gap-y-7">
              <div className="w-full h-[48%] flex items-start justify-between gap-7">
                <div className="w-[31%] h-full relative overflow-hidden cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1626565244872-206f4c1f9e57?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image"
                    className="w-full h-full object-cover object-center cursor-pointer"
                  />
                  <div className="w-full h-full absolute bottom-0 left-0 team_bg flex items-end text-center px-6 py-8">
                    <div className="w-full h-auto flex items-start flex-col">
                      <h1 className="text-3xl text-gray-200 font-black mb-1">
                        Gokarna Adhikari
                      </h1>
                      <p className="text-base text-orange-400 font-normal">
                        CEO/Founder of TravelAg
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[31%] h-full relative overflow-hidden cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1615136002804-166c5961414e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image"
                    className="w-full h-full object-cover object-center cursor-pointer"
                  />
                  <div className="w-full h-full absolute bottom-0 left-0 team_bg flex items-end text-center px-6 py-8">
                    <div className="w-full h-auto flex items-start flex-col">
                      <h1 className="text-3xl text-gray-200 font-black mb-1">
                        Gokarna Adhikari
                      </h1>
                      <p className="text-base text-orange-400 font-normal">
                        Manager/Organizer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[31%] h-full relative rounded-tr-3xl overflow-hidden cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1587050265310-1a2d98ccce5f?q=80&w=1861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image"
                    className="w-full h-full object-cover object-center cursor-pointer"
                  />
                  <div className="w-full h-full absolute bottom-0 left-0 team_bg flex items-end text-center px-6 py-8">
                    <div className="w-full h-auto flex items-start flex-col">
                      <h1 className="text-3xl text-gray-200 font-black mb-1">
                        Gokarna Adhikari
                      </h1>
                      <p className="text-base text-orange-400 font-normal">
                        Expert video/photographer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[47%] flex items-start justify-between gap-7">
                <div className="w-[69%] h-full relative overflow-hidden cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1573496267526-08a69e46a409?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image"
                    className="w-full h-full object-cover object-center cursor-pointer"
                  />
                  <div className="w-full h-full absolute bottom-0 left-0 team_bg flex items-end text-center px-6 py-8">
                    <div className="w-full h-auto flex items-start flex-col">
                      <h1 className="text-3xl text-gray-200 font-black mb-1">
                        Taylor Swift & Selena Gomez
                      </h1>
                      <p className="text-base text-orange-400 font-normal">
                        Front-Desk Member
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[31%] h-full relative overflow-hidden rounded-br-3xl cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1599583287831-385c6a578044?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image"
                    className="w-full h-full object-cover object-center cursor-pointer"
                  />
                  <div className="w-full h-full absolute bottom-0 left-0 team_bg flex items-end text-center px-6 py-8">
                    <div className="w-full h-auto flex items-start flex-col">
                      <h1 className="text-3xl text-gray-200 font-black mb-1">
                        Gokarna Adhikari
                      </h1>
                      <p className="text-base text-orange-400 font-normal">
                        Mountainery expert
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hiking expert, Jungle Safari expert, Beach expert, Boat expert, City tour expert, Adventure, Hot Air Ballon, Expert offroad driver, Traveller, Mountainery expert, Waterfall expert, Climbing expert, Camping expert, Food expert, Photography expert, Nature expert, Cooking expert, Cultural expert, Transportation expert, Cooking expert, Cultural expert, Transportation expert, Cooking expert, Cultural expert, Transportation expert, Cooking expert, Cultural expert, Transportation expert */}
      </div>
    </>
  );
};

export default About;
