import React from "react";
import TravelAg from "../../assets/Breadcrumb/travelag.mp4";

const Breadcrumb = () => {
  return (
    <>
      <div className="relative w-full h-full border-2">
        <video
          typeof="video/mp4"
          muted={true}
          autoPlay={true}
          loop={true}
          playsInline={true}
          className="object-fill w-full aspect-video h-full object-center"
        >
          <source src={TravelAg} />
        </video>
        <div className="absolute top-0 left-0 bg-black/60 w-full h-full backdrop-blur-[1px]"></div>
      </div>
      <div className="absolute top-32 left-10 translate-y-[95%] z-10 lg:px-20 md:px-16 sm:px-8 px-4">
        <h1 className="text-4xl text-orange-500 font-black mb-0.5">Packages</h1>
        <p className="text-gray-500">
          {" "}
          Breadcrumb grabs you to the current page
        </p>
      </div>
    </>
  );
};

export default Breadcrumb;
