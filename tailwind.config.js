module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:
      {
        komal:
        {
          50: '#ffe1f2',
          100: '#ffb1d4',
          200: '#ff7eb6',
          300: '#ff4c99',
          400: '#ff1a7c',
          500: '#e60063',
          600: '#b4004d',
          700: '#820037',
          800: '#500021',
          900: '#20000c',
        },
        bms: {
          50: "#edf1fc",
          100: "#d3d4e1",
          200: "#b6b8c9",
          300: "#989bb2",
          400: "#7c7f9b",
          500: "#636582",
          600: "#4c4f66",
          700: "#363849",
          800: "#2b3147",
          900: "#0a0a16",
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
