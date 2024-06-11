export default {
  content: ["./**/*.{js,jsx,ts,tsx,html,svelte,vue}"],
  theme: {
    extend: {
      fontFamily: { "s-f_pro_display": "SF Pro Display", inter: "Inter" },
      backgroundImage: {
        "logo-new-1": "url(/assets/logo-new-1.png)",
        "t-bg-24px-icon-notification-ellipse-13":
          'url("/assets/PxIconNotification.svg")',
        "t-bg-rectangle-2074group": 'url("/assets/Rectangle2074.svg")',
        "t-bg-rectangle-2074group-0": 'url("/assets/Rectangle2075.svg")',
        "t-bg-ellipse-14ellipse-15": 'url("/assets/Ellipse14.svg")',
        "t-bg-ellipse-14ellipse": 'url("/assets/Ellipse15.svg")',
        "bg-grid":
          "url(/assets/Grid.svg)",
        "bg-grid-0": "url(/assets/Grid1.svg)",
      },
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
  },
  plugins: [],
  mode: "jit",
};
