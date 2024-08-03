const defaultTheme = require("tailwindcss/defaultTheme");
const primeUi = require("tailwindcss-primeui");

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [primeUi],
  content: [],
  theme: {
    fontSize: {
      xxs: ["10px", "16px"],
      xs: ["12px", "16px"],
      sm: ["14px", "16.41px"],
      base: ["16px", "24px"],
      lg: ["20px", "23.44px"],
      xl: ["22px", "25.78px"],
      xxl: ["32px", "37.5px"],
      "2xl": ["38px", "44.53px"],
      "2xxl": ["48px", "52px"],
      "3xl": ["52px", "55px"],
    },
    extend: {
      fontFamily: {
        sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          1: "#2D473E",
          2: "#293632",
          3: "#006340",
        },
        "brand-gray": {
          1: "#DBDBDB",
          2: "#808080",
        },
      },
    },
  },
  plugins: [],
};
