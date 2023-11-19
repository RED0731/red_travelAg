import React from "react";
import { Link } from "react-router-dom";
import SecondaryButton from "../../components/Button/SecondaryButton";

const Blog = () => {
  return (
    <>
      <div className="w-full h-auto py-16 px-20">
        <div className="text-center mb-10">
          <div className="satisfy-font text-2xl font-medium text-orange-500 text-center">
            Latest Blogs
          </div>
          <h1 className="text-[2.5rem] text-gray-900 text-center font-black">
            News & Blogs
          </h1>
        </div>
        <div className="w-full h-auto flex items-center justify-between mb-10 gap-x-6 gap-y-8 flex-wrap">
          <div className="w-[32%] h-auto bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl ease-out duration-700 cursor-pointer">
            <img
              src="https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_640.jpg"
              alt="Blog image"
              className="w-full h-[33vh] object-cover object-center"
            />
            <div className="w-full h-auto px-4 py-6">
              <div className="w-full h-auto text-[0.9rem] font-normal flex items-center gap-x-2 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-folder2 text-orange-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                </svg>
                <p className="text-gray-600">Mountain Trek</p>
              </div>
              <Link className="text-[1.35rem] text-gray-900 font-black capitalize block">
                Let's explore the mountains trek together
              </Link>
              <div className="w-full h-[0.8px] bg-gray-300 my-6"></div>
              <div className="w-full h-auto text-[0.88rem] font-medium flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-fill text-orange-500/90"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                  <p className="text-gray-500">Admin</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-calendar-range-fill text-orange-500/90"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 7V5H0v5h5a1 1 0 1 1 0 2H0v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9h-6a1 1 0 1 1 0-2h6z" />
                  </svg>
                  <p className="text-gray-500">
                    19<sup>th</sup> November, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[32%] h-auto bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl ease-out duration-700 cursor-pointer">
            <img
              src="https://cdn.pixabay.com/photo/2014/09/07/22/17/forest-438432_640.jpg"
              alt="Blog image"
              className="w-full h-[33vh] object-cover object-center"
            />
            <div className="w-full h-auto px-4 py-6">
              <div className="w-full h-auto text-[0.9rem] font-normal flex items-center gap-x-2 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-folder2 text-orange-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                </svg>
                <p className="text-gray-600">Mountain Trek</p>
              </div>
              <Link className="text-[1.35rem] text-gray-900 font-black capitalize block">
                Let's explore the mountains trek together
              </Link>
              <div className="w-full h-[0.8px] bg-gray-300 my-6"></div>
              <div className="w-full h-auto text-[0.88rem] font-medium flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-fill text-orange-500/90"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                  <p className="text-gray-500">Admin</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-calendar-range-fill text-orange-500/90"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 7V5H0v5h5a1 1 0 1 1 0 2H0v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9h-6a1 1 0 1 1 0-2h6z" />
                  </svg>
                  <p className="text-gray-500">
                    19<sup>th</sup> November, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[32%] h-auto bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl ease-out duration-700 cursor-pointer">
            <img
              src="https://cdn.pixabay.com/photo/2017/11/12/13/37/forest-2942477_640.jpg"
              alt="Blog image"
              className="w-full h-[33vh] object-cover object-center"
            />
            <div className="w-full h-auto px-4 py-6">
              <div className="w-full h-auto text-[0.9rem] font-normal flex items-center gap-x-2 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-folder2 text-orange-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                </svg>
                <p className="text-gray-600">Mountain Trek</p>
              </div>
              <Link className="text-[1.35rem] text-gray-900 font-black capitalize block">
                Let's explore the mountains trek together
              </Link>
              <div className="w-full h-[0.8px] bg-gray-300 my-6"></div>
              <div className="w-full h-auto text-[0.88rem] font-medium flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-fill text-orange-500/90"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                  <p className="text-gray-500">Admin</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-calendar-range-fill text-orange-500/90"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 7V5H0v5h5a1 1 0 1 1 0 2H0v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9h-6a1 1 0 1 1 0-2h6z" />
                  </svg>
                  <p className="text-gray-500">
                    19<sup>th</sup> November, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[32%] h-auto bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl ease-out duration-700 cursor-pointer">
            <img
              src="https://cdn.pixabay.com/photo/2020/07/03/10/28/waterfall-5365926_640.jpg"
              alt="Blog image"
              className="w-full h-[33vh] object-cover object-center"
            />
            <div className="w-full h-auto px-4 py-6">
              <div className="w-full h-auto text-[0.9rem] font-normal flex items-center gap-x-2 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-folder2 text-orange-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                </svg>
                <p className="text-gray-600">Mountain Trek</p>
              </div>
              <Link className="text-[1.35rem] text-gray-900 font-black capitalize block">
                Let's explore the mountains trek together
              </Link>
              <div className="w-full h-[0.8px] bg-gray-300 my-6"></div>
              <div className="w-full h-auto text-[0.88rem] font-medium flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-fill text-orange-500/90"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                  <p className="text-gray-500">Admin</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-calendar-range-fill text-orange-500/90"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 7V5H0v5h5a1 1 0 1 1 0 2H0v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9h-6a1 1 0 1 1 0-2h6z" />
                  </svg>
                  <p className="text-gray-500">
                    19<sup>th</sup> November, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[32%] h-auto bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl ease-out duration-700 cursor-pointer">
            <img
              src="https://cdn.pixabay.com/photo/2019/12/29/04/06/waterfall-4726196_640.jpg"
              alt="Blog image"
              className="w-full h-[33vh] object-cover object-center"
            />
            <div className="w-full h-auto px-4 py-6">
              <div className="w-full h-auto text-[0.9rem] font-normal flex items-center gap-x-2 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-folder2 text-orange-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                </svg>
                <p className="text-gray-600">Mountain Trek</p>
              </div>
              <Link className="text-[1.35rem] text-gray-900 font-black capitalize block">
                Let's explore the mountains trek together
              </Link>
              <div className="w-full h-[0.8px] bg-gray-300 my-6"></div>
              <div className="w-full h-auto text-[0.88rem] font-medium flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-fill text-orange-500/90"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                  <p className="text-gray-500">Admin</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-calendar-range-fill text-orange-500/90"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 7V5H0v5h5a1 1 0 1 1 0 2H0v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9h-6a1 1 0 1 1 0-2h6z" />
                  </svg>
                  <p className="text-gray-500">
                    19<sup>th</sup> November, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[32%] h-auto bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl ease-out duration-700 cursor-pointer">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/18/14/16/mountaineer-1834841_640.jpg"
              alt="Blog image"
              className="w-full h-[33vh] object-cover object-center"
            />
            <div className="w-full h-auto px-4 py-6">
              <div className="w-full h-auto text-[0.9rem] font-normal flex items-center gap-x-2 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-folder2 text-orange-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                </svg>
                <p className="text-gray-600">Mountain Trek</p>
              </div>
              <Link className="text-[1.35rem] text-gray-900 font-black capitalize block">
                Let's explore the mountains trek together
              </Link>
              <div className="w-full h-[0.8px] bg-gray-300 my-6"></div>
              <div className="w-full h-auto text-[0.88rem] font-medium flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-fill text-orange-500/90"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                  <p className="text-gray-500">Admin</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-calendar-range-fill text-orange-500/90"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 7V5H0v5h5a1 1 0 1 1 0 2H0v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9h-6a1 1 0 1 1 0-2h6z" />
                  </svg>
                  <p className="text-gray-500">
                    19<sup>th</sup> November, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex items-center justify-center mb-6">
          <SecondaryButton>
            View more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </SecondaryButton>
        </div>
      </div>
    </>
  );
};

export default Blog;
