import React from "react";
import AboutImg from "../../assets/About/about.png";

const About = () => {
  return (
    <>
      <div className="w-full h-auto py-10 px-20 bg-gray-200/30 flex items-center justify-between gap-8">
        <div className="w-[45%] h-[75vh] flex">
          <img
            src={AboutImg}
            alt="About Img"
            className="w-full h-full object-fill drop-shadow-md object-center"
          />
        </div>
        <div className="w-[45%] h-auto">
          <div className="text-start mb-4">
            <div className="satisfy-font text-2xl font-medium text-orange-500 text-start">
              Explore with us
            </div>
            <h1 className="text-[2.5rem] text-gray-900 text-start font-black">
              Enjoy Your Travel
            </h1>
          </div>
          <div className="text-start">
            <p className="text-gray-400 text-[1.1rem] font-normal mb-4">
              Embrace a worry-free travel experience with us as we strive to
              make your journey more enjoyable. From seamless itineraries to
              handpicked accommodations, we take care of every detail, leaving
              you free to savor every moment and create unforgettable memories.
            </p>
            <div className="flex items-center justify-start text-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-arrow-right text-orange-500"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
