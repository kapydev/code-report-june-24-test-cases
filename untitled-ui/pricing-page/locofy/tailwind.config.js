/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "gray-500": "#667085",
        "gray-200": "#e4e7ec",
        "gray-600": "#475467",
        "success-50": "#ecfdf3",
        "success-700": "#037a48",
        "brand-800": "#53389e",
        "brand-600": "#7e56d9",
        "gray-300": "#d0d5dd",
        "gray-700": "#344154",
        "brand-200": "#e9d7fe",
        "gray-50": "#f9fafb",
        "gray-900": "#101828",
        "brand-700": "#6941c6",
        "gray-100": "#f2f4f7",
      },
      spacing: {},
      fontFamily: {
        "text-md-regular": "Inter",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xs: "12px",
      xl: "20px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      lg: "18px",
      "29xl": "48px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
