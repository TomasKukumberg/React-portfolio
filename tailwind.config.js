/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(calc(-150px * 5))'}, 
        }
      },
      animation: {
        'scroll': 'scroll 15s 0.5s linear infinite',
      }
    },
  },
  plugins: [],
}

