/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {},
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
