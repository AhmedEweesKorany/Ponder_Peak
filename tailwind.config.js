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
      },
      fontFamily:{
        roboto:["'Roboto'", "sans-serif"],
        opensans:["'Open Sans'", "sans-serif"],
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "d-",
  },
}