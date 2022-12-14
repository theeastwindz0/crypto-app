/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#001F2D',
        secondary:'#00ADB5'
      }
    },
  },
  plugins: [],
}
