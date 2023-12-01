import React from "react";
import AboutImg from "../../assets/About/about.png";
import PrimaryButton from "../../components/Button/PrimaryButton";

const About = () => {
  return (
    <>
      <div className="w-full h-auto py-10 lg:px-20 md:px-16 sm:px-8 px-4 bg-gray-200/30 flex items-center justify-between gap-8 flex-wrap">
        <div className="lg:w-[45%] md:w-full sm:w-full w-full h-[75vh] flex">
          <img
            src={AboutImg}
            alt="About Img"
            className="w-full h-full object-fill drop-shadow-md object-center"
          />
        </div>
        <div className="lg:w-[45%] md:w-full sm:w-full w-full h-auto">
          <div className="lg:text-start md:text-center sm:text-center text-center flex items-center justify-center flex-col mb-4">
            <div className="satisfy-font text-2xl font-medium text-orange-500 lg:text-start md:text-center sm:text-center text-center">
              Explore with us
            </div>
            <h1 className="lg:text-[2.5rem] md:text-[2.2rem] sm:text-[2rem] text-[1.8rem] text-gray-900 lg:text-start md:text-center sm:text-center text-center font-black">
              Enjoy Your Travel
            </h1>
          </div>
          <div className="text-start mb-5">
            <p className="text-gray-400 text-[1.1rem] font-normal mb-4">
              Embrace a worry-free travel experience with us as we strive to
              make your journey more enjoyable. From seamless itineraries to
              handpicked accommodations, we take care of every detail, leaving
              you free to savor every moment and create unforgettable memories.
            </p>
            <div className="flex w-full items-start justify-start text-start gap-x-3 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-circle-fill text-orange-500"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              <p className="text-gray-500 lg:text-[1.1rem] md:text-[1.05rem] sm:text-[1rem] text-[1rem] font-normal">
                Dedicated 24/7 support team ready to assist you at any moment.
              </p>
            </div>
            <div className="flex items-start justify-start text-start gap-x-3 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-circle-fill text-orange-500"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              <p className="text-gray-500 lg:text-[1.1rem] md:text-[1.05rem] sm:text-[1rem] text-[1rem] font-normal">
                Hand picked premium Accommodations that guarantee comfort and
                relaxation.
              </p>
            </div>
            <div className="flex items-start justify-start text-start gap-x-3 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-circle-fill text-orange-500"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              <p className="text-gray-500 lg:text-[1.1rem] md:text-[1.05rem] sm:text-[1rem] text-[1.05rem] font-normal">
                Award winning tour & travel arranger
              </p>
            </div>
          </div>
          <PrimaryButton className="py-2">
            Contact us{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default About;
