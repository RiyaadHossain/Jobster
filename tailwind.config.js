/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#691f74",
        primaryDark: "#44195d",
        primaryLight: "#f0e9f1",

        light: "#f0e9f1",
        black: "#17171d",
        grayColor: "#606065",

        secondary: "#e34b32",
        secondaryLight: "#fff0eb",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      md_lg: "960px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

/*  
  --pxpHoverTransition: 300ms cubic-bezier(0.215,0.61,0.355,1);
  --pxpHoverOpacity: 0.6;
  --pxpTextColor: #17171D;
  --pxpMainColor: #0969C3;
  --pxpMainColorTransparent: rgba(9,105,195,0.05);
  --pxpMainColorDark: #002745;
  --pxpMainColorLight: #e6f0f9;
  --pxpSecondaryColor: #fff0d9;
  --pxpSecondaryColorLight: #FFF8EC;
  --pxpLightGrayColor: #dedede;
  --pxpDarkGrayColor: #999;
*/
