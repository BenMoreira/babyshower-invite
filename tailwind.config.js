/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pk': {
          100 : '#f3cdd8',
          200 : '#edb0c0',
        },
        'gr': {
          100 : '#a9b0a9'
        }
      }
    },
  },
  plugins: [],
}

