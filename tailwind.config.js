/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(1em, min(3vw,500px), 4rem)",
        clampSmall: "clamp(0.2rem, 2vw, 1.5rem)",
      },
      height:{
        clamp : "clamp(max(30%,60px), 100vw, 80%)"
      },
      colors:{
        orangish: "#FF5631",
        inputGray: "#1E1E1E",
        backgroundBlack: "#0D0D0D",
        borderGray: "#7C7364",
        completed : "#57CB4C"
      }
      
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/container-queries")],
};
