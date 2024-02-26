/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "redPalatte":"#B784B7"
      },
      fontFamily:{
        "fontFamily":"Noto Sans"
      }
    },
  },
  plugins: [],
}

