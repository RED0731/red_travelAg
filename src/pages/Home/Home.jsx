import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-between py-24 px-20 gap-8">
        <div className="w-1/2 h-auto bg-orange-500 rounded-md p-5">
          Hello this is content section.
        </div>
        <div className="w-1/2 h-auto bg-purple-500 rounded-md p-5">
          Hello this is image section.
        </div>
      </div>
    </>
  );
};

export default Home;
