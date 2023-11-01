import React from "react";

const Category = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col py-16 px-20">
        <div className="tag_section">
          <div className="satisfy-font text-2xl font-medium text-orange-500 text-center">
            Browse by Category
          </div>
          <h1 className="text-[1.75rem] text-gray-900 mb-7 text-center font-black">
            Select your Type
          </h1>
        </div>
        <div className="w-full h-auto flex items-center justify-center">
          <div className="flex items-center justify-center flex-col text-center bg-white p-4 border border-gray-300 rounded-md shadow-lg">
            Hello there
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
