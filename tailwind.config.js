/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    important: "#root",
    theme: {
      extend: { 
        colors: {
          'regal-blue': '#243c5a',
        },
      },
    },
    plugins: [],
  }