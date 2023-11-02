import React from "react";

const SecondaryButton = ({ children }) => {
  return (
    <>
      <button className="bg-orange-500/[0.25] text-gray-900 flex items-center gap-x-2 py-2 px-6 text-[1rem] font-medium outline-none border-2 border-orange-500/70 rounded hover:bg-orange-500/[0.35] hover:border-orange-500/[0.55] hover:text-gray-900 ease-out duration-700">
        {children}
      </button>
    </>
  );
};

export default SecondaryButton;
