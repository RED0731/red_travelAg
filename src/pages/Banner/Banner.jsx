import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="w-full h-auto">
        <div className="py-20"></div>
        <div className="w-full h-auto bg-gray-950 py-16 px-20 relative">
          <div className="w-full h-auto -mt-60 p-2 bg-white rounded-2xl shadow-md shadow-gray-800 relative">
            <img
              src="https://cdn.pixabay.com/photo/2021/08/14/04/15/mountains-6544522_1280.jpg"
              alt=""
              className="w-full h-[60vh] object-cover object-center rounded-lg brightness-50"
            />
            <Link
              to="#view-our-story"
              className="w-[70px] h-[70px] bg-orange-500 rounded-full absolute m-auto left-0 right-0 top-0 bottom-0"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-100">
                {" "}
                {/*animate-[wiggle_2s_ease-in-out_infinite] */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="currentColor"
                  class="bi bi-play"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                </svg>
              </div>
            </Link>
          </div>
          <div className="w-full bg-gray-600 h-auto flex items-center justify-between gap-10 py-20">
            <div className="p-8 bg-orange-700 rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
