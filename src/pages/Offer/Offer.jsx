import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/Button/PrimaryButton";
import Tag from "../../components/Tag/Tag";
// import Viewmore from "../../components/Viewmore/Viewmore";

const Offer = () => {
  const Offers = [
    {
      id: 1,
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/11/29/04/18/hot-air-balloons-1867279_640.jpg",
      title: "Hot Air Ballon, Nepal",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ipsa officia doloremque dolore asperiores quos similique laboriosam ut id! Quisquam.",
      price: "$100",
    },
    {
      id: 2,
      imgUrl:
        "https://cdn.pixabay.com/photo/2019/07/19/04/19/trees-4347932_640.jpg",
      title: "Title Section",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ipsa officia doloremque dolore asperiores quos similique laboriosam ut id! Quisquam.",
      price: "$180.00",
    },
    {
      id: 3,
      imgUrl:
        "https://cdn.pixabay.com/photo/2021/04/07/02/38/waterfall-6157891_640.jpg",
      title: "Title Section",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ipsa officia doloremque dolore asperiores quos similique laboriosam ut id! Quisquam.",
      price: "$150.00",
    },
    {
      id: 4,
      imgUrl:
        "https://cdn.pixabay.com/photo/2021/04/07/02/38/waterfall-6157891_640.jpg",
      title: "Title Section",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ipsa officia doloremque dolore asperiores quos similique laboriosam ut id! Quisquam.",
      price: "$150.00",
    },
    {
      id: 5,
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/11/29/04/18/hot-air-balloons-1867279_640.jpg",
      title: "Hot Air Ballon, Nepal",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ipsa officia doloremque dolore asperiores quos similique laboriosam ut id! Quisquam.",
      price: "$100",
    },
    {
      id: 6,
      imgUrl:
        "https://cdn.pixabay.com/photo/2019/07/19/04/19/trees-4347932_640.jpg",
      title: "Title Section",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ipsa officia doloremque dolore asperiores quos similique laboriosam ut id! Quisquam.",
      price: "$180.00",
    },
  ];
  return (
    <>
      <div className="w-full h-auto py-16 px-20">
        <Tag tagSlog="Our Recommendation" tagTitle="Best Offers" />
        <div className="w-full h-auto flex items-center justify-between mb-10 gap-x-6 gap-y-8 flex-wrap">
          {Offers.map((offer) => (
            <div
              key={offer.id}
              className="w-[32%] h-auto bg-white rounded-2xl shadow border-b-4 border-gray-300 hover:border-b-4 hover:border-orange-500 ease-out duration-700 overflow-hidden"
            >
              <img
                src={offer.imgUrl}
                alt=""
                className="w-full h-[38vh] object-cover object-center rounded-2xl brightness-75"
              />
              <div className="px-5 py-8">
                <Link className="text-2xl text-gray-900 font-bold mb-4 block">
                  {offer.title}
                </Link>
                <p className="text-base text-gray-500 font-normal mb-8">
                  {offer.description}
                </p>
                <div className="w-full h-auto flex items-center justify-between">
                  <PrimaryButton>Book Now</PrimaryButton>
                  <h6 className="text-xl text-orange-600 font-bold">
                    {offer.price}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <Viewmore /> */}
      </div>
    </>
  );
};

export default Offer;
