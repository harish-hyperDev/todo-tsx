/** @type {import('tailwindcss').Config} */

module.exports = {  
  important: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {        
        Milkshake: ["Milkshake", "sans-serif"],
      },
    },
  },
  plugins: [],
}
