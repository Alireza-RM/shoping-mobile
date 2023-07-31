/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily:{
          sans : ["Vazir"]
        }
      },
    },
    plugins: [
      require("@tailwindcss/forms")({
        strategy: 'class', 
      }),
    ],
  }