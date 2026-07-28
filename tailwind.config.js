/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        page: { DEFAULT: '#ffffff', dark: '#0c0c12' },
        rail: { DEFAULT: '#f7f6fc', dark: '#121219' },
        card: { DEFAULT: '#fafafa', dark: '#17171f' },
        line: { DEFAULT: '#e7e6ee', dark: '#282833' },
        hero: '#0c0a1e',

        // Text
        ink: { DEFAULT: '#171717', dark: '#e9e9f0' },
        'ink-mut': { DEFAULT: '#525252', dark: '#a2a2b2' },
        'ink-dim': { DEFAULT: '#737373', dark: '#8b8b9a' },

        accent: {
          50: '#e7f7f4',
          100: '#b7e8df',
          200: '#6fcdbd',
          300: '#32a894',
          400: '#4dbfa9',
          500: '#0f766e',
          600: '#115e59',
          900: '#0e2b28'
        },
        accent2: {
          300: '#57bce8',
          500: '#168fc4'
        }
      },
      fontFamily: {
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif']
      },
      fontSize: {
        display: 'clamp(2.125rem, 7.5vw, 4.5rem)',
        header: 'clamp(1.375rem, 3.2vw, 2.125rem)',
        subheader: 'clamp(1rem, 2vw, 1.25rem)',
        title: '15px',
        body: '16px',
        'body-sm': '15px',
        label: '12px',
        caption: '11px'
      }
    }
  },
  plugins: []
}
