/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryl:'#F0F4F9',
        primaryd:'#1E1F20',
        secondryl:'#FFFFFF',
        secondryd:'#131314',
        fntl:"black",
        fntd:"white",
        fntbgd:"#1A1A1C"

      }
    },
  },
  plugins: [],
}
