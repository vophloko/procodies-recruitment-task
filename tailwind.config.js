const animate = require('tailwindcss-animate')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1232px',
      },
    },
    fontSize: {
      '2xs': ['10px', '16px'],
      'xs': ['12px', '16px'],
      'sm': ['14px', '16.41px'],
      'base': ['16px', '24px'],
      'lg': ['20px', '23.44px'],
      'xl': ['22px', '25.78px'],
      '2xl': ['32px', '37.5px'],
      '3xl': ['38px', '44.53px'],
      '4xl': ['48px', '52px'],
      '5xl': ['52px', '55px'],
    },
    extend: {
      fontFamily: {
        sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': {
          1: '#2D473E',
          2: '#293632',
          3: '#006340',
        },
        'brand-gray': {
          1: '#DBDBDB',
          2: '#808080',
          3: '#ADADAD',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [animate],
}
