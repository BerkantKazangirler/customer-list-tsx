/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: '400px',
          md: '450px',
          lg: '728px',
          xl: '984px',
          '2xl': '1240px',
        },
      },
    },
  },
  plugins: [],
}