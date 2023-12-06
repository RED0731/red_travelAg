import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Nepal from "../../assets/Packages/nepal.jpg";
import NepalFlag from "../../assets/Packages/nepal.png";
import Canada from "../../assets/Packages/canada.jpg";
import CanadaFlag from "../../assets/Packages/canada.png";
import Uk from "../../assets/Packages/uk.jpg";
import UkFlag from "../../assets/Packages/uk.png";
import India from "../../assets/Packages/india.jpg";
import IndiaFlag from "../../assets/Packages/india.png";

const Packages = () => {
  // Packages
  const Package = [
    {
      _id: 0,
      imgUrl: Nepal,
      tourLogo: NepalFlag,
      price: "$125.23",
      title: "The Beauty Nepali Mountains",
      ratingCount: "4.8",
      review: "20 Reviews",
      tourDuration: "10 days",
      tourCategory: [
        {
          catName: "City tour",
        },
        {
          catName: "Adventure",
        },
        {
          catName: "Camping",
        },
        {
          catName: "Hiking",
        },
      ],
    },
    {
      _id: 1,
      imgUrl: Canada,
      tourLogo: CanadaFlag,
      price: "$130.23",
      title: "The Beauty Canada Cities",
      ratingCount: "4.8",
      review: "20 Reviews",
      tourDuration: "10 days",
      tourCategory: [
        {
          catName: "City tour",
        },
        {
          catName: "Adventure",
        },
        {
          catName: "Camping",
        },
        {
          catName: "Hiking",
        },
      ],
    },
    {
      _id: 2,
      imgUrl: Uk,
      tourLogo: UkFlag,
      price: "$135.23",
      title: "The Beauty UK Bridge",
      ratingCount: "4.8",
      review: "20 Reviews",
      tourDuration: "10 days",
      tourCategory: [
        {
          catName: "City tour",
        },
        {
          catName: "Adventure",
        },
        {
          catName: "Camping",
        },
        {
          catName: "Hiking",
        },
      ],
    },
    {
      _id: 3,
      imgUrl: India,
      tourLogo: IndiaFlag,
      price: "$126.23",
      title: "The Beauty India Taj Mahal",
      ratingCount: "4.8",
      review: "20 Reviews",
      tourDuration: "10 days",
      tourCategory: [
        {
          catName: "City tour",
        },
        {
          catName: "Adventure",
        },
        {
          catName: "Camping",
        },
        {
          catName: "Hiking",
        },
      ],
    },
    {
      _id: 4,
      imgUrl: Nepal,
      tourLogo: NepalFlag,
      price: "$125.23",
      title: "The Beauty Nepali Mountains",
      ratingCount: "4.8",
      review: "20 Reviews",
      tourDuration: "10 days",
      tourCategory: [
        {
          catName: "City tour",
        },
        {
          catName: "Adventure",
        },
        {
          catName: "Camping",
        },
        {
          catName: "Hiking",
        },
      ],
    },
    {
      _id: 5,
      imgUrl: Canada,
      tourLogo: CanadaFlag,
      price: "$130.23",
      title: "The Beauty Canada Cities",
      ratingCount: "4.8",
      review: "20 Reviews",
      tourDuration: "10 days",
      tourCategory: [
        {
          catName: "City tour",
        },
        {
          catName: "Adventure",
        },
        {
          catName: "Camping",
        },
        {
          catName: "Hiking",
        },
      ],
    },
    {
      _id: 6,
      imgUrl: Uk,
      tourLogo: UkFlag,
      price: "$135.23",
      title: "The Beauty UK Bridge",
      ratingCount: "4.8",
      review: "20 Reviews",
      tourDuration: "10 days",
      tourCategory: [
        {
          catName: "City tour",
        },
        {
          catName: "Adventure",
        },
        {
          catName: "Camping",
        },
        {
          catName: "Hiking",
        },
      ],
    },
    {
      _id: 7,
      imgUrl: India,
      tourLogo: IndiaFlag,
      price: "$126.23",
      title: "The Beauty India Taj Mahal",
      ratingCount: "4.8",
      review: "20 Reviews",
      tourDuration: "10 days",
      tourCategory: [
        {
          catName: "City tour",
        },
        {
          catName: "Adventure",
        },
        {
          catName: "Camping",
        },
        {
          catName: "Hiking",
        },
      ],
    },
  ];
  return (
    <>
      {/* py-24 lg:px-20 md:px-16 sm:px-8 px-4 */}
      <div className="w-full h-[40vh] mb-16 mt-16">
        <Breadcrumb title="Packages" breadcrumb="Home / Packages" />
      </div>
      <div className="w-full h-auto pb-16 lg:px-20 md:px-16 sm:px-8 px-4">
        <div className="w-full h-auto flex items-center justify-center flex-wrap gap-4">
          {Package.map((packag) => (
            <div
              key={packag._id}
              className="lg:w-[24%] md:w-[45%] sm:w-full w-full h-auto bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden hover:-translate-y-5 ease-out duration-700"
            >
              <div className="w-full h-auto relative mb-6">
                <div className="w-full h-[30vh] overflow-hidden">
                  <img
                    src={packag.imgUrl}
                    alt=""
                    className="w-full h-full object-cover object-center hover:scale-150 hover:rotate-[20deg] ease-out duration-700"
                  />
                </div>
                <div className="absolute -bottom-7 left-4 bg-white p-1 rounded-full">
                  <img
                    src={packag.tourLogo}
                    alt=""
                    className="w-[50px] h-[50px] object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-3 right-4 bg-orange-500 text-[0.75rem] font-medium text-gray-900 py-0.5 px-2 rounded-md">
                  From{" "}
                  <span className="text-[0.9rem] font-semibold">
                    {packag.price}
                  </span>
                </div>
              </div>
              <div className="w-full h-auto p-4">
                <h1 className="text-gray-900 text-[1.35rem] font-bold mb-4">
                  {packag.title}
                </h1>
                <div className="w-full h-auto flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    <div className="bg-orange-400 text-[0.7rem] text-gray-900 py-1 px-1.5 rounded flex items-center justify-center gap-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        className="bi bi-star-fill mb-0.5"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>{" "}
                      {packag.ratingCount}
                    </div>
                    <h6 className="text-gray-600 text-[0.8rem] font-normal">
                      {packag.review}
                    </h6>
                  </div>
                  <div className="text-[0.9rem] text-gray-600 font-normal flex items-center gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-clock-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    </svg>{" "}
                    {packag.tourDuration}
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-300 my-5"></div>
                <div className="w-full h-auto flex items-center gap-3 mb-3">
                  {packag.tourCategory.map((category, index) => (
                    <div
                      key={index}
                      className="bg-purple-400/30 text-gray-900 py-0.5 px-2 text-[0.75rem] rounded-full"
                    >
                      {category.catName}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-auto py-10 flex items-center gap-x-2">
          {/* <div className="w-[40px] h-[40px] bg-white border border-gray-400/80 shadow rounded-md flex items-center justify-center text-base text-gray-950 font-semibold cursor-pointer hover:bg-orange-500 ease-out duration-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="text-gray-950"
            >
              <path d="M0 12l9-8v6h12v4h-12v6z" />
            </svg>
          </div> */}
          <div className="w-[40px] h-[40px] bg-orange-500 border border-orange-500 rounded-md flex items-center justify-center text-base text-gray-950 font-semibold cursor-pointer">
            1
          </div>
          <div className="w-[40px] h-[40px] bg-white border border-gray-400/80 shadow rounded-md flex items-center justify-center text-base text-gray-950 font-semibold cursor-pointer hover:bg-orange-500 ease-out duration-700">
            2
          </div>
          <div className="w-[40px] h-[40px] bg-white border border-gray-400/80 shadow rounded-md flex items-center justify-center text-base text-gray-950 font-semibold cursor-pointer hover:bg-orange-500 ease-out duration-700">
            3
          </div>
          <div className="w-[40px] h-[40px] bg-white border border-gray-400/80 shadow rounded-md lg:flex md:flex sm:flex hidden items-center justify-center text-base text-gray-950 font-semibold cursor-pointer hover:bg-orange-500 ease-out duration-700">
            4
          </div>
          <div className="w-[40px] h-[40px] bg-white border border-gray-400/60 rounded-md lg:flex md:flex sm:flex hidden items-center justify-center gap-x-1 text-base text-gray-950 font-semibold cursor-pointer">
            <div className="w-1 h-1 bg-gray-950 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-950 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-950 rounded-full"></div>
          </div>
          <div className="w-[40px] h-[40px]  bg-white border border-gray-400/80 shadow rounded-md flex items-center justify-center text-base text-gray-950 font-semibold cursor-pointer hover:bg-orange-500 ease-out duration-700">
            10
          </div>
          <div className="w-[40px] h-[40px]  bg-white border border-gray-400/80 shadow rounded-md flex items-center justify-center text-base text-gray-950 font-semibold cursor-pointer hover:bg-orange-500 ease-out duration-700">
            11
          </div>
          <div className="w-[40px] h-[40px]  bg-white border border-gray-400/80 shadow rounded-md flex items-center justify-center text-base text-gray-950 font-semibold cursor-pointer hover:bg-orange-500 ease-out duration-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="text-gray-950"
            >
              <path d="M24 12l-9-8v6h-12v4h12v6z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
