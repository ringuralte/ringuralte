module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indianRed: "#cd6161",
        crimson: "#c61436",
      },
      fontFamily: {
        title: ["Halant"],
        iosevka: ["IosevkaEtoile"],
      },
      minHeight: {
        "1/5": "20%",
        "4/5": "80%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
