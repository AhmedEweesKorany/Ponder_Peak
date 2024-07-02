/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        primary: '#78d98f',
        secondary: '#a0e4b0',
        greenlight: '#c8efd1',
        semiblack:"#2a2a2a",
        almostblack:"#111111"
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"3rem",
        }
      }
    },
  },
  plugins: [],
}