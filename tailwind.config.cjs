/** @type {import('tailwindcss').Config} */
module.exports = {
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
