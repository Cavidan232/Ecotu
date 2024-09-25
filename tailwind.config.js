/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Login': "url('https://preview.colorlib.com/theme/feliciano/images/bg_1.jpg')",
      },
      colors:{
        "custom-dark": "#000000",
        "custom-green":"#0F766E",
        "custom-black": "#141313",
        "fff":"#d3cab6"      },
      container: {
        center: true,
        padding: '2rem',
      },
      fontFamily: {
        'great-vibes': ['Nothing You Could Do', 'Open sans'],
      },
    },
  },
  plugins: [],
}