/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0DB760',
        secondary: '#323433'
      },
      fontFamily: {
        inter: "'Inter', sans-serif"
      }
    }
  },
  plugins: [require('daisyui')]
}
