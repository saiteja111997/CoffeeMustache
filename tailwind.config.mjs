/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include the app directory
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        offwhite: '#f9f9f7',
        beige: '#f5f5dc',
        brown: '#8b5e3c',
      },
    },
  },
  plugins: [],
};
