import React from "react";
import { Link } from "react-router-dom";
import Tag from "../../../components/Tag/Tag";
import Viewmore from "../../../components/Viewmore/Viewmore";

const Blog = () => {
  // Blog Data
  const BlogData = [
    {
      id: 1,
      imgUrl:
        "https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_640.jpg",
      blogTag: "Mountain Trek",
      title: "Let's explore the mountains trek together",
      publisher: "Admin",
      publishDate: "19 November, 2023",
    },
    {
      id: 2,
      imgUrl:
        "https://cdn.pixabay.com/photo/2014/09/07/22/17/forest-438432_640.jpg",
      blogTag: "Mountain Trek",
      title: "Let's explore the mountains trek together",
      publisher: "Admin",
      publishDate: "19 November, 2023",
    },
    {
      id: 3,
      imgUrl:
        "https://cdn.pixabay.com/photo/2017/11/12/13/37/forest-2942477_640.jpg",
      blogTag: "Mountain Trek",
      title: "Let's explore the mountains trek together",
      publisher: "Admin",
      publishDate: "19 November, 2023",
    },
    {
      id: 4,
      imgUrl:
        "https://cdn.pixabay.com/photo/2017/11/12/13/37/forest-2942477_640.jpg",
      blogTag: "Mountain Trek",
      title: "Let's explore the mountains trek together",
      publisher: "Admin",
      publishDate: "19 November, 2023",
    },
    {
      id: 5,
      imgUrl:
        "https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_640.jpg",
      blogTag: "Mountain Trek",
      title: "Let's explore the mountains trek together",
      publisher: "Admin",
      publishDate: "19 November, 2023",
    },
    {
      id: 6,
      imgUrl:
        "https://cdn.pixabay.com/photo/2014/09/07/22/17/forest-438432_640.jpg",
      blogTag: "Mountain Trek",
      title: "Let's explore the mountains trek together",
      publisher: "Admin",
      publishDate: "19 November, 2023",
    },
  ];
  return (
    <>
      <div className="w-full h-auto py-16 lg:px-20 md:px-16 sm:px-8 px-4">
        <Tag tagSlog="Latest Blogs" tagTitle="News & Blogs" />
        <div className="w-full h-auto flex items-center justify-between mb-10 gap-x-6 gap-y-8 flex-wrap">
          {BlogData.map((item) => (
            <div
              key={item.id}
              className="lg:w-[32%] md:w-[48%] sm:w-full w-full h-auto bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl ease-out duration-700 cursor-pointer"
            >
              <img
                src={item.imgUrl}
                alt="Blog image"
                className="w-full h-[37vh] object-cover object-center"
              />
              <div className="w-full h-auto px-4 py-6">
                <div className="w-full h-auto text-[0.9rem] font-normal flex items-center gap-x-2 mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-folder2 text-orange-500"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                  </svg>
                  <p className="text-gray-600">{item.blogTag}</p>
                </div>
                <Link className="text-[1.35rem] text-gray-900 font-black capitalize block">
                  {item.title}
                </Link>
                <div className="w-full h-[0.8px] bg-gray-300 my-6"></div>
                <div className="w-full h-auto text-[0.88rem] font-medium flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-fill text-orange-500/90"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                    <p className="text-gray-500">{item.publisher}</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar-range-fill text-orange-500/90"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 7V5H0v5h5a1 1 0 1 1 0 2H0v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9h-6a1 1 0 1 1 0-2h6z" />
                    </svg>
                    <p className="text-gray-500">{item.publishDate}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Viewmore />
      </div>
    </>
  );
};

export default Blog;
