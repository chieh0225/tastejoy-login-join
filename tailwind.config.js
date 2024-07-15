/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        // min-width 斷點
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",

        // max-width 斷點
        "max-sm": { max: "639px" },
        "max-md": { max: "767px" },
        "max-lg": { max: "1025px" },
        "max-xl": { max: "1279px" },
      },
      backgroundImage: {
        pc: "url('/src/images/bg.jpg')",
      },
      colors: {
        green: {
          1: "#ebe5ba",
          2: "#BDB890",
          3: "#87835d",
          4: "#6f6d55",
        },
      },
      spacing: {
        15: "60px",
        27: "108px",
        34: "136px",
        35: "140px",
      },
      keyframes: {
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-in-right": "slide-in-right 0.3s ease-in-out none",
      },
    },
  },
  plugins: [],
};
