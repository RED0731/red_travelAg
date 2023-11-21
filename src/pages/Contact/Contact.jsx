import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-full h-auto py-16 px-20 flex justify-between gap-8">
        <div className="w-[33%] h-auto bg-orange-500 py-8 px-12 rounded-xl flex items-start justify-center flex-col">
          <p className="text-[0.9rem] text-gray-200 font-normal tracking-wider uppercase">
            Let's talk
          </p>
          <h1 className="text-3xl text-gray-100 font-black tracking-wider capitalize">
            Speck with our expert/ experienced teams.
          </h1>
        </div>
        <div className="w-[60%] h-auto bg-gray-300 rounded-xl p-4">
          This is the input section.
        </div>
      </div>
    </>
  );
};

export default Contact;
