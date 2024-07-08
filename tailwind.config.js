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
        pc: "url('https://s3-alpha-sig.figma.com/img/380c/4e9a/a66706e109cf3dea10402edaa934e34d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GEsu6LPxCnGoeIKx1HVIWOGCIqTrllTXSxmBX-l5hwPSvJ9BUgYiytDAeztN1~0D45cHDBtpOr7Yv3Yp36lktL4agatPLUqsFhLVXmL9HdgyGlGVwMqhagMhlRCO6Mg0dGilnk1ReJ98rFMMweJpFpuCT48i5TnZmtxhDkaL3p1RcNihlPljd8qISKZkZ~GhQwKSstpxxqcbiyrs0Rd6TNRNAz9p9FQvDwPhcyCxL0DpZXeYqF6FOqvyXoJRrs5rxzccyN3qc3bY4oJhjqK3tbDEYOjZ3DC1NQhP41csJUaWUsvBEVsyAe61rsD6ZiaTTc71Fqf-AuGBTY4fI7OU5w__')",
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
