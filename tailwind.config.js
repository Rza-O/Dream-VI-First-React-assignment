/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0cd471',
      },
      backgroundImage: {
        'banner-shadow': "url('./public/assets/bg-shadow.png')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

