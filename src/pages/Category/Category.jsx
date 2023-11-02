import React from "react";
import Beach from "../../assets/Category/beach.png";
import Boat from "../../assets/Category/boat.png";
import City from "../../assets/Category/city1.png";
import Adventure from "../../assets/Category/adventure.png";
import Hiking from "../../assets/Category/hiking.png";
import Camping from "../../assets/Category/camping.png";

const Category = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col py-16 px-20">
        <div className="text-center">
          <div className="satisfy-font text-2xl font-medium text-orange-500 text-center">
            Browse by Category
          </div>
          <h1 className="text-[1.75rem] text-gray-900 mb-7 text-center font-black">
            Select your Type
          </h1>
        </div>
        <div className="w-full h-auto flex items-center justify-center gap-12">
          <div className="w-[180px] h-auto flex items-center justify-center flex-col text-center bg-white p-5 border border-gray-300 rounded-lg cursor-pointer hover:border hover:border-orange-500 ease-out duration-500">
            <img
              src={Beach}
              alt="Category Icon"
              className="w-[70px] h-[70px] object-contain object-center p-1 brightness-75 bg-orange-600/30 rounded-lg mb-2"
            />
            <h1 className="text-gray-900 text-[1.2rem] font-bold">Beaches</h1>
            <p className="text-gray-400 text-base font-normal">10+ Tours</p>
          </div>
          <div className="w-[180px] h-auto flex items-center justify-center flex-col text-center bg-white p-5 border border-gray-300 rounded-lg cursor-pointer hover:border hover:border-orange-500 ease-out duration-500">
            <img
              src={Boat}
              alt="Category Icon"
              className="w-[70px] h-[70px] object-contain object-center p-1 brightness-75 bg-orange-600/30 rounded-lg mb-2"
            />
            <h1 className="text-gray-900 text-[1.2rem] font-bold">
              Boat Tours
            </h1>
            <p className="text-gray-400 text-base font-normal">12+ Tours</p>
          </div>
          <div className="w-[180px] h-auto flex items-center justify-center flex-col text-center bg-white p-5 border border-gray-300 rounded-lg cursor-pointer hover:border hover:border-orange-500 ease-out duration-500">
            <img
              src={City}
              alt="Category Icon"
              className="w-[70px] h-[70px] object-contain object-center p-1 brightness-75 bg-orange-600/30 rounded-lg mb-2"
            />
            <h1 className="text-gray-900 text-[1.2rem] font-bold">
              City Tours
            </h1>
            <p className="text-gray-400 text-base font-normal">25+ Tours</p>
          </div>
          <div className="w-[180px] h-auto flex items-center justify-center flex-col text-center bg-white p-5 border border-gray-300 rounded-lg cursor-pointer hover:border hover:border-orange-500 ease-out duration-500">
            <img
              src={Adventure}
              alt="Category Icon"
              className="w-[70px] h-[70px] object-contain object-center p-1 brightness-75 bg-orange-600/30 rounded-lg mb-2"
            />
            <h1 className="text-gray-900 text-[1.2rem] font-bold">Adventure</h1>
            <p className="text-gray-400 text-base font-normal">15+ Tours</p>
          </div>
          <div className="w-[180px] h-auto flex items-center justify-center flex-col text-center bg-white p-5 border border-gray-300 rounded-lg cursor-pointer hover:border hover:border-orange-500 ease-out duration-500">
            <img
              src={Hiking}
              alt="Category Icon"
              className="w-[70px] h-[70px] object-contain object-center p-1 brightness-75 bg-orange-600/30 rounded-lg mb-2"
            />
            <h1 className="text-gray-900 text-[1.2rem] font-bold">Hiking</h1>
            <p className="text-gray-400 text-base font-normal">11+ Tours</p>
          </div>
          <div className="w-[180px] h-auto flex items-center justify-center flex-col text-center bg-white p-5 border border-gray-300 rounded-lg cursor-pointer hover:border hover:border-orange-500 ease-out duration-500">
            <img
              src={Camping}
              alt="Category Icon"
              className="w-[70px] h-[70px] object-contain object-center p-1 brightness-75 bg-orange-600/30 rounded-lg mb-2"
            />
            <h1 className="text-gray-900 text-[1.2rem] font-bold">Camping</h1>
            <p className="text-gray-400 text-base font-normal">16+ Tours</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
