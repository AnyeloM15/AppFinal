/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      //Font family collection
      fontFamily: {
        primary: ["Montserrat", "sans-serif"], 
        secondary: ["Roboto", "sans-serif"], 
        decorative: ["Pacifico", "cursive"], 
        
      },
      //Colors collection
      colors: {
        base: "#6c3483", 
        complement: "#48a868", 
        secondary: "#9b59b6",
      },
      
    },
  },
  plugins: [],
};
