/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', 
        secondary: '#6B7280', 
        lightBg: '#ffffff',
        darkBg: '#1F2937',
        darkText: '#F3F4F6',
      },
      fontFamily: {
        sans: ['"Roboto"', '"Open Sans"', 'sans-serif'],
      },
    },
  
  },
 darkMode: 'class', 
  plugins:[require('@tailwindcss/typography')],
}

