/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        primary: '#02C277',
        secondary: '#707070',
        greenButton: '#009E60',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        serif: ['ui-serif', 'Georgia'],
        beVietNamPro: ['Be Vietnam Pro', 'sans-serif'],
      },
    },
    screens: {
      xs: '370px',
      ss: '620px',
      sm: '700px',
      md: '868px',
      mg: '1080px',
      lg: '1220px',
      xl: '1500px',
    },
    paths: {
      'images/*': ['assets/images/*'],
      'svg/*': ['assets/*'],
    },
  },

  plugins: [],
};
