/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary : "#006BEA"
      },
      fontFamily : {
        primary400: "samsungOne-400",
        primary700: "samsungOne-700",
        secondary: "samsungSharpSans-Bold-700",
      },
      height : {
        18: "4.44rem",
        hero: "90.792vh",
        100: "200vh",
        img1: "25vh"
      },
      width: {
        100: "404px",
        img1: "25vw"
      }
    },
  },
  plugins: [],
}