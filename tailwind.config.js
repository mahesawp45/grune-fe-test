/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        82: "32rem",
      },
      colors: {
        navbar: "#406a80",
        primary: "#67a9cc",
      },
    },
  },
  plugins: [],
};
