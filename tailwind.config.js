/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'max': '768px' },

      'md': { 'min': '769px', 'max': '1024px' },

      'lg': { 'max': '1535px' },

      'xl': { 'max': '1280px' },

      '2xl': { 'min': '1536px' },
    },
    extend: {
      fontFamily: {
        sans : ["Roboto", "sans-serif"]
      },
      keyframes: {
        wiggle: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        opacity: 'wiggle 0.5s linear',
      },
    },
  },
  plugins: [],
}

