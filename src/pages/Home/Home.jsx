import React from "react";
import HeroImg from "../../assets/Hero/hero.png";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-between py-24 px-20 gap-8">
        <div className="w-[50%] h-auto rounded-md">
          <div className="text-orange-500 text-[1rem] mb-4 satisfy-font">Pack your luggage!</div>
        </div>
        <div className="w-[45%] h-[75vh] rounded-md p-5">
          <img
            src={HeroImg}
            alt="Hero Travel Img"
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
