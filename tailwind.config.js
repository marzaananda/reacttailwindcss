/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          500: '#FF4655', // Warna merah Valorant
          600: '#E83B46',
        },
      },
      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}