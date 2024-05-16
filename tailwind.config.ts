import { Poppins } from "next/font/google";

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: {
          50: "#1D3B31",
        },
        secondary: {
          50: "#F4FAFF",
        },
        dark: {
          50: "#0A0909",
          100: "#2D2E2E",
        },
        grey: {
          50: "#F7FAFC",
          100: "#656565",
        },
        lightBlue: {
          50: "#E6EDFD",
        },
        white: {
          50: "#FFFFFF",
        },
        success: {
          50: "#a7c957",
        },
        error: {
          50: "#e63946",
        },
        warning: {
          50: "##5e548e",
        },
        info: {
          50: "#669bbc",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      shadow: {
        "3xl": "0px 0px 50px rgba(0, 0, 0, 0.15)",
        "4xl": ["0 35px 35px rgba(0, 0, 0, 0.25)", "0 45px 65px rgba(0, 0, 0, 0.15)"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

