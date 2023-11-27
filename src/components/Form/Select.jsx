import React from "react";

const Select = ({ options, ...rest }) => {
  return (
    <select
      className="bg-gray-200 border-2 text-gray-950 rounded-md text-base w-full h-full p-4 focus:outline-none focus:bg-gray-100/80 focus:border-orange-500 ease-out duration-700"
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
