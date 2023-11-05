import React from "react";

const Banner = () => {
  return (
    <>
      <div className="w-full h-auto">
        <div className="py-20"></div>
        <div className="w-full h-auto bg-gray-950 py-16 px-20 relative">
          <div className="w-full h-auto -mt-60 p-2 bg-white rounded-2xl shadow-md shadow-gray-800 z-10 relative">
            <img
              src="https://cdn.pixabay.com/photo/2021/08/14/04/15/mountains-6544522_1280.jpg"
              alt=""
              className="w-full h-[60vh] object-cover object-center rounded-lg"
            />
            <div className="w-[70px] h-[70px] bg-orange-500 rounded-full absolute m-auto left-0 right-0 top-0 bottom-0 flex items-center justify-center">
              <div className="w-full h-full animate-ping flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-play"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="py-48">h</div>
        </div>
        <div className="py-20"></div>
      </div>
    </>
  );
};

export default Banner;
