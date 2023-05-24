/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Syne: ["Syne", "sans-serif"],
      },
      colors: {
        primary: "#340367",
        secondary: "#fff",
        choiceOne: "#5b00ba",
        choiceTwo: "#dcdcfb",
      },
    },
  },
  plugins: [],
};
