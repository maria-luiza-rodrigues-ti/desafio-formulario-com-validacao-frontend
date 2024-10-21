/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        container: '0px 5px 16px 0px rgba(8, 15, 52, 0.06)',
        input: '0px 2px 6px 0px rgba(19, 18, 66, 0.07)'
      }
    },
  },
  plugins: [],
}

