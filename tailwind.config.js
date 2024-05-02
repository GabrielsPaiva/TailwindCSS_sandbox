/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'auto-fit-100': 'repeat(auto-fill, minmax(100px, 1fr))',
      }
    },
  },
  plugins: [],
}

