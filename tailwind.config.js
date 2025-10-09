/** @type {import('tailwindcss').Config} */
module.exports = {
  // Add these paths to ensure Tailwind scans all your files
  content: [
    './src/renderer/html/**/*.html',
    './src/renderer/component/html/**/*.html',
    './src/renderer/**/*.js', // Also scan JS files if you add classes dynamically
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
