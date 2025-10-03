/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. CONTENT: Tell Tailwind to scan your HTML file for classes
  content: [
    "./src/renderer/html/*.html", 
    "./src/renderer/ts/*.ts", 
    // You can add "./*.js" later if you use JavaScript files for structure
  ],
  theme: {
    extend: {
      // 2. EXTEND: Define custom colors
      colors: {
        // NEW BACKGROUND COLOR: #107DAC
        'app-blue-new': '#107DAC', 

        // Lighter blue for links/accents (kept from original mobile design)
        'app-blue-light': '#1c7c9c', 
        
        // PRIMARY BUTTON COLOR: Use the new background blue for the main (remaining) button
        'btn-primary-blue': '#107DAC', 
        
        // Link color (kept from original mobile design)
        'link-blue': '#1c7c9c', 
      },
    },
  },
  plugins: [],
}