/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./shopify-theme/**/*.liquid"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
