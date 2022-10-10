/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Barlow Semi Condensed', 'Sans-serif']
    },
    extend: {
      screens: {
        'sm': '376px',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '7': 'repeat(7, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}
