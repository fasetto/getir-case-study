const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", ...fontFamily.sans],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
    },
    zIndex: {
      0: 0,
      auto: "auto",
      dropdown: 10,
      sticky: 20,
      banner: 30,
      overlay: 40,
      modal: 50,
      popover: 60,
      toast: 70,
      tooltip: 80,
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
