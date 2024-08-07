/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightest: '#FFC900',
        light: '#FFAD60',
        dark: '#FF8343',
        black: '#021526',
      },
      fontFamily: {
        sans: ['Biennale', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

