import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PrimaryButtton from "../../components/Button/PrimaryButton";

const Tours = () => {
  return (
    <>
      <div className="w-full h-[40vh] mb-14 mt-16">
        <Breadcrumb title="Tours" breadcrumb="Home / Tours" />
      </div>
      <div className="w-full h-auto mb-16 lg:px-20 md:px-16 sm:px-8 px-4">
        <div className="w-full h-auto mb-8 p-6 bg-white rounded-xl flex items-center justify-between border border-gray-200 shadow gap-5">
          <div className="w-[30%] h-auto flex items-center gap-1">
            <input
              type="text"
              placeholder="Search tours..."
              className="bg-gray-100 border-2 text-gray-950 rounded-md text-[1rem] font-medium outline-none w-full h-[40px] p-4 focus:outline-none focus:bg-gray-100/80 focus:border-orange-500 ease-out duration-700"
            />
            <PrimaryButtton children="Search" />
          </div>
          <div className="w-[40%] h-auto bg-orange-500 rounded-xl">This is the section.</div>
        </div>
        <div className="w-full h-auto flex items-center gap-9 flex-wrap">
          <div className="lg:w-[23%] md:w-[30%] sm:w-full w-full h-[50vh] rounded-xl overflow-hidden relative">
            <img
              src="https://cdn.pixabay.com/photo/2019/03/16/11/27/pune-4058851_1280.jpg"
              alt="Explore India"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <h1 className="text-gray-50 text-2xl font-bold">Explore India</h1>
              <div className="w-full h-auto py-1 flex items-center justify-center">
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  130 Tours
                </p>
                <span className="px-1.5 text-gray-400">|</span>
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  05 Hotels
                </p>
                <span className="px-1.5 text-gray-400">|</span>
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  30+ Vehicles
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[23%] md:w-[30%] sm:w-full w-full h-[50vh] rounded-xl overflow-hidden relative">
            <img
              src="https://cdn.pixabay.com/photo/2019/03/16/11/27/pune-4058851_1280.jpg"
              alt="Explore India"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <h1 className="text-gray-50 text-2xl font-bold">Explore India</h1>
              <div className="w-full h-auto py-1 flex items-center justify-center">
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  130 Tours
                </p>
                <span className="px-1.5 text-gray-400">|</span>
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  05 Hotels
                </p>
                <span className="px-1.5 text-gray-400">|</span>
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  30+ Vehicles
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[23%] md:w-[30%] sm:w-full w-full h-[50vh] rounded-xl overflow-hidden relative">
            <img
              src="https://cdn.pixabay.com/photo/2019/03/16/11/27/pune-4058851_1280.jpg"
              alt="Explore India"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <h1 className="text-gray-50 text-2xl font-bold">Explore India</h1>
              <div className="w-full h-auto py-1 flex items-center justify-center">
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  130 Tours
                </p>
                <span className="px-1.5 text-gray-400">|</span>
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  05 Hotels
                </p>
                <span className="px-1.5 text-gray-400">|</span>
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  30+ Vehicles
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[23%] md:w-[30%] sm:w-full w-full h-[50vh] rounded-xl overflow-hidden relative">
            <img
              src="https://cdn.pixabay.com/photo/2019/03/16/11/27/pune-4058851_1280.jpg"
              alt="Explore India"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <h1 className="text-gray-50 text-2xl font-bold">Explore India</h1>
              <div className="w-full h-auto py-1 flex items-center justify-center">
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  130 Tours
                </p>
                <span className="px-1.5 text-gray-400">|</span>
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  05 Hotels
                </p>
                <span className="px-1.5 text-gray-400">|</span>
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  30+ Vehicles
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[23%] md:w-[30%] sm:w-full w-full h-[50vh] rounded-xl overflow-hidden relative">
            <img
              src="https://cdn.pixabay.com/photo/2019/03/16/11/27/pune-4058851_1280.jpg"
              alt="Explore India"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <h1 className="text-gray-50 text-2xl font-bold">Explore India</h1>
              <div className="w-full h-auto py-1 flex items-center justify-center">
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  130 Tours
                </p>
                <span className="px-1.5 text-gray-400">|</span>
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  05 Hotels
                </p>
                <span className="px-1.5 text-gray-400">|</span>
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  30+ Vehicles
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[23%] md:w-[30%] sm:w-full w-full h-[50vh] rounded-xl overflow-hidden relative">
            <img
              src="https://cdn.pixabay.com/photo/2019/03/16/11/27/pune-4058851_1280.jpg"
              alt="Explore India"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <h1 className="text-gray-50 text-2xl font-bold">Explore India</h1>
              <div className="w-full h-auto py-1 flex items-center justify-center">
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  130 Tours
                </p>
                <span className="px-1.5 text-gray-400">|</span>
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  05 Hotels
                </p>
                <span className="px-1.5 text-gray-400">|</span>
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  30+ Vehicles
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[23%] md:w-[30%] sm:w-full w-full h-[50vh] rounded-xl overflow-hidden relative">
            <img
              src="https://cdn.pixabay.com/photo/2019/03/16/11/27/pune-4058851_1280.jpg"
              alt="Explore India"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <h1 className="text-gray-50 text-2xl font-bold">Explore India</h1>
              <div className="w-full h-auto py-1 flex items-center justify-center">
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  130 Tours
                </p>
                <span className="px-1.5 text-gray-400">|</span>
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  05 Hotels
                </p>
                <span className="px-1.5 text-gray-400">|</span>
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  30+ Vehicles
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[23%] md:w-[30%] sm:w-full w-full h-[50vh] rounded-xl overflow-hidden relative">
            <img
              src="https://cdn.pixabay.com/photo/2019/03/16/11/27/pune-4058851_1280.jpg"
              alt="Explore India"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <h1 className="text-gray-50 text-2xl font-bold">Explore India</h1>
              <div className="w-full h-auto py-1 flex items-center justify-center">
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  130 Tours
                </p>
                <span className="px-1.5 text-gray-400">|</span>
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  05 Hotels
                </p>
                <span className="px-1.5 text-gray-400">|</span>
                <p className="text-gray-400 text-[0.85rem] font-normal">
                  30+ Vehicles
                </p>
              </div>
            </div>
          </div>
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

export default Tours;
