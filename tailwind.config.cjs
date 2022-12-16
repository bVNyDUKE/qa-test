/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          //- Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
          950: 'hsl(209, 23%, 22%)',
          // - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
          955: 'hsl(207, 26%, 17%)',
          // - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
          960: 'hsl(200, 15%, 8%)',
        },
        grey: {
          // - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
          950: 'hsl(0, 0%, 52%)',
          // - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
          955: 'hsl(0, 0%, 98%)',
          // - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
        },
      },
    },
  },
  plugins: [],
};
