module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#404EED",
        notQuiteBlack: "#23272a",
        lightBrand: "#5865f2",
        lightGrey: "#36393f",
        offWhite: "#f6f6f6",
        lighterBrand: "hsl(235,86.1%,71.8%)",
      },
      scale: {
        60: "60%",
        110: "110%",
      },
      fontFamily: {
        "anek-latin": ["Anek Latin", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        "ginto-sans": ["Ginto Nord Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
