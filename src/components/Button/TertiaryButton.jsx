import React from "react";

const TertiaryButton = ({ children }) => {
  return (
    <>
      <button className="bg-none text-gray-400 text-[1.15rem] font-medium outline-none border-none hover:text-[#e24806] ease-out duration-700">
        {children}
      </button>
    </>
  );
};

export default TertiaryButton;
