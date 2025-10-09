/** @type {import('tailwindcss').Config} */
module.exports = {
  // Add these paths to ensure Tailwind scans all your files
  content: [
    './src/renderer/frontend/**/*.html',
    './src/renderer/components/html/**/*.html',
    './src/renderer/**/*.js', // Also scan JS files if you add classes dynamically
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
