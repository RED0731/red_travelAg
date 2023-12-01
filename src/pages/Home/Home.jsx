import React, { useState, useEffect, useRef } from "react";
import HeroImg from "../../assets/Hero/hero.png";
import Typed from "typed.js";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { Search } from "react-bootstrap-icons";
import Datepicker from "react-tailwindcss-datepicker";

const Home = () => {
  const travel_slogan = useRef(null);

  useEffect(() => {
    const typed = new Typed(travel_slogan.current, {
      strings: ["Adventure", "Mountains", "Treeking"],
      typeSpeed: 200,
      blackSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  //   DateRangePicker Library
  const [value, setValue] = useState({
    // startDate: new Date(),
    // endDate: new Date().setMonth(11),
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <>
      <div className="w-full lg:h-screen md:h-auto sm:h-auto h-auto flex items-center justify-center lg:px-20 md:px-16 sm:px-8 px-4 gap-8">
        <div className="w-full h-full flex items-center justify-between lg:mt-10 md:mt-12 sm:mt-14 mt-14 flex-wrap">
          <div className="lg:w-1/2 md:w-full sm:w-full w-full h-auto">
            <div className="text-orange-600 text-[1.5rem] satisfy-font flex items-center gap-3">
              Pack your luggage!{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-luggage text-orange-700"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a.5.5 0 0 0-.5.5V5h-.5A1.5 1.5 0 0 0 0 6.5v7a1.5 1.5 0 0 0 1 1.415v.335a.75.75 0 0 0 1.5 0V15H4v-1H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V7h1v-.5A1.5 1.5 0 0 0 6.5 5H6V1.5a.5.5 0 0 0-.5-.5h-3ZM5 5H3V2h2v3Z" />
                <path d="M3 7.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5ZM11 6a1.5 1.5 0 0 1 1.5 1.5V8h2A1.5 1.5 0 0 1 16 9.5v5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 14.5v-5A1.5 1.5 0 0 1 6.5 8h2v-.5A1.5 1.5 0 0 1 10 6h1ZM9.5 7.5V8h2v-.5A.5.5 0 0 0 11 7h-1a.5.5 0 0 0-.5.5ZM6 9.5v5a.5.5 0 0 0 .5.5H7V9h-.5a.5.5 0 0 0-.5.5Zm7 5.5V9H8v6h5Zm1.5 0a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H14v6h.5Z" />
              </svg>
            </div>
            <h1 className="text-gray-900 lg:text-6xl md:text-6xl sm:text-5xl text-4xl lg:leading-[5rem] md:leading-[5rem] sm:leading-[4rem] leading-[4rem] font-black">
              Discover your next <br />
              <span
                className="lg:text-9xl md:text-8xl sm:text-7xl text-7xl my-3 text-orange-500"
                ref={travel_slogan}
              />{" "}
              <br />
              with Travel.Ag
            </h1>
            <p className="text-gray-500 text-xl font-normal mb-7">
              Embrace the journey; Travel with passion and purpose.
            </p>
            <div className="w-full h-auto bg-[#ffffff] border border-gray-300 shadow-md flex items-center lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap gap-1 p-6 rounded-md">
              <input
                type="text"
                name="price"
                id="price"
                className="w-full rounded border-2 border-gray-300 py-2 px-3 outline-none text-base font-medium text-gray-700 placeholder:text-gray-500 placeholder:text-base focus:border-2 focus:border-orange-600 sm:text-sm sm:leading-6"
                placeholder="Where to go?"
              />
              <div className="w-full border-0 lg:py-2 md:py-2 sm:py-4 py-4 lg:px-3 md:px-3 sm:px-0 px-0 outline-none text-base font-medium text-gray-700 placeholder:text-gray-500 placeholder:text-base focus:border-2 focus:border-orange-600 sm:text-sm sm:leading-6 rounded">
                <Datepicker
                  inputClassName="w-full cursor-pointer border-2 border-gray-300 py-2 px-3 outline-none text-base font-medium text-gray-700 placeholder:text-gray-500 placeholder:text-base focus:border-2 focus:border-orange-600 sm:text-sm sm:leading-6 rounded"
                  primaryColor={"orange"}
                  placeholder={"Check in — Check out"}
                  separator={" — "}
                  useRange={true}
                  value={value}
                  onChange={handleValueChange}
                />
              </div>
              <PrimaryButton>
                Search <Search></Search>
              </PrimaryButton>
            </div>
          </div>
          <div className="w-[45%] h-[75vh]">
            <img
              src={HeroImg}
              alt="Hero Travel Img"
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
