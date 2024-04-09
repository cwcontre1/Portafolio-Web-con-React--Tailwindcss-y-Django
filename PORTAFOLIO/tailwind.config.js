/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    
      maxWidht: {
        '1700': '1800px'
      },
    fontFamily:{
      'overlock': ['Overlock', 'sans-serif'],
      'dancing': ["Dancing Script", "cursive"],
    },
    dropShadow: {
        '3xl': '0 4px 3px rgba(255, 255, 255, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      colors:{
        "orange-button":"#ff561e",
        "idu-color-tp":"#c9d41e",
        "idu-color-md":"#bbc71f",
        "idu-color-bt":"#99a525",
        "footer-color":"#0f172a",
        "footer-color-opacity":"rgba(15, 23, 42,.7)",
        "footer-text":"#4983F9",
        "form-opacity":"rgba(200, 200, 200, 0.1)",
        "whatsapp-color": "#25D366",
      }
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
}