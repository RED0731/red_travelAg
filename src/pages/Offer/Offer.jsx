import React from "react";
import SecondaryButton from "../../components/Button/SecondaryButton";

const Offer = () => {
  return (
    <>
      <div className="w-full h-auto py-16 px-20">
        <div className="text-center mb-10">
          <div className="satisfy-font text-2xl font-medium text-orange-500 text-center">
            Our Recommendation
          </div>
          <h1 className="text-[2.5rem] text-gray-900 text-center font-black">
            Best Offers
          </h1>
        </div>
        {/* <div className="w-full h-auto flex items-center justify-center mb-6">
          <SecondaryButton>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </SecondaryButton>
        </div> */}
      </div>
    </>
  );
};

export default Offer;
