/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pageBackground': "url('./src/assets/spring-tree-planting-scaled.jpg')",
      },
      colors: {
        customSecondaryCyprus: '#113B47',
        customTertiaryGreen: '#9A9901',
      },
      fontFamily: {
        californian: ['Californian FB', 'serif'], // Add this line
        calibriRegular: ['Calibri Regular', 'sans-serif'], // Add Calibri font\
        calibriBold: ['Calibri Bold', 'sans-serif'],
        chilankaRegular: ['Chilanka Regular'],
      },
    },
  },
  plugins: [],
}

