import React from "react";
import AboutImg from "../../assets/About/about.png";

const About = () => {
  return (
    <>
      <div className="w-full h-auto py-10 px-20 bg-gray-200/30 flex items-center justify-between gap-8">
        <div className="w-[40%] h-[75vh] flex">
          <img
            src={AboutImg}
            alt="About Img"
            className="w-full h-full object-fill drop-shadow-md object-center bg-orange-400/5 rounded-xl"
          />
        </div>
        <div className="w-[50%] h-auto">This is the the content section.</div>
      </div>
    </>
  );
};

export default About;
