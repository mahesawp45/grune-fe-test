/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        74: "20rem",
        76: "22rem",
        82: "32rem",
      },
      colors: {
        navbar: "#406a80",
        footer: "#66777f",
        primary: "#67a9cc",
      },
    },
  },
  plugins: [],
};
