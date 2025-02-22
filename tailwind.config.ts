/**
 * 
 *  @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          cedarville: ['"Cedarville Cursive"', 'cursive'],
          rock: ['"Rock Salt"', 'cursive'],
      },
    },  
  },
  plugins: [],
} 