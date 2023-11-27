import React from "react";
import Select from "../../components/Form/Select";
import InputForm from "../../components/Form/InputForm";

const Contact = () => {
  const options = [
    { value: "help", label: "Need tour expert team?" },
    { value: "ag", label: "Expore With AG" },
    { value: "myself", label: "Explore Myself" },
  ];
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
                +977-9809***1*3
              </h6>
            </div>
          </div>
          <div className="w-full h-auto flex items-center gap-x-3">
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
                Bagmati Kathmandu, Nepal, 44600
              </h6>
            </div>
          </div>
        </div>
        <div className="w-[60%] h-auto bg-indigo-00 rounded-xl p-4">
          <p className="text-gray-900 text-[0.9rem] font-normal tracking-wider uppercase mb-3.5">
            Get in touch
          </p>
          <h1 className="text-4xl text-gray-950 font-black tracking-wide capitalize mb-10">
            Fill your information
          </h1>
          <div className="w-full h-auto flex items-center gap-8 mb-10">
            <div className="w-1/2 h-[60px] bg-gray-300 border-none rounded-md overflow-hidden">
              <InputForm
                type={"text"}
                id={"fullname"}
                placeholder={"Full Name"}
                required={true}
              />
            </div>
            <div className="w-1/2 h-[60px] bg-gray-300 border-none rounded-md overflow-hidden">
              <InputForm
                type={"email"}
                id={"email"}
                placeholder={"Email Id"}
                required={true}
              />
            </div>
          </div>
          <div className="w-full h-auto flex items-center gap-x-8 mb-10">
            <div className="w-1/2 h-[60px] bg-gray-300 border-none rounded-md overflow-hidden">
              <InputForm
                type={"number"}
                id={"phone"}
                placeholder={"Phone nbr."}
                required={true}
              />
            </div>
            <div className="w-1/2 h-[60px] bg-gray-300 border-none rounded-md overflow-hidden">
              <Select options={options} />
            </div>
          </div>
          <div className="w-full h-[130px] bg-gray-300 border-none rounded-md overflow-hidden mb-10">
            <textarea
              id="message"
              className="bg-gray-200 border-2 text-gray-950 rounded-md text-base w-full h-full p-4 focus:outline-none focus:bg-gray-100/80 focus:border-orange-500 resize-none ease-out duration-700"
              placeholder="Type you message..."
            ></textarea>
          </div>
          <button className="bg-orange-500 flex items-center gap-x-2 text-[#ffffff] py-2.5 px-9 text-[1rem] tracking-wide font-medium outline-none border-2 border-orange-500 rounded-md hover:bg-orange-500/[0.55] hover:border-orange-500/[0.55] hover:text-gray-900 ease-out duration-700">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
