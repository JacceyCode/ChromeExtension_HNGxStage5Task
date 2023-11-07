/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#f4f6f8",
      grey: "#616163",
      primary: "#120B48",
      secondary: "#141414",
      tertiary: "#1B233D",
      white: "#FFF",
      black: "#000",
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1440px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      worksans: ["Work Sans", "sans-serif"],
      sora: ["Sora", "sans-serif"],
      sen: ["Sen", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
