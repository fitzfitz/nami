/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rammetto: ['"Rammetto One"'],
      },
      colors: {
        black: "#003349",
        "albescent-white": "#F7E4DE",
        "rose-bud": "#F7AFA7",
        "soft-cream": "#FCF5F3",
        "ocean-green": {
          50: "#f0f9f4",
          100: "#daf1e3",
          200: "#b8e2cb",
          300: "#89ccab",
          400: "#57b087",
          500: "#3aa075",
          600: "#257656",
          700: "#1e5e46",
          800: "#1a4b39",
          900: "#163e2f",
        },
        saffron: {
          50: "#fffaeb",
          100: "#fdefc8",
          200: "#fbdd8c",
          300: "#f9bf3c",
          400: "#f8af27",
          500: "#f28c0e",
          600: "#d66809",
          700: "#b2470b",
          800: "#903710",
          900: "#772e10",
        },
        greener: {
          hover: "#42B786",
          border: "#40B081",
          default: "#3AA075",
        },
        yellowish: {
          hover: "#FACB61",
          "border-default": "#FAC652",
          "border-hover": "#F9BF3E",
          default: "#F9BF3C",
        },
        bluish: {
          default: "#0765A7",
          hover: "#0982D7",
          "border-hover": "#0765A7",
          lighter: "#097FD2",
        },
        "nami-field": {
          default: "#3EAC7E",
          hover: "#44BB89",
          border: "#62C69C",
        },
      },
      keyframes: {
        heartbeat: {
          "0%": { transform: "scale(0.5)" },
          "20%": { transform: "scale(0)" },
          "40%": { transform: "scale(1.2)" },
          "60%": { transform: "scale(1)" },
          "70%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        "heartbeat-empty": {
          "0%": { transform: "scale(0.5) rotateX(90deg)" },
          "50%": { transform: "scale(1) rotateX(0deg)" },
        },
      },
      animation: {
        loved: "heartbeat 0.5s",
        unloved: "heartbeat-empty 0.5s",
      },
    },
  },
  plugins: [require("tailwindcss-inner-border")],
};
