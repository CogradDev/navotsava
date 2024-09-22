/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Correct path for your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        times: ['"Crimson Text"', "serif"],
      },
      colors: {
        lightblue: {
          200: "#A6D8E7", // Example light blue color
        },
        lightorange: {
          200: "#FDD7B9", // Example light orange color
        },
      },
    },
  },
  plugins: [],
};
