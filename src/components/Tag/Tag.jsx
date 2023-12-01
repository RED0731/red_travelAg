import React from "react";

const Tag = ({tagSlog, tagTitle}) => {
  return (
    <div className="text-center mb-10">
      <div className="satisfy-font text-2xl font-medium text-orange-500 text-center">
        {tagSlog}
      </div>
      <h1 className="lg:text-[2.5rem] md:text-[2.2rem] sm:text-[2rem] text-[1.8rem] text-gray-900 text-center font-black">
        {tagTitle}
      </h1>
    </div>
  );
};

export default Tag;
