/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        "soft-blue": "#5368df",
        "soft-red": "#fa5757",
        "grayish-blue": "#9194a1",
        "very-dark-blue": "#252b46",
        "shadow-blue": "#e4e8fa",
        gray: "#f7f7f7",
      },
    },
  },
  plugins: [],
};
