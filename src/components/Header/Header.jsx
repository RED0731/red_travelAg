import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Send } from "react-bootstrap-icons";
import PrimaryButton from "../Button/PrimaryButton";

const Header = () => {
  const Links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Tours", url: "/tours" },
    { title: "Packages", url: "/packages" },
    { title: "Blog", url: "/blogs" },
    { title: "Contact", url: "/contact" },
  ];
  return (
    <>
      <nav className="w-full h-auto bg-gray-100 shadow-md py-4 px-20 fixed top-0 flex items-center justify-between z-50">
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
            {Links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.url}
                  className="text-[1.1rem] text-gray-700 hover:text-orange-500 font-medium ease-out duration-700"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <PrimaryButton>
          Book Now <Send />
        </PrimaryButton>
      </nav>
      {/* For Small Devices */}
      {/* <div className="w-full h-auto bottom-6 fixed z-10 flex items-center justify-center">
        <nav className="w-[75%] h-auto bg-gray-100 shadow-md border-2 border-200  py-4 px-20 flex items-center justify-between z-10 rounded-full">
          This is Nav Section for small devices.
        </nav>
      </div> */}
    </>
  );
};

export default Header;
