/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          100: '#9873e1',
          200: '#7d50d3',
          300: '#6f35d3',
          500: '#6200d9',
          600: '#5101b6'
        }
      }
    }
  },
  plugins: []
}
