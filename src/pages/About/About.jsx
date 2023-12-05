import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import AboutComp from "../MainPage/About/About";
import Tag from "../../components/Tag/Tag";
import Mission from "../../assets/About/mission.png";
import Vision from "../../assets/About/vision.png";

const About = () => {
  return (
    <>
      <div className="w-full h-[40vh] mb-14 mt-16">
        <Breadcrumb title="About Us" breadcrumb="Home / About" />
      </div>
      <div className="w-full h-auto py-6 lg:px-20 md:px-16 sm:px-8 px-4">
        <AboutComp />
        <div className="w-full h-auto bg-white rounded-2xl my-16 px-6 py-20 flex items-center justify-center gap-x-16 gap-y-7 shadow-md border-2 border-gray-200 flex-wrap">
          <div className="lg:w-[43%] md:w-[45%] sm:w-full w-full h-auto bg-indigo-500 rounded-xl p-8">
            <div className="w-full h-auto flex items-center gap-x-2 mb-2">
              <img
                src={Mission}
                className="w-[50px] h-[50px] object-contain object-center bg-gray-800 rounded-md p-0.5 shadow"
                alt="mission icon"
              />
              <h1 className="text-xl text-gray-900 font-black">Our Mission</h1>
            </div>
            Committed to excellence, we offer personalized experiences,
            meticulously planned options, and a professional team, exceeding
            expectations and creating unforgettable memories.
          </div>
          <div className="lg:w-[43%] md:w-[45%] sm:w-full w-full h-auto bg-violet-500 rounded-xl p-8">
            <div className="w-full h-auto flex items-center gap-x-2 mb-2">
              <img
                src={Vision}
                className="w-[50px] h-[50px] object-contain object-center bg-gray-800 rounded-md p-0.5 shadow"
                alt="mission icon"
              />
              <h1 className="text-xl text-gray-900 font-black">Our Vision</h1>
            </div>
            We aspire to lead as an innovative travel agency, setting high
            standards for excellence. Our goal is to be the preferred choice for
            expert guidance and outstanding service.
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
              <div className="w-full h-full absolute bottom-0 left-0 linear_gradient_to_bottom flex items-end text-center px-6 py-8">
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
                  <div className="w-full h-full absolute bottom-0 left-0 linear_gradient_to_bottom flex items-end text-center px-6 py-8">
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
                  <div className="w-full h-full absolute bottom-0 left-0 linear_gradient_to_bottom flex items-end text-center px-6 py-8">
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
                  <div className="w-full h-full absolute bottom-0 left-0 linear_gradient_to_bottom flex items-end text-center px-6 py-8">
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
                  <div className="w-full h-full absolute bottom-0 left-0 linear_gradient_to_bottom flex items-end text-center px-6 py-8">
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
                  <div className="w-full h-full absolute bottom-0 left-0 linear_gradient_to_bottom flex items-end text-center px-6 py-8">
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
      </div>
    </>
  );
};

export default About;
