/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '196': '49rem',
        '220': '55rem',
      },
      lineHeight: {
        '27': '6.75rem',
        '18': '4.5rem'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

