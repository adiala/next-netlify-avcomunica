module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js", "./data/*.js"],
  theme: {
    fontFamily: {
      roboto: ['"Roboto"', "system-ui"],
      lato: ['"Lato"', "system-ui"],
      rubik: ['"Rubik"', "sans-serif"],
    },
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
      height: {
        "1/4": "25vh",
        "1/2": "40vh",
        "3/4": "75vh",
      },
      colors: {
        background: "#fee7d7",
        primary: "#f66c13",
        secondary: "#9c2d05",
      },
    },
  },
  plugins: [],
};
