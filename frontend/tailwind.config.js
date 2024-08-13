/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-heavy': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
      },
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

