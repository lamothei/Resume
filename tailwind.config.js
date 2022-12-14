/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bridge' : "url('../public/img/bridge.jpg')"
      }
    },
  },
  plugins: [],
}