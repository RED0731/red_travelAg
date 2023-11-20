import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto py-16 px-20 bg-gray-200/30 flex items-start gap-6">
        <div className="w-[30%] h-auto">
          <div className="mb-3">
            <Link
              to="/"
              className="relative text-gray-900 text-[2.1rem] font-black tracking-wider hover:text-gray-700 ease-out duration-700"
            >
              Travel
              <sup className="absolute top-1 left-6 text-orange-500 font-medium text-[1.05rem] ">
                Agency
              </sup>
            </Link>
          </div>
          <p className="text-gray-500 text-[0.95rem] font-normal mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            neque quis enim. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Cum ipsum aperiam sequi.
          </p>
          <div className="w-full h-auto mb-8">
            <div className="w-full h-auto text-gray-700 flex items-center gap-x-1.5 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-geo-fill text-orange-600"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                />
              </svg>
              <p className="text-base text-gray-700 font-normal hover:text-orange-600 cursor-pointer ease-out duration-700">
                Nagarjun-01 thulobharyang, Kathmandu.
              </p>
            </div>
            <div className="w-full h-auto text-gray-700 flex items-center gap-x-1.5 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telephone-fill text-orange-600"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
              <p className="text-base text-gray-700 font-normal hover:text-orange-600 cursor-pointer ease-out duration-700">
                +977-9809597153
              </p>
            </div>
            <div className="w-full h-auto text-gray-700 flex items-center gap-x-1.5 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope-open-fill text-orange-600"
                viewBox="0 0 16 16"
              >
                <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z" />
              </svg>
              <p className="text-base text-gray-700 font-normal hover:text-orange-600 cursor-pointer ease-out duration-700">
                agokarna444@gmail.com
              </p>
            </div>
          </div>
          <div className="w-full h-auto flex items-center gap-4">
            <Link className="text-2xl p-1.5 rounded-md bg-gray-400/70 hover:bg-orange-400/70 ease-out duration-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-facebook text-gray-900"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.820-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </Link>
            <Link className="text-2xl p-1.5 rounded-md bg-gray-400/70 hover:bg-orange-400/70 ease-out duration-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-instagram text-gray-900"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.20.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.20.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.20-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.20-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.20 1.485-.276.738-.034 1.020-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </Link>
            <Link className="text-2xl p-1.5 rounded-md bg-gray-400/70 hover:bg-orange-400/70 ease-out duration-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-youtube text-gray-900"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.120 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg>
            </Link>
            <Link className="text-2xl p-1.5 rounded-md bg-gray-400/70 hover:bg-orange-400/70 ease-out duration-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-twitter-x text-gray-900"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="w-1/4 h-auto">
          <h1 className="text-2xl text-gray-950 font-black mb-5">
            Top Destination
          </h1>
          <div className="w-full h-auto flex items-center gap-x-1.5 mb-2">
            <div className="w-[7px] h-[7px] rounded-full bg-orange-500"></div>
            <h6 className="text-base text-gray-900 font-normal hover:underline cursor-pointer ease-out duration-700">
              Annapurna Base Camp (ABC), Nepal
            </h6>
          </div>
          <div className="w-full h-auto flex items-center gap-x-1.5 mb-2">
            <div className="w-[7px] h-[7px] rounded-full bg-orange-500"></div>
            <h6 className="text-base text-gray-900 font-normal hover:underline cursor-pointer ease-out duration-700">
              Annapurna Base Camp (ABC), Nepal
            </h6>
          </div>
          <div className="w-full h-auto flex items-center gap-x-1.5 mb-2">
            <div className="w-[7px] h-[7px] rounded-full bg-orange-500"></div>
            <h6 className="text-base text-gray-900 font-normal hover:underline cursor-pointer ease-out duration-700">
              Annapurna Base Camp (ABC), Nepal
            </h6>
          </div>
          <div className="w-full h-auto flex items-center gap-x-1.5 mb-2">
            <div className="w-[7px] h-[7px] rounded-full bg-orange-500"></div>
            <h6 className="text-base text-gray-900 font-normal hover:underline cursor-pointer ease-out duration-700">
              Annapurna Base Camp (ABC), Nepal
            </h6>
          </div>
          <div className="w-full h-auto flex items-center gap-x-1.5 mb-2">
            <div className="w-[7px] h-[7px] rounded-full bg-orange-500"></div>
            <h6 className="text-base text-gray-900 font-normal hover:underline cursor-pointer ease-out duration-700">
              Annapurna Base Camp (ABC), Nepal
            </h6>
          </div>
          <div className="w-full h-auto flex items-center gap-x-1.5 mb-2">
            <div className="w-[7px] h-[7px] rounded-full bg-orange-500"></div>
            <h6 className="text-base text-gray-900 font-normal hover:underline cursor-pointer ease-out duration-700">
              Annapurna Base Camp (ABC), Nepal
            </h6>
          </div>
        </div>
        <div className="w-1/4 h-auto">
          <h1 className="text-2xl text-gray-950 font-black mb-5">
            Top Categories
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
