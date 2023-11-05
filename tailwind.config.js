/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '75%, 100%': { transform: 'scale(2)', opacity: 0 },
        }
      },
      animation: {
        wiggle: 'wiggle 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
  },
  plugins: [],
};

// animate-ping	animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

// @keyframes ping {
//   75%, 100% {
//     transform: scale(2);
//     opacity: 0;
//   }
// }
