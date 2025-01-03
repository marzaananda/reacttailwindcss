/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          500: '#FF4655',
          600: '#E83B46',
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        quantico: ['Quantico', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
