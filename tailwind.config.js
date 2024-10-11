/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f5f5dc", // Light cream
        brown: {
          light: "#a56b47", // Light brown
          DEFAULT: "#8b4513", // Standard brown
          dark: "#5a3210", // Dark brown
        },
      },
    },
  },
  plugins: [],
};

