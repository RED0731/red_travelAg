import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-full h-auto py-16 px-20 flex justify-between gap-8">
        <div className="w-[33%] h-auto bg-orange-500 py-8 px-12 rounded-xl flex items-start justify-center flex-col">
          <p className="text-[0.9rem] text-gray-200 font-normal tracking-wider uppercase mb-3.5">
            Let's talk
          </p>
          <h1 className="text-3xl text-gray-100 font-black tracking-wider capitalize mb-7">
            Speck with expert/ experienced teams.
          </h1>
          <div className="w-full h-auto flex items-center gap-x-3 mb-8">
            <div className="w-[50px] h-[50px] rounded-md bg-gray-100 shadow-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-envelope-fill text-orange-500"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
            </div>
            <div className="flex items-start flex-col">
              <h5 className="text-gray-200 text-[1.15rem] font-semibold tracking-wider">
                Email Id
              </h5>
              <h6 className="text-gray-100 text-base font-normal">
                travelagency@info.com
              </h6>
            </div>
          </div>
          <div className="w-full h-auto flex items-center gap-x-3 mb-8">
            <div className="w-[50px] h-[50px] rounded-md bg-gray-100 shadow-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-telephone-fill text-orange-500"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
            </div>
            <div className="flex items-start flex-col">
              <h5 className="text-gray-200 text-[1.15rem] font-semibold tracking-wider">
                Phone Nbr.
              </h5>
              <h6 className="text-gray-100 text-base font-normal">
                +977-9809597153
              </h6>
            </div>
          </div>
          <div className="w-full h-auto flex items-center gap-x-3 mb-8">
            <div className="w-[50px] h-[50px] rounded-md bg-gray-100 shadow-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-geo-alt-fill text-orange-500"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
            </div>
            <div className="flex items-start flex-col">
              <h5 className="text-gray-200 text-[1.15rem] font-semibold tracking-wider">
                Address
              </h5>
              <h6 className="text-gray-100 text-base font-normal">
                Nagarjun-01 thulobharyang, Kathmandu.
              </h6>
            </div>
          </div>
        </div>
        <div className="w-[60%] h-auto bg-indigo-00 rounded-xl p-4">
          <div className="w-full h-auto flex items-center gap-x-8">
            <div className="w-1/2 h-[50px] bg-gray-300 border-none rounded-md overflow-hidden">
              <input
                type="text"
                id="fullname"
                class="bg-gray-200 border-2 text-gray-950 rounded-md text-base w-full h-full p-4 focus:outline-none focus:bg-gray-300 focus:border-orange-500 ease-out duration-700"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="w-1/2 h-[50px] bg-gray-300 border-none rounded-md overflow-hidden">
              <input
                type="email"
                id="email"
                class="bg-gray-200 border-2 text-gray-950 rounded-md text-base w-full h-full p-4 focus:outline-none focus:bg-gray-300 focus:border-orange-500 ease-out duration-700"
                placeholder="Email Id"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
