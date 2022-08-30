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
      },
      fontFamily: {
        hurricane: ['"Hurricane"'],
      },
    },
  },
  plugins: [],
};
