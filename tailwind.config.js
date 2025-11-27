/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0F2D3A",
        accent: "#F59E0B",
        light: "#F4F6F8",
        text: "#20262A",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },

      /* ------------------------------
         추가된 부분: 드롭다운 애니메이션
      ------------------------------ */
      keyframes: {
        dropdown: {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        dropdown: "dropdown 0.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};