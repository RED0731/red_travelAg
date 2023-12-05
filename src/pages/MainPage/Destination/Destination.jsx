import React from "react";
import Tag from "../../../components/Tag/Tag";
import Viewmore from "../../../components/Viewmore/Viewmore";

const Destination = () => {
  return (
    <>
      <div className="w-full h-auto py-16 lg:px-20 md:px-16 sm:px-8 px-4">
        <Tag tagSlog="Popular Destinations" tagTitle="Top Travel Destinations" />
        <div className="w-full h-auto flex items-center justify-between lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap mb-10 gap-7">
          <div className="lg:w-[30%] md:w-[] sm:w-full w-full h-[50vh] rounded-xl overflow-hidden relative">
            <img
              src="https://cdn.pixabay.com/photo/2015/08/26/17/46/nepal-908837_1280.jpg"
              alt="Nepal"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <p className="text-gray-400 text-base font-normal">
                130,325 travellers
              </p>
              <h1 className="text-gray-50 text-2xl font-bold">Nepal</h1>
            </div>
          </div>
          <div className="lg:w-[20%] md:w-[] sm:w-full w-full h-[50vh] rounded-xl overflow-hidden relative">
            <img
              src="https://cdn.pixabay.com/photo/2019/07/21/16/29/paris-4353082_1280.jpg"
              alt="Paris"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <p className="text-gray-400 text-base font-normal">
                130,325 travellers
              </p>
              <h1 className="text-gray-50 text-2xl font-bold">Paris</h1>
            </div>
          </div>
          <div className="lg:w-[25%] md:w-[] sm:w-full w-full lg:h-[50vh] md:h-[50vh] sm:h-[30vh] h-[30vh] flex items-center lg:flex-col md:flex-col sm:flex-row flex-row lg:gap-y-7 md:gap-y-6 sm:gap-y-0 gap-y-0 lg:gap-x-0 md:gap-x-0 sm:gap-x-4 gap-x-5">
            <div className="lg:w-full md:w-full sm:w-1/2 w-1/2 lg:h-1/2 md:h-1/2 sm:h-full h-full rounded-xl overflow-hidden relative">
              <img
                src="https://cdn.pixabay.com/photo/2020/07/23/01/16/heritage-5430081_1280.jpg"
                alt="Japan"
                className="w-full h-full object-cover object-center"
              />
              <div className="w-full h-full absolute bottom-0 py-3 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
                <p className="text-gray-400 text-base font-normal">
                  130,325 travellers
                </p>
                <h1 className="text-gray-50 text-2xl font-bold">Japan</h1>
              </div>
            </div>
            <div className="lg:w-full md:w-full sm:w-1/2 w-1/2 lg:h-1/2 md:h-1/2 sm:h-full h-full rounded-xl overflow-hidden relative">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/15/03/buildings-1839726_1280.jpg"
                alt="Dubai"
                className="w-full h-full object-cover object-center"
              />
              <div className="w-full h-full absolute bottom-0 py-3 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
                <p className="text-gray-400 text-base font-normal">
                  130,325 travellers
                </p>
                <h1 className="text-gray-50 text-2xl font-bold">Dubai</h1>
              </div>
            </div>
          </div>
          <div className="lg:w-[25%] md:w-[] sm:w-full w-full h-[50vh] rounded-xl overflow-hidden relative">
            <img
              src="https://cdn.pixabay.com/photo/2019/03/16/11/27/pune-4058851_1280.jpg"
              alt="India"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <p className="text-gray-400 text-base font-normal">
                130,325 travellers
              </p>
              <h1 className="text-gray-50 text-2xl font-bold">India</h1>
            </div>
          </div>
        </div>
        <Viewmore />
      </div>
    </>
  );
};

export default Destination;
