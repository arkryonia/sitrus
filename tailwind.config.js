const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        ...defaultTheme.screens
      },
      colors: {
        'i-teal': '#3ca3a0',
        'i-cinnabar': '#e6412a',
        'i-blue': '#f4faff',
        'i-gray': '#eeefef',
        'i-black': '#08090a',
        'i-violet': '#3b429f',
      },
    },
  },
  plugins: [],
}
