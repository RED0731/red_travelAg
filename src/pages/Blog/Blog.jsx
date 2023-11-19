import React from "react";

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
          <div className="w-[30%] h-auto bg-white rounded-md border border-gray-200 overflow-hidden">
            <img src="" alt="Blog image" className="w-full h-1/2 object-cover object-center" />
          </div>
          <div className="bg-gray-600 border border-orange-500">Hey second box</div>
        </div>
      </div>
    </>
  );
};

export default Blog;
