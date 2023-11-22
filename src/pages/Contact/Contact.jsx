import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-full h-auto py-16 px-20 flex justify-between gap-8">
        <div className="w-[33%] h-auto bg-orange-500 py-8 px-12 rounded-xl flex items-start justify-center flex-col">
          <p className="text-[0.9rem] text-gray-200 font-normal tracking-wider uppercase mb-3.5">
            Let's talk
          </p>
          <h1 className="text-3xl text-gray-100 font-black tracking-wider capitalize mb-5">
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
              <h5 className="text-gray-200 text-[1.15rem] font-semibold tracking-wider">Email Id</h5>
              <h6 className="text-gray-100 text-base font-normal">ag@info.com</h6>
            </div>
          </div>
        </div>
        <div className="w-[60%] h-auto bg-gray-300 rounded-xl p-4">
          This is the input section.
        </div>
      </div>
    </>
  );
};

export default Contact;
