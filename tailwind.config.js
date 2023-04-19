/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        movemask: 'movemask 5s infinite',
        mymove: 'mymove 5s infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        mymove: {
          '50%': { 'box-shadow': '10px 20px 30px blue' }
        },
        movemask: {
          '0%': {
            '-webkit-mask-position': '10px 10px',
            '-webkit-transform': 'rotate(0deg)',
          },
          '50%': {
            'background-position': '20px 40px',
            '-webkit-mask-position': '100px 107px',
            '-webkit-transform': 'rotate(12deg)',
          },
          '80%': {
            'background-position': '100px 20px',
            '-webkit-mask-position': '-100px 107px',
            '-webkit-transform': 'rotate(-12deg) scale(1.2)',
          },
          '100%': {
            'background-position': '0 0',
            '-webkit-mask-position': '10px 10px',
            '-webkit-transform': 'rotate(0)',
          },
        },
        pulse: {
          '0%, 100%': {
            'box-shadow': '0 0 0 0 rgba(156, 163, 175, 0.3)',
          },
          '50%': {
            'box-shadow': '0 0 0 10px rgba(251, 113, 133, 0)',
          },
        },
        boxShadow: {
          'pink-600': '0 0 0 3px rgba(251, 113, 133, 0.5)',
        },
      },
      fontFamily: {
        akshar:['Akshar',...fontFamily.sans],
      },
    },
  },
  plugins: [],
}

