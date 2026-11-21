/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          900: "#14532d",
        },
        earth: {
          50: "#fbfdf8",
          100: "#f1f5e9",
          200: "#dce6c4",
          300: "#bcd08f",
          400: "#9db96a",
          500: "#82a84e",
          600: "#6a8c41",
          800: "#4a6b30",
          900: "#334d22",
        },
        bark: {
          50: "#fbfaf7",
          100: "#f1ede4",
          200: "#e3d8c9",
          300: "#d0c2ae",
          400: "#bba382",
          500: "#a48c68",
          600: "#8c7354",
          800: "#6d5740",
          900: "#4e3d2e",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
      animation: {
        "sniff-trail": "sniffTrail 6s linear infinite",
        "paw-pulse": "pawPulse 2.5s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        sniffTrail: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateX(120vw)", opacity: "0" },
        },
        pawPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.2)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      borderRadius: {
        puzzle: "16px",
      },
    },
  },
  plugins: [],
}
