import Nepal from "../../assets/Packages/nepal.jpg";
import NepalFlag from "../../assets/Packages/nepal.png";
import Canada from "../../assets/Packages/canada.jpg";
import CanadaFlag from "../../assets/Packages/canada.png";
import Uk from "../../assets/Packages/uk.jpg";
import UkFlag from "../../assets/Packages/uk.png";
import India from "../../assets/Packages/india.jpg";
import IndiaFlag from "../../assets/Packages/india.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import {
  Autoplay,
  EffectCreative,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

const TourDetail = () => {
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
              <div className="w-full h-auto mb-8">
                <h1 className="text-2xl text-gray-700 font-bold mb-4">
                  Tour details
                </h1>
                <p className="text-gray-500 text-base font-normal mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                  adipisci labore voluptas, corporis officiis, odit voluptatibus
                  cum ducimus eaque reiciendis tempora dolorum quibusdam id
                  deleniti vel incidunt dicta asperiores, vero mollitia dolorem!
                  Labore amet dignissimos excepturi natus facilis minus quis hic
                  ducimus debitis. Eius at, voluptatum repellat similique
                  molestias possimus. Assumenda vitae mollitia aliquam, unde
                  nobis deserunt fuga enim beatae itaque reiciendis porro optio
                  atque perspiciatis fugit eius nam facere, ea at ducimus minima
                  explicabo. Beatae soluta harum autem laboriosam quidem, sed
                  labore eum accusamus modi, officia similique veritatis nisi
                  facilis consequuntur quibusdam provident repellat quas neque
                  exercitationem tempora quo?
                </p>
                <h1 className="text-xl text-gray-600 font-bold mb-4">
                  Tour Includes
                </h1>
                <div className="w-full h-auto flex itemx-center gap-y-1 flex-col">
                  <div className="w-full h-auto flex items-center gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-arrow-return-right text-orange-600 font-bold"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                      />
                    </svg>
                    <p className="text-gray-600 text-base font-normal">
                      Free transportation from the airport or our agency to the
                      hotel.
                    </p>
                  </div>
                  <div className="w-full h-auto flex items-center gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-arrow-return-right text-orange-600 font-bold"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                      />
                    </svg>
                    <p className="text-gray-600 text-base font-normal">
                      One night stay at the hotel in the city center with free
                      breakfast and dinner.
                    </p>
                  </div>
                  <div className="w-full h-auto flex items-center gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-arrow-return-right text-orange-600 font-bold"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                      />
                    </svg>
                    <p className="text-gray-600 text-base font-normal">
                      Free transportation from the airport or our agency to the
                      hotel.
                    </p>
                  </div>
                  <div className="w-full h-auto flex items-center gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-arrow-return-right text-orange-600 font-bold"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                      />
                    </svg>
                    <p className="text-gray-600 text-base font-normal">
                      One night stay at the hotel in the city center with free
                      breakfast and dinner.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-auto mb-8">
                <h1 className="text-2xl text-gray-600 font-bold mb-4">
                  Tour Services
                </h1>
                <p className="text-gray-600 text-base font-normal mb-8">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum quas voluptatibus modi sapiente, placeat quia
                  voluptates ducimus fugiat veniam tenetur perferendis assumenda
                  labore dolorem beatae?
                </p>
              </div>
              <div className="w-full h-auto mb-8">
                <h1 className="text-2xl text-gray-600 font-bold mb-4">
                  Hotels from our contract.
                </h1>
                <div className="w-full h-auto">
                  <Swiper
                    navigation={true}
                    loop={true}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    spaceBetween={50}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    // coverflowEffect={{
                    //   rotate: 0,
                    //   stretch: 0,
                    //   depth: 100,
                    //   modifier: 1,
                    //   slideShadows: true,
                    // }}
                    breakpoints={{
                      "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                      "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                      },
                    }}
                    modules={[Autoplay, Navigation, EffectCoverflow]}
                    className="w-full h-auto flex items-center gap-7"
                  >
                    <SwiperSlide className="w-[31%] h-auto hover:brightness-75 hover:shadow-md rounded-md ease-out duration-1000 overflow-hidden cursor-pointer">
                      <div className="w-full h-auto">
                        <img
                          src="https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_1280.jpg"
                          alt="hotel img"
                          className="w-full h-[28vh] object-cover object-center rounded brightness-75 mb-3"
                        />
                        <h1 className="text-xl text-gray-600 font-bold px-2">
                          Contracted First Hotel
                        </h1>
                        <p className="text-orange-600 text-[0.99rem] font-medium px-2 pb-2">
                          $180.32{" "}
                          <span className="text-[0.9rem] text-gray-500">
                            /night
                          </span>
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-[31%] h-auto hover:brightness-75 hover:shadow-md rounded-md ease-out duration-1000 overflow-hidden cursor-pointer">
                      <div className="w-full h-auto">
                        <img
                          src="https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_1280.jpg"
                          alt="hotel img"
                          className="w-full h-[28vh] object-cover object-center rounded brightness-75 mb-3"
                        />
                        <h1 className="text-xl text-gray-600 font-bold px-2">
                          Contracted Second Hotel
                        </h1>
                        <p className="text-orange-600 text-[0.99rem] font-medium px-2 pb-2">
                          $300.55{" "}
                          <span className="text-[0.9rem] text-gray-500">
                            /night
                          </span>
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-[31%] h-auto hover:brightness-75 hover:shadow-md rounded-md ease-out duration-1000 overflow-hidden cursor-pointer">
                      <div className="w-full h-auto">
                        <img
                          src="https://cdn.pixabay.com/photo/2017/09/21/16/12/holidays-2772361_1280.jpg"
                          alt="hotel img"
                          className="w-full h-[28vh] object-cover object-center rounded brightness-75 mb-3"
                        />
                        <h1 className="text-xl text-gray-600 font-bold px-2">
                          Contracted Third Hotel
                        </h1>
                        <p className="text-orange-600 text-[0.99rem] font-medium px-2 pb-2">
                          $180.32{" "}
                          <span className="text-[0.9rem] text-gray-500">
                            /night
                          </span>
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-[31%] h-auto hover:brightness-75 hover:shadow-md rounded-md ease-out duration-1000 overflow-hidden cursor-pointer">
                      <div className="w-full h-auto">
                        <img
                          src="https://cdn.pixabay.com/photo/2013/11/15/19/52/lanzarote-211041_1280.jpg"
                          alt="hotel img"
                          className="w-full h-[28vh] object-cover object-center rounded brightness-75 mb-3"
                        />
                        <h1 className="text-xl text-gray-600 font-bold px-2">
                          Contracted Fourth Hotel
                        </h1>
                        <p className="text-orange-600 text-[0.99rem] font-medium px-2 pb-2">
                          $180.32{" "}
                          <span className="text-[0.9rem] text-gray-500">
                            /night
                          </span>
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-[31%] h-auto hover:brightness-75 hover:shadow-md rounded-md ease-out duration-1000 overflow-hidden cursor-pointer">
                      <div className="w-full h-auto">
                        <img
                          src="https://cdn.pixabay.com/photo/2023/04/14/22/09/ai-generated-7926444_960_720.jpg"
                          alt="hotel img"
                          className="w-full h-[28vh] object-cover object-center rounded brightness-75 mb-3"
                        />
                        <h1 className="text-xl text-gray-600 font-bold px-2">
                          Contracted Fifth Hotel
                        </h1>
                        <p className="text-orange-600 text-[0.99rem] font-medium px-2 pb-2">
                          $180.32{" "}
                          <span className="text-[0.9rem] text-gray-500">
                            /night
                          </span>
                        </p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="lg:w-[28%] md:w-[28%] sm:w-full w-full h-auto">
              <h1 className="text-2xl text-gray-600 font-bold mb-4">
                Popular tour package
              </h1>
              <div className="my-2 w-full h-auto">
                <Swiper
                  // grabCursor={false}
                  effect={"creative"}
                  loop={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: ["-125%", 0, -800],
                      rotate: [0, 0, -90],
                    },
                    next: {
                      shadow: true,
                      translate: ["125%", 0, -800],
                      rotate: [0, 0, 90],
                    },
                  }}
                  modules={[Autoplay, EffectCreative]}
                  className=""
                >
                  {Package.map((packag) => (
                    <SwiperSlide key={packag._id}>
                      <div className="w-full h-auto bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
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
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourDetail;
