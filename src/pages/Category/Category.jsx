import React from "react";
import Beach from "../../assets/Category/beach.png";
import Boat from "../../assets/Category/boat.png";
import City from "../../assets/Category/city.png";
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
        <div className="w-full h-auto flex items-center justify-center">
          <div className="flex items-center justify-center flex-col text-center bg-white p-5 border border-gray-300 rounded-md shadow-lg">
            <img src={Beach} alt="" className="w-[70px] h-[70px] object-contain object-center p-2 bg-orange-600 rounded-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
