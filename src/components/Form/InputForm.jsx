import React from "react";

const InputForm = ({ type, id, placeholder, required }) => {
  return (
    <>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        className="bg-gray-200 border-2 text-gray-950 rounded-md text-base w-full h-full p-4 focus:outline-none focus:bg-gray-100/80 focus:border-orange-500 ease-out duration-700"
      />
    </>
  );
};

export default InputForm;
