import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="w-full h-auto bg-gray-100 shadow-md py-4 px-20 fixed top-0 flex items-center justify-between">
        <div className="">
          <Link
            to="/"
            className="relative text-gray-900 text-[1.7rem] font-black tracking-wider hover:text-gray-700 ease-out duration-700"
          >
            Travel
            <sup className="absolute top-1 left-6 text-orange-500 font-medium text-[0.75rem] ">
              Agency
            </sup>
          </Link>
        </div>
        <ul className="list-none flex items-center gap-6">
          <li>
            <Link className="text-[1.1rem] text-gray-700 font-medium">Home</Link>
          </li>
          <li>HEllo</li>
          <li>HEllo</li>
          <li>HEllo</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
