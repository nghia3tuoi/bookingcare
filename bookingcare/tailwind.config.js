/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        sliceRight: {
          from: { opacity: 0, transform: "translateX(-100%)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        sliceRight: "sliceRight .3s ease-in-out",
      },
    },
  },
  plugins: [],
});
