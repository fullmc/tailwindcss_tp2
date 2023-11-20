/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    fontSize: {
      'title' : '52px'
    },
    extend: {     
      colors: {
       'blue' : '#4083E1',
       'blackish' : '#0C0C0D',
       'grayish' : '#AFAFAF'    
      },
      backgroundImage: {
        'banner': "url('/src/assets/banner.jpg')",
      },
      borderRadius: {
        '4xl': '0.5rem',
        '8xl': '12rem',
      },
      lineHeight: {
        '12': '3rem',
        '15': '4rem',
      },
    },
  },
  plugins: [],
}

