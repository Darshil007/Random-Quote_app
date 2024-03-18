/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        madimi : ["Rubik, sans-serif"],
      },
      colors:{
        'green1' : '#16A085',
        'green2' : '#27AE60',
        'navyBlue' : '#2C3E50',
        'yellow1' : '#F39C12',
        'tomato' : "#F8719D",
        'purple' : '#9B59B6',
        'lightRed' : '#FB6964',
        'brown' : '#472E32',
        'yellow2' : '#BDBB99',
        'lightBlue' :'#77B1A9',
        'green3' : '#73A857',
      }
    },
  },
  plugins: [],
}

