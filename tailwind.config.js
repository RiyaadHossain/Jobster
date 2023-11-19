/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#691f74",
        secondary: "#FFF0D9",
        third: "#F0E9F1",
        fourth: "#FFF0EB",
        black: "#17171d",
        accent: "#606065",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      md_lg: "960px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
