import React from "react";
import Nepal from "../../assets/Packages/nepal.jpg";
import NepalFlag from "../../assets/Packages/nepal.png";
import Canada from "../../assets/Packages/canada.jpg";
import CanadaFlag from "../../assets/Packages/canada.png";
import Uk from "../../assets/Packages/uk.jpg";
import UkFlag from "../../assets/Packages/uk.png";
import India from "../../assets/Packages/india.jpg";
import IndiaFlag from "../../assets/Packages/india.png";
import Viewmore from "../../components/Viewmore/Viewmore";
import Tag from "../../components/Tag/Tag";

const Packages = () => {
  return (
    <>
      <div className="w-full h-auto py-16 px-20">
        <Tag tagTitle="Explore Travel Packages" tagSlog="Most Popular Package" />
        <div className="w-full h-auto flex items-center justify-center mb-10 gap-5">
          <div className="w-[25%] h-auto bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden hover:-translate-y-5 ease-out duration-700">
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
                  src={NepalFlag}
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
                      class="bi bi-star-fill mb-0.5"
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
                    class="bi bi-clock-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  </svg>{" "}
                  10 days
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-300 my-5"></div>
              <div className="w-full h-auto flex items-center gap-3 mb-3">
                <div className="bg-purple-400/30 text-gray-900 py-0.5 px-2 text-[0.75rem] rounded-full">
                  City tour
                </div>
                <div className="bg-purple-400/30 text-gray-900 py-0.5 px-2 text-[0.75rem] rounded-full">
                  Adventure
                </div>
                <div className="bg-purple-400/30 text-gray-900 py-0.5 px-2 text-[0.75rem] rounded-full">
                  Camping
                </div>
                <div className="bg-purple-400/30 text-gray-900 py-0.5 px-2 text-[0.75rem] rounded-full">
                  Hiking
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25%] h-auto bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden hover:-translate-y-5 ease-out duration-700">
            <div className="w-full h-auto relative mb-6">
              <div className="w-full h-[30vh] overflow-hidden">
                <img
                  src={Canada}
                  alt=""
                  className="w-full h-full object-cover object-center hover:scale-150 hover:rotate-[20deg] ease-out duration-700"
                />
              </div>
              <div className="absolute -bottom-7 left-4 bg-white p-1 rounded-full">
                <img
                  src={CanadaFlag}
                  alt=""
                  className="w-[50px] h-[50px] object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-3 right-4 bg-orange-500 text-[0.75rem] font-medium text-gray-900 py-0.5 px-2 rounded-md">
                From{" "}
                <span className="text-[0.9rem] font-semibold">$130.23</span>
              </div>
            </div>
            <div className="w-full h-auto p-4">
              <h1 className="text-gray-900 text-[1.35rem] font-bold mb-4">
                The Beauty Canada Cities
              </h1>
              <div className="w-full h-auto flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <div className="bg-orange-400 text-[0.7rem] text-gray-900 py-1 px-1.5 rounded flex items-center justify-center gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      class="bi bi-star-fill mb-0.5"
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
                    class="bi bi-clock-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  </svg>{" "}
                  10 days
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-300 my-5"></div>
              <div className="w-full h-auto flex items-center gap-3 mb-3">
                <div className="bg-purple-400/30 text-gray-900 py-0.5 px-2 text-[0.75rem] rounded-full">
                  City tour
                </div>
                <div className="bg-purple-400/30 text-gray-900 py-0.5 px-2 text-[0.75rem] rounded-full">
                  Adventure
                </div>
                <div className="bg-purple-400/30 text-gray-900 py-0.5 px-2 text-[0.75rem] rounded-full">
                  Camping
                </div>
                <div className="bg-purple-400/30 text-gray-900 py-0.5 px-2 text-[0.75rem] rounded-full">
                  Hiking
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25%] h-auto bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden hover:-translate-y-5 ease-out duration-700">
            <div className="w-full h-auto relative mb-6">
              <div className="w-full h-[30vh] overflow-hidden">
                <img
                  src={Uk}
                  alt=""
                  className="w-full h-full object-cover object-center hover:scale-150 hover:rotate-[20deg] ease-out duration-700"
                />
              </div>
              <div className="absolute -bottom-7 left-4 bg-white p-1 rounded-full">
                <img
                  src={UkFlag}
                  alt=""
                  className="w-[50px] h-[50px] object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-3 right-4 bg-orange-500 text-[0.75rem] font-medium text-gray-900 py-0.5 px-2 rounded-md">
                From{" "}
                <span className="text-[0.9rem] font-semibold">$135.23</span>
              </div>
            </div>
            <div className="w-full h-auto p-4">
              <h1 className="text-gray-900 text-[1.35rem] font-bold mb-4">
                The Beauty UK Bridge
              </h1>
              <div className="w-full h-auto flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <div className="bg-orange-400 text-[0.7rem] text-gray-900 py-1 px-1.5 rounded flex items-center justify-center gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      class="bi bi-star-fill mb-0.5"
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
                    class="bi bi-clock-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  </svg>{" "}
                  10 days
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-300 my-5"></div>
              <div className="w-full h-auto flex items-center gap-3 mb-3">
                <div className="bg-purple-400/30 text-gray-900 py-0.5 px-2 text-[0.75rem] rounded-full">
                  City tour
                </div>
                <div className="bg-purple-400/30 text-gray-900 py-0.5 px-2 text-[0.75rem] rounded-full">
                  Adventure
                </div>
                <div className="bg-purple-400/30 text-gray-900 py-0.5 px-2 text-[0.75rem] rounded-full">
                  Camping
                </div>
                <div className="bg-purple-400/30 text-gray-900 py-0.5 px-2 text-[0.75rem] rounded-full">
                  Hiking
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25%] h-auto bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden hover:-translate-y-5 ease-out duration-700">
            <div className="w-full h-auto relative mb-6">
              <div className="w-full h-[30vh] overflow-hidden">
                <img
                  src={India}
                  alt=""
                  className="w-full h-full object-cover object-center hover:scale-150 hover:rotate-[20deg] ease-out duration-700"
                />
              </div>
              <div className="absolute -bottom-7 left-4 bg-white p-1 rounded-full">
                <img
                  src={IndiaFlag}
                  alt=""
                  className="w-[50px] h-[50px] object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-3 right-4 bg-orange-500 text-[0.75rem] font-medium text-gray-900 py-0.5 px-2 rounded-md">
                From{" "}
                <span className="text-[0.9rem] font-semibold">$126.23</span>
              </div>
            </div>
            <div className="w-full h-auto p-4">
              <h1 className="text-gray-900 text-[1.35rem] font-bold mb-4">
                The Beauty India Taj Mahal
              </h1>
              <div className="w-full h-auto flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <div className="bg-orange-400 text-[0.7rem] text-gray-900 py-1 px-1.5 rounded flex items-center justify-center gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      class="bi bi-star-fill mb-0.5"
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
                    class="bi bi-clock-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  </svg>{" "}
                  10 days
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-300 my-5"></div>
              <div className="w-full h-auto flex items-center gap-3 mb-3">
                <div className="bg-purple-400/30 text-gray-900 py-0.5 px-2 text-[0.75rem] rounded-full">
                  City tour
                </div>
                <div className="bg-purple-400/30 text-gray-900 py-0.5 px-2 text-[0.75rem] rounded-full">
                  Adventure
                </div>
                <div className="bg-purple-400/30 text-gray-900 py-0.5 px-2 text-[0.75rem] rounded-full">
                  Camping
                </div>
                <div className="bg-purple-400/30 text-gray-900 py-0.5 px-2 text-[0.75rem] rounded-full">
                  Hiking
                </div>
              </div>
            </div>
          </div>
        </div>
        <Viewmore />
      </div>
    </>
  );
};

export default Packages;
