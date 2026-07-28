/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#e7f7f4',
          100: '#b7e8df',
          200: '#6fcdbd',
          300: '#32a894',
          500: '#0f766e',
          600: '#115e59'
        },
        accent2: {
          50: '#e6f7ff',
          100: '#b9e7fb',
          300: '#57bce8',
          500: '#168fc4',
          600: '#0d719e'
        }
      },
      fontFamily: {
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif']
      },
      fontSize: {
        display: '60px',
        header: '30px',
        subheader: '18px',
        title: '15px',
        body: '16px',
        'body-sm': '15px',
        label: '12px',
        caption: '11px'
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px'
      }
    }
  },
  plugins: []
}
