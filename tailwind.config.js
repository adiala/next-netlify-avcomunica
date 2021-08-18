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
      backgroundImage: theme => ({
        'contact': "url('public/contact.jpg')",
        'profile': "url('public/adriana-perfil.jpg')",
       }),
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
        '1/2': '40vh',
        '3/4': '75vh',
       },
      colors: {
        background: "#fee7d7ff",
        primary: '#f66c13',
        secondary: '#6c2d04ff',
      },
    },
  },
  variants: {
    extend: {
      
      margin: ['last'],},
  },
  plugins: [],
}
