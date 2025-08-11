/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx,jsx,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SF Pro Display', 'SF Pro Text', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        base: {
          50: '#f5f7fa',
          100: '#eceff3',
          800: '#1d1f23',
          900: '#141518'
        }
      },
      backdropBlur: {
        xs: '2px'
      },
      boxShadow: {
        'soft': '0 4px 24px -4px rgba(0,0,0,0.18)',
        'inner-glow': 'inset 0 0 0 1px rgba(255,255,255,0.08)'
      }
    },
  },
  plugins: []
};
