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
      },
    },
  },
  plugins: [],
};
