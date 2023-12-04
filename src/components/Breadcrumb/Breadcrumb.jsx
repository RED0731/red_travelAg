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
        <div className="absolute top-0 left-0 bg-black/70 w-full h-full backdrop-blur-[1px]"></div>
      </div>
      {/* <h1 className="text-2xl text-orange-500">Breadcrumb</h1>
        <p className="text-gray-500">
          {" "}
          Breadcrumb grabs you to the current page
        </p> */}
    </>
  );
};

export default Breadcrumb;
