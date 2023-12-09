import React from "react";
import Nepal from "../../assets/Packages/nepal.jpg";
import NepalLogo from "../../assets/Packages/nepal.png";

const TourDetail = () => {
  const TourCategory = [
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
  ];
  return (
    <>
      <div className="w-full h-auto">
        <div className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/14/04/36/boy-1822614_1280.jpg"
            alt=""
            className="w-full h-[55vh] object-cover object-center linearGradientToBottom"
          />
          <div className="absolute bottom-10 lg:left-20 md:left-16 sm:left-8 left-4">
            <h1 className="text-5xl text-gray-200 font-black mb-1">
              Explore Nepal
            </h1>
            <div className="w-full h-auto py-1 flex items-center justify-start">
              <p className="text-gray-400 text-[1.15rem] font-normal">
                130 Tours
              </p>
              <span className="px-2 text-[1.15rem] text-gray-400">|</span>
              <p className="text-gray-400 text-[1.15rem] font-normal">
                05 Hotels
              </p>
              <span className="px-2 text-[1.15rem] text-gray-400">|</span>
              <p className="text-gray-400 text-[1.15rem] font-normal">
                30+ Vehicles
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-auto py-16 lg:px-20 md:px-16 sm:px-8 px-4">
          <div className="w-full h-auto flex items-start justify-between gap-7 flex-wrap">
            <div className="w-[65%] h-auto">
              <h1 className="text-2xl text-gray-600 font-bold mb-4">
                Tour details
              </h1>
              <p className="text-gray-600 text-base font-normal mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                adipisci labore voluptas, corporis officiis, odit voluptatibus
                cum ducimus eaque reiciendis tempora dolorum quibusdam id
                deleniti vel incidunt dicta asperiores, vero mollitia dolorem!
                Labore amet dignissimos excepturi natus facilis minus quis hic
                ducimus debitis. Eius at, voluptatum repellat similique
                molestias possimus. Assumenda vitae mollitia aliquam, unde nobis
                deserunt fuga enim beatae itaque reiciendis porro optio atque
                perspiciatis fugit eius nam facere, ea at ducimus minima
                explicabo. Beatae soluta harum autem laboriosam quidem, sed
                labore eum accusamus modi, officia similique veritatis nisi
                facilis consequuntur quibusdam provident repellat quas neque
                exercitationem tempora quo?
              </p>
            </div>
            <div className="lg:w-[28%] md:w-[28%] sm:w-full w-full h-auto">
              <h1 className="text-2xl text-gray-600 font-bold mb-4">
                Popular tour package
              </h1>
              <div className="w-full h-auto bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden hover:-translate-y-5 ease-out duration-700">
                <div className="w-full h-auto relative mb-6">
                  <div className="w-full h-[30vh] overflow-hidden">
                    <img
                      src={Nepal}
                      alt=""
                      className="w-full h-full object-cover object-center hover:scale-150 hover:rotate-[20deg] ease-out duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-7 left-4 bg-white p-1 rounded-full">
                    <img
                      src={NepalLogo}
                      alt=""
                      className="w-[50px] h-[50px] object-cover object-center"
                    />
                  </div>
                  <div className="absolute -bottom-3 right-4 bg-orange-500 text-[0.75rem] font-medium text-gray-900 py-0.5 px-2 rounded-md">
                    From{" "}
                    <span className="text-[0.9rem] font-semibold">$125.23</span>
                  </div>
                </div>
                <div className="w-full h-auto p-4">
                  <h1 className="text-gray-900 text-[1.35rem] font-bold mb-4">
                    The Beauty Nepali Mountains
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
                        4.8
                      </div>
                      <h6 className="text-gray-600 text-[0.8rem] font-normal">
                        20 Reviews
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
                      10 days
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-gray-300 my-5"></div>
                  <div className="w-full h-auto flex items-center gap-3 mb-3">
                    {TourCategory.map((category, index) => (
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourDetail;
