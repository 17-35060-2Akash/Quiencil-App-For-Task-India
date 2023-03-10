/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    /* themes: [
      {
        doctortheme: {
          primary: '#2343fe',
          secondary: '#ff1f59',
          accent: "#37CDBE",
          neutral: "#3A4256",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#ffc107",
          "error": "#fd1745",
        }
      }
    ] */
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
