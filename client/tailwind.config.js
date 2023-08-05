/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        reddit_dark: {
          DEFAULT: '#16161D',
          brighter: '#272728',
        },
        reddit_border: {
          DEFAULT: '#343536',
        },
      },
    },
  },
  plugins: [],
}

