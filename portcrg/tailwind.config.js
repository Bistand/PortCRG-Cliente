/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cherry-red": "#ff101f",
        "dragon-white": "#fdfffc",
        "cadet-blue": "#56a3a6",
        "dark-cadet-blue": "#305A5C",
      },
      fontFamily: {
        hurricane: ['"Hurricane"'],
        inter: ['"Inter"'],
      },
      borderRadius: {
        "xtra-large": "96px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
