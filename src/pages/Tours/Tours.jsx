import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PrimaryButtton from "../../components/Button/PrimaryButton";
import { Link } from "react-router-dom";

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
          <div className="w-[45%] h-auto flex items-center justify-center font-normal text-base gap-x-1 text-gray-950">
            Showing results of <span className="font-semibold">1 - 8</span> of{" "}
            <span className="font-semibold">88</span> tours
          </div>
          <div className="w-[25%] h-auto">
            <select className="bg-gray-100 border-2 text-gray-950 rounded-md text-[1rem] font-medium outline-none w-full h-[40px] px-4 focus:outline-none focus:bg-gray-100/80 focus:border-orange-500 ease-out duration-700">
              <option value="sort" selected={true}>
                Sort By
              </option>
              <option value="alphabet">By Airplane</option>
              <option value="alphabet">Alphabet</option>
              <option value="alphabet">Alphabet</option>
              <option value="alphabet">Alphabet</option>
            </select>
          </div>
        </div>
        <div className="w-full h-auto flex items-center gap-9 flex-wrap">
          <div className="lg:w-[23%] md:w-[30%] sm:w-full w-full h-[50vh] rounded-xl overflow-hidden relative">
            <img
              src="https://cdn.pixabay.com/photo/2015/08/26/17/46/nepal-908837_1280.jpg"
              alt="Explore Nepal"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <Link
                to="/tours-detail"
                className="text-gray-50 text-2xl font-bold hover:text-orange-400 ease-out duration-700"
              >
                Explore Nepal
              </Link>
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
              src="https://cdn.pixabay.com/photo/2017/08/09/09/43/eiffel-tower-2613935_1280.jpg"
              alt="Explore Paris"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <Link
                to="/tours-detail"
                className="text-gray-50 text-2xl font-bold hover:text-orange-400 ease-out duration-700"
              >
                Explore Paris
              </Link>
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
              src="https://cdn.pixabay.com/photo/2021/10/07/19/25/india-6689615_1280.jpg"
              alt="Explore India"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <Link
                to="/tours-detail"
                className="text-gray-50 text-2xl font-bold hover:text-orange-400 ease-out duration-700"
              >
                Explore India
              </Link>
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
              src="https://cdn.pixabay.com/photo/2014/09/11/18/23/tower-bridge-441853_960_720.jpg"
              alt="Explore UK"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <Link
                to="/tours-detail"
                className="text-gray-50 text-2xl font-bold hover:text-orange-400 ease-out duration-700"
              >
                Explore UK
              </Link>
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
              src="https://cdn.pixabay.com/photo/2013/10/29/08/34/queen-of-liberty-202218_1280.jpg"
              alt="Explore USA"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <Link
                to="/tours-detail"
                className="text-gray-50 text-2xl font-bold hover:text-orange-400 ease-out duration-700"
              >
                Explore USA
              </Link>
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
              src="https://cdn.pixabay.com/photo/2018/11/04/06/21/canada-3793279_1280.jpg"
              alt="Explore Canada"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <Link
                to="/tours-detail"
                className="text-gray-50 text-2xl font-bold hover:text-orange-400 ease-out duration-700"
              >
                Explore Canada
              </Link>
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
              src="https://cdn.pixabay.com/photo/2019/12/06/05/46/alpine-village-4676673_1280.jpg"
              alt="Explore Switzerland"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <Link
                to="/tours-detail"
                className="text-gray-50 text-2xl font-bold hover:text-orange-400 ease-out duration-700"
              >
                Explore Switzerland
              </Link>
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
              src="https://cdn.pixabay.com/photo/2016/11/19/21/29/temple-1841296_1280.jpg"
              alt="Explore Japan"
              className="w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute bottom-0 py-5 linear_gradient_to_bottom flex items-center justify-end flex-col gap-y-1">
              <Link
                to="/tours-detail"
                className="text-gray-50 text-2xl font-bold hover:text-orange-400 ease-out duration-700"
              >
                Explore Japan
              </Link>
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
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left text-gray-950"
              viewBox="0 0 16 16"
            >
              <path
                // fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </div> */}
          <div className="w-[40px] h-[40px] bg-gray-300 border border-gray-300 rounded-full flex items-center justify-center text-base text-gray-950 font-normal cursor-pointer">
            1
          </div>
          <div className="w-[40px] h-[40px] border border-gray-400/80 shadow rounded-full flex items-center justify-center text-base text-gray-950 font-normal cursor-pointer hover:bg-gray-300 ease-out duration-700">
            2
          </div>
          <div className="w-[40px] h-[40px] border border-gray-400/80 shadow rounded-full flex items-center justify-center text-base text-gray-950 font-normal cursor-pointer hover:bg-gray-300 ease-out duration-700">
            3
          </div>
          <div className="w-[40px] h-[40px] border border-gray-400/80 shadow rounded-full lg:flex md:flex sm:flex hidden items-center justify-center text-base text-gray-950 font-normal cursor-pointer hover:bg-gray-300 ease-out duration-700">
            4
          </div>
          <div className="w-[40px] h-[40px] border border-gray-400/40 rounded-full lg:flex md:flex sm:flex hidden items-center justify-center gap-x-1 text-base text-gray-950 font-normal cursor-pointer">
            <div className="w-1 h-1 bg-gray-950 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-950 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-950 rounded-full"></div>
          </div>
          <div className="w-[40px] h-[40px] border border-gray-400/80 shadow rounded-full flex items-center justify-center text-base text-gray-950 font-normal cursor-pointer hover:bg-gray-300 ease-out duration-700">
            10
          </div>
          <div className="w-[40px] h-[40px] border border-gray-400/80 shadow rounded-full flex items-center justify-center text-base text-gray-950 font-normal cursor-pointer hover:bg-gray-300 ease-out duration-700">
            11
          </div>
          <div className="w-[40px] h-[40px] border border-gray-400/80 shadow rounded-full flex items-center justify-center text-base text-gray-950 font-normal cursor-pointer hover:bg-gray-300 ease-out duration-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right text-gray-950"
              viewBox="0 0 16 16"
            >
              <path
                // fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tours;
