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
        keyframes: {
          bounce1: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-10px)" },
          },
          bounce2: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(10px)" },
          },
        },
        animation: {
          bounce1: "bounce1 1.5s ease-in-out infinite",
          bounce2: "bounce2 1.5s ease-in-out infinite",
        },
      },
    },
  },
  plugins: [],
};
