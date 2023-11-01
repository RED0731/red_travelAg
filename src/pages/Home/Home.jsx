import React from "react";
import HeroImg from "../../assets/Hero/hero.png";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-between py-24 px-20 gap-8">
        <div className="w-[50%] h-auto bg-orange-500 rounded-md p-5">
          Hello this is content section.
        </div>
        <div className="w-[35%] h-[65vh] bg-purple-500 rounded-md p-5">
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
