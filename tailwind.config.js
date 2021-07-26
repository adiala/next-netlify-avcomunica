module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './public/**/*.html',
  './src/**/*.{js,jsx,ts,tsx,vue}',],
  darkMode: false, // or 'media' or 'class'
  theme: {    
    fontFamily: {
      'roboto': ['"Roboto"', 'system-ui'],
      'lato': ['"Lato"', 'system-ui'],
      'rubik': ['"Rubik"', 'sans-serif'],
     },
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity:'0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity:'1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      },
      height: {
        '1/4': '25vh',
        '1/2': '45vh',
        '3/4': '75vh',
       },
      colors: {
        background: "#fefaf2",
        primary: '#f66c13',
        secondary: '#942704',
      },
    },
  },
  variants: {
    extend: {
      
      margin: ['last'],},
  },
  plugins: [],
}
