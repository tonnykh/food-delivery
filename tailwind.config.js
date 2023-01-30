/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    colors: {
      'gray-dark': 'hsl(202, 57%, 15%)',
      gray: 'hsl(201, 23%, 34%)',
      'gray-light': 'hsl(203, 15%, 47%)',
      'gray-lighter': 'hsl(208, 18%, 93%)',
      'gray-semi-transparent': 'hsl(0deg 0% 100% / 95%)',
      'brown-light': 'hsl(12, 30%, 42%)',
      'blue-light': 'hsla(203, 58%, 15%, 0.051)',
      white: 'rgb(255 255 255)',
    },
    fontWeight: {
      normal: '400',
      bold: '600',
    },
    borderRadius: {
      sm: '6px',
      md: '20px',
    },
  },
  plugins: [],
};
