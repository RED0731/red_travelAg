import React from "react";

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
        <div className="w-full h-auto flex items-center justify-between gap-7">
          <div className="w-[35%] h-[50vh] rounded-md overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2015/08/26/17/46/nepal-908837_1280.jpg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-[20%] h-[50vh] rounded-md overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2015/08/26/17/46/nepal-908837_1280.jpg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-[20%] h-[50vh] flex items-center flex-col gap-y-7">
            <img
              src="https://cdn.pixabay.com/photo/2015/08/26/17/46/nepal-908837_1280.jpg"
              alt=""
              className="w-full h-1/2 object-cover object-center rounded-md"
            />
            <img
              src="https://cdn.pixabay.com/photo/2015/08/26/17/46/nepal-908837_1280.jpg"
              alt=""
              className="w-full h-1/2 object-cover object-center rounded-md"
            />
          </div>
          <div className="w-[25%] h-[50vh] rounded-md overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2015/08/26/17/46/nepal-908837_1280.jpg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
