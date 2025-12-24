import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/preline/dist/*.js'],

  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        primary: ['FiraCode', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        dark: '#1a1a1a',
        'gray-dark': '#2a2a2a',
        'gray-light': '#f2f2f2',
      },

      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(4deg)',
          },
          '75%': {
            transform: 'rotate(-4deg)',
          },
        },
        swiper: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        linearLoading: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(200%)',
          },
        },
      },
      animation: {
        swiper: 'swiper 30s infinite linear alternate',
        tilt: 'tilt 10s infinite linear',
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        linearLoading: 'linearLoading 1.3s ease-in-out infinite ',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin.js'),
    require('tailwindcss-animate'),
  ],
} satisfies Config;
