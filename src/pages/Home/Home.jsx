import React from "react";
import HeroImg from "../../assets/Hero/hero.png";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-between py-24 px-20 gap-8">
        <div className="w-[40%] h-auto rounded-md">
          <div className="text-orange-700 text-[1.5rem] mb-4 satisfy-font flex items-center gap-3">
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
          <h1 className="text-gray-900 text-4xl leading-24 font-black mb-2">
            Discover your next{" "} <br />
            <span className="text-5xl my-3">Adventure</span>{" "} <br />
            with us
          </h1>
          <p className="text-gray-500 text-xl font-normal">
            Embrace the journey; Travel with passion and purpose.
          </p>
        </div>
        <div className="w-[45%] h-[75vh] rounded-md p-5">
          <img
            src={HeroImg}
            alt="Hero Travel Img"
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
