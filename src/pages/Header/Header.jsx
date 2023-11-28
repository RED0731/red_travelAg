import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { Send } from "react-bootstrap-icons";

const Header = () => {
  // Nav Links
  const Links = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Packages", link: "/packages" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];
  return (
    <>
      <nav className="w-full h-auto bg-gray-100 shadow-md py-4 px-20 fixed top-0 flex items-center justify-between z-10">
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
            {Links.map((link) => (
              <li key={link.title}>
                <Link className="text-[1.1rem] text-gray-700 hover:text-orange-500 font-medium ease-out duration-700">
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
    </>
  );
};

export default Header;
