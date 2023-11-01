import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <>
      <button className="bg-[#e24806] text-[#171721] py-2 px-6 text-[1.15rem] font-medium outline-none border-2 border-[#e24806] rounded-[6px] hover:bg-[#e24806]/[0.35] hover:border-[#e24806]/[0.55] hover:text-gray-200 ease-out duration-700">
        {children}
      </button>
    </>
  );
};

export default PrimaryButton;
