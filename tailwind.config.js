/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'off-white': '#FAF9F6',
        'soft-gray': '#F5F5F5',
        'warm-gray': '#E8E8E8',
        primary: {
          DEFAULT: '#2D3648',
          light: '#3A4557'
        }
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'elegant': '0 4px 20px rgba(0, 0, 0, 0.07)'
      }
    },
  },
  plugins: [],
};