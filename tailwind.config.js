/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#691f74",
        secondary: "#FFF0D9",
        black: "#17171d",
        accent: "#606065",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
