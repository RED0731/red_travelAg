import React from "react";
import "./Destination.css";
import SecondaryButton from "../../components/Button/SecondaryButton";

const Destination = () => {
  return (
    <>
      <div className="w-full h-auto py-16 px-20">
        <div className="text-center mb-10">
          <div className="satisfy-font text-2xl font-medium text-orange-500 text-center">
            Popular Destinations
          </div>
          <h1 className="text-[2.5rem] text-gray-900 text-center font-black">
            Top Travel Destinations
          </h1>
        </div>
        <div className="w-full h-auto flex items-center justify-between mb-10 gap-7">
          <div className="w-[30%] h-[50vh] rounded-xl overflow-hidden relative">
            <img
              src="https://cdn.pixabay.com/photo/2015/08/26/17/46/nepal-908837_1280.jpg"
              alt="Nepal"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 destination_data flex items-center justify-end flex-col gap-y-1">
              <p className="text-gray-400 text-base font-normal">
                130,325 travellers
              </p>
              <h1 className="text-gray-50 text-2xl font-bold">Nepal</h1>
            </div>
          </div>
          <div className="w-[20%] h-[50vh] rounded-xl overflow-hidden relative">
            <img
              src="https://cdn.pixabay.com/photo/2019/07/21/16/29/paris-4353082_1280.jpg"
              alt="Paris"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 destination_data flex items-center justify-end flex-col gap-y-1">
              <p className="text-gray-400 text-base font-normal">
                130,325 travellers
              </p>
              <h1 className="text-gray-50 text-2xl font-bold">Paris</h1>
            </div>
          </div>
          <div className="w-[25%] h-[50vh] flex items-center flex-col gap-y-7">
            <div className="w-full h-1/2 rounded-xl overflow-hidden relative">
              <img
                src="https://cdn.pixabay.com/photo/2020/07/23/01/16/heritage-5430081_1280.jpg"
                alt="Japan"
                className="w-full h-full object-cover object-center"
              />
              <div className="w-full h-full absolute bottom-0 py-3 destination_data flex items-center justify-end flex-col gap-y-1">
                <p className="text-gray-400 text-base font-normal">
                  130,325 travellers
                </p>
                <h1 className="text-gray-50 text-2xl font-bold">Japan</h1>
              </div>
            </div>
            <div className="w-full h-1/2 rounded-xl overflow-hidden relative">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/15/03/buildings-1839726_1280.jpg"
                alt="Dubai"
                className="w-full h-full object-cover object-center"
              />
              <div className="w-full h-full absolute bottom-0 py-3 destination_data flex items-center justify-end flex-col gap-y-1">
                <p className="text-gray-400 text-base font-normal">
                  130,325 travellers
                </p>
                <h1 className="text-gray-50 text-2xl font-bold">Dubai</h1>
              </div>
            </div>
          </div>
          <div className="w-[25%] h-[50vh] rounded-xl overflow-hidden relative">
            <img
              src="https://cdn.pixabay.com/photo/2019/03/16/11/27/pune-4058851_1280.jpg"
              alt="India"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 destination_data flex items-center justify-end flex-col gap-y-1">
              <p className="text-gray-400 text-base font-normal">
                130,325 travellers
              </p>
              <h1 className="text-gray-50 text-2xl font-bold">India</h1>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex items-center justify-center">
          <SecondaryButton>
            View more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </SecondaryButton>
        </div>
      </div>
    </>
  );
};

export default Destination;
