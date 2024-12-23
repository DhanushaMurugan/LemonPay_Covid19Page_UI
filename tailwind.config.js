/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },

          
        },
      },
      animation: {
        slide: 'slide 12s linear infinite',

       
      },
      screens: {
        sm:'640px',
        md: '768px',
        lg: '1024px',},
    
    },
  },
  plugins: [],
}

