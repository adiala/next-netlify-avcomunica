module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'roboto': ['"Roboto"', 'system-ui'],
      'lato': ['"Lato"', 'system-ui'],
     },
     textColor: {
      'primary': '#C55E2B',
     },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
