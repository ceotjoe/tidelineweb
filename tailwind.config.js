/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FFFCF6',
          100: '#FAF6EE',
          200: '#F6F1E7',
          300: '#EDE4D4',
          400: '#E1D4BD',
          500: '#CFBC9D',
        },
        deepsea: {
          800: '#16292E',
          900: '#0F1E22',
          950: '#091316',
        },
        seafoam: {
          50: '#F2F8F6',
          100: '#E3F0EC',
          200: '#CBE5DE',
          300: '#9FD3C7',
          400: '#7FD1C3',
          500: '#48AB9E',
          600: '#2A8B80',
          700: '#1F6F68',
          800: '#1A5954',
          900: '#174A46',
        },
        nightred: {
          500: '#FF4433',
          600: '#E63020',
          700: '#CC2214',
          800: '#8A140A',
          900: '#470904',
          950: '#0D0000',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      animation: {
        'wave-slow': 'wave 12s ease-in-out infinite alternate',
        'wave-fast': 'wave 7s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0) translateZ(0) scaleY(1)' },
          '50%': { transform: 'translateX(-25%) translateZ(0) scaleY(1.05)' },
          '100%': { transform: 'translateX(-50%) translateZ(0) scaleY(1)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
