/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {
      height: {
        ninety: '90%',
        eighty: '85%',
      },
      width: {
        eighty: '80%',
      },
      fontFamily: {
        varela: ['Varela'],
      },
      backgroundColor: {
        theme1: '#354f60',
        purple: '#bc0ec4',
        inputGray: 'rgb(249,249,249)',
      },
      colors: {
        gray: '#354f60',
        purple: '#bc0ec4',
        theme1: 'rgb(229, 229, 229)',
      },
      boxShadow: {
        button: '0 0 15px #bc0ec4',
        welcome: '2px 2px 8px rgb(120,120,120),  2px 2px 8px rgb(120,120,120)',
      },
    },
  },
  plugins: [],
};
