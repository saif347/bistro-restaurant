/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing:{
      widest:'1em',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

