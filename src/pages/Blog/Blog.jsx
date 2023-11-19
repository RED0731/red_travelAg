import React from "react";
import { Link } from "react-router-dom";

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
        <div className="w-full h-auto flex items-center justify-between gap-x-7 gap-y-10">
          <div className="w-[30%] h-auto bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl ease-out duration-700 cursor-pointer">
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
              <Link className="text-[1.35rem] text-gray-900 font-black capitalize block">Let's explore mountains trek together</Link>
              <div className="w-full h-[0.8px] bg-gray-300 my-4"></div>
              <div className="w-full h-auto flex items-center justify-between">
                
              </div>
            </div>
          </div>
          <div className="bg-gray-600 border border-orange-500">
            Hey second box
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
