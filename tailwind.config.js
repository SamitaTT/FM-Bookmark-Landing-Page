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
        "dark-primary": "#121212",
        "dark-secondary": "#8b8b8b",
        "dark-tertiary": "#282828",
        "dark-soft-blue": "#6b77e3",
        "dark-light-blue": "#d1d0f7",
        "dark-soft-red": "#ff817a",
        "dark-light-red": "#ffbbb3",
        "dark-grayish-blue": "#787a8d",
        "dark-very-dark-blue": "#3b3f59",
        "dark-gray": "#fbfbfb",
        gray: "#f7f7f7",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
