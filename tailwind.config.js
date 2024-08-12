// https://tailwindcss.com/docs/upgrade-guide#configure-content-sources
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        blue: {
          100: '#cce4ff',
          200: '#99c2ff',
          // ...
        },
      }
    },
  },
  plugins: [],
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
}