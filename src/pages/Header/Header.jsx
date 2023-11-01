import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { Send } from "react-bootstrap-icons";

const Header = () => {
  return (
    <>
      <nav className="w-full h-auto bg-gray-100 shadow-md py-4 px-20 fixed top-0 flex items-center justify-between">
        <div className="flex items-center gap-x-16">
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
              {/* <Link className="text-[1.1rem] text-orange-500 font-medium py-[0.15rem] px-3 bg-orange-500/20 rounded-full">
                Home
              </Link> */}
              {/* <Link className="text-[1.1rem] text-orange-500 font-medium border-b-2 border-orange-500">
                Home
              </Link> */}
              <Link className="text-[1.1rem] text-orange-500 font-medium">
                Home
              </Link>
            </li>
            <li>
              {/* <Link className="text-[1.1rem] text-gray-700 hover:text-orange-500 font-medium py-1 px-3 hover:bg-orange-500/20 rounded-full ease-out duration-700">
                Packages
              </Link> */}
              {/* <Link className="text-[1.1rem] text-gray-700 hover:text-orange-500 font-medium hover:border-b-2 hover:border-orange-500 ease-out duration-700">
                Packages
              </Link> */}
              <Link className="text-[1.1rem] text-gray-700 hover:text-orange-500 font-medium ease-out duration-700">
                Packages
              </Link>
            </li>
            <li>
              <Link className="text-[1.1rem] text-gray-700 hover:text-orange-500 font-medium ease-out duration-700">
                Destination
              </Link>
            </li>
            <li>
              <Link className="text-[1.1rem] text-gray-700 hover:text-orange-500 font-medium ease-out duration-700">
                About
              </Link>
            </li>
            <li>
              <Link className="text-[1.1rem] text-gray-700 hover:text-orange-500 font-medium ease-out duration-700">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <PrimaryButton>Book Now <Send /></PrimaryButton>
      </nav>
    </>
  );
};

export default Header;
