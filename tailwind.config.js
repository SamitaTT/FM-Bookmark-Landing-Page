/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        "soft-blue": "	#5368df",
        "soft-red": "#fa5757",
        "grayish-blue": "#9194a1",
        "very-dark-blue": "#252b46",
      },
    },
  },
  plugins: [],
};
