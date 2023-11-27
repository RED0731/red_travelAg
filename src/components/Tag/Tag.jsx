import React from "react";

const Tag = ({tagSlog, tagTitle}) => {
  return (
    <div className="text-center mb-10">
      <div className="satisfy-font text-2xl font-medium text-orange-500 text-center">
        {tagSlog}
      </div>
      <h1 className="text-[2.5rem] text-gray-900 text-center font-black">
        {tagTitle}
      </h1>
    </div>
  );
};

export default Tag;
