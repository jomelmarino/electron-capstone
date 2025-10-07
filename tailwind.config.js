/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/renderer/html/*.html",
    "./src/renderer/ts/*.ts",
  ],
  theme: {
    extend: {
      colors: {
        'app-blue-new': '#107DAC',
        'app-blue-light': '#1c7c9c',
        'btn-primary-blue': '#107DAC',
        'link-blue': '#1c7c9c',
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0,0,0,0.75)',
        DEFAULT: '2px 2px 5px rgba(0,0,0,0.85)',
        lg: '3px 3px 8px rgba(0,0,0,0.9)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': { textShadow: '1px 1px 2px rgba(0,0,0,0.75)' },
        '.text-shadow': { textShadow: '2px 2px 5px rgba(0,0,0,0.85)' },
        '.text-shadow-lg': { textShadow: '3px 3px 8px rgba(0,0,0,0.9)' },
      };
      addUtilities(newUtilities);
    },
  ],
};
