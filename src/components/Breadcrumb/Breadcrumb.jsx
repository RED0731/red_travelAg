import React from "react";
import TravelAg from "../../assets/Breadcrumb/travelag.gif";

const Breadcrumb = () => {
  return (
    <>
      <div className="w-full h-auto">
        <video
          type="video/mp4"
          autoplay
          loop
          muted
          plays-inline
          class="carousel_video"
        >
          <source src="../img/bg_video.mp4" />
        </video>
        <h1 className="text-2xl text-orange-500">Breadcrumb</h1>
        <p className="text-gray-500">
          {" "}
          Breadcrumb grabs you to the current page
        </p>
      </div>
    </>
  );
};

export default Breadcrumb;
