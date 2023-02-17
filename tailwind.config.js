/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{jsx,ts,html,js}',
    './components/**/*.{jsx,ts,html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons',
      },
      colors: {
        'indigoDye': '#034078',
        'oxfordBlue': '#0A1128',
        'royalBlueDark': '#001F54',
        'cgBlue': '#1282A2',
        'white': '#FEFCFB',
        'honeyYellow': '#F6AE20',
      },
    }
  },
  plugins: [],
}