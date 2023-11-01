import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <>
      <button className="bg-orange-500 flex items-center gap-x-2 text-[#ffffff] py-[0.3rem] px-4 text-[1rem] font-medium outline-none border-2 border-orange-500 rounded hover:bg-orange-500/[0.55] hover:border-orange-500/[0.55] hover:text-gray-900 ease-out duration-700">
        {children} 
      </button>
    </>
  );
};

export default PrimaryButton;
