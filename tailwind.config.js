module.exports = {
  // mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["noah", "Mulish", "sans-serif"],
    },
    // fontWeight: {
    //   normal: 400,
    //   medium: 500,
    //   bold: 700,
    // },
    // fontSize: {
    //   xs: ["10px", "12px"],
    //   sm: ["12px", "16px"],
    //   base: ["14px", "20px"],
    //   lg: ["16px", "24px"],
    //   xl: ["18px", "28px"],
    //   "2xl": ["24px", "32px"],
    //   "3xl": ["30px", "36px"],
    // },

    extend: {
      colors: {
        "t-light": "var(--color-text-light)",
        "t-dark": "var(--color-text-dark)",
        "t-secondary": "var(--color-text-secondary)",
        "t-new-secondary": "var(--color-text-new-secondary)",
        "t-input-secondary": "var(--color-input-secondary)",
        "t-border": "var(--color-text-border)",
        "t-title": "var(--color-text-title)",
        "t-heading": "var(--color-text-heading)",
        "t-menu": "var(--color-text-menu)",
        "t-default": "var(--color-text-default)",
        "primary-100": "var(--color-primary-100)",
        "primary-200": "var(--color-primary-200)",
        "primary-300": "var(--color-primary-300)",
        "primary-400": "var(--color-primary-400)",
        "primary-500": "var(--color-primary-500)",
        "primary-600": "var(--color-primary-600)",
        "primary-700": "var(--color-primary-700)",
        "primary-800": "var(--color-primary-800)",
        "primary-900": "var(--color-primary-900)",
        "badge-default": "var(--badge-color-default)",
        "badge-selected": "var(--badge-color-selected)",
        "badge-text-default": "var(--badge-text-color-default)",
        "badge-text-selected": "var(--badge-text-color-selected)",
        "badge-primary-100": "var(--badge-color-green)",
        "badge-primary-600": "var(--badge-color-green-600)",
        "button-primary": "var(--button--color-primary)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
