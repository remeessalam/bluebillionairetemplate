/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-Page": "url('/assets/png/homePageBackground.png')",
        "custom-radial":
          "radial-gradient(circle, rgba(199,194,196,0.8477984943977591) 0%, rgba(35,36,38,0.7077424719887955) 100%)",
        "aboutas-gradient":
          "linear-gradient(270deg, rgba(0,0,0,0.12510941876750703) 21%, rgba(255,255,255,0.309983368347339) 50%, rgba(0,0,0,0.36320465686274506) 83%)",
        "animation-gradient":
          "linear-gradient(90deg, rgba(8,7,25,1) 0%, rgba(255,255,255,0) 100%)",
        "button-gradient":
          "linear-gradient(90deg, rgba(153,115,47,1) 0%, rgba(238,202,81,1) 100%)",
      },
      boxShadow: {
        "8xl": "inset 0px 0px 22px -12px rgba(0,0,0,0.09)",
        "9xl": "inset 0px 0px 125px -133px rgba(255,255,255,0.49)",
        "10xl": " inset 0px -25px 80px -79px rgba(255,255,255,0.6)",
        "11xl": " inset 0px -58px 70px -103px rgba(61,150,255,1)",
      },
      keyframes: {
        scaleInOut: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        spin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        scaleInOut: "scaleInOut 1s ease-in-out ",
        spin: "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};
