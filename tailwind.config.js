/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      spacing: {
        13: '3.25rem',
      },
      fontFamily:{
        inter:['Inter']
      },
      colors:{
        wpu:'#bada55',
        kopi:'c0ffee',
        primary:'#0f766e',
        dark:'#0f172a',
        secondary:'#64748b',
      },
      screens: {
        '2xl':'1320px'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        goyang: 'goyang 1s ease-in-out infinite',
      },
      keyframes:{
        goyang: {
          '0%, 100%':{ transform: 'rotate(-3deg)'},
          '50%':{ transform: 'rotate(3deg)'}
        }
      }
    },
    
  },
  plugins: [],
}
