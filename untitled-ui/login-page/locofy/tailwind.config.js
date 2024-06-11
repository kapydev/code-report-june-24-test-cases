/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "brand-700": "#6941c6",
        "gray-600": "#475467",
        "gray-300": "#d0d5dd",
        "gray-700": "#344154",
        "brand-600": "#7e56d9",
        slategray: "#667085",
        "gray-900": "#101828",
        "gray-100": "#f2f4f7",
      },
      spacing: {},
      fontFamily: {
        "text-sm-semibold": "Inter",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
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
