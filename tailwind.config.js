/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-bg-light": "#3D285F",
        "purple-bg-dark": "#1E1E1E",
        "white-ice": "#D9D9D9",
        "button-bg": "#3A3550",
        "click-active": "#2E2E2E"
      },
      backgroundImage: {
        'texture': "url('../src/assets/Texture.svg')",
      },
      fontFamily: {
        'AbrilFatFace': "Abril Fatface",
      }
    },
    plugins: [],
  }
}
