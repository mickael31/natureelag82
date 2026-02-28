import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: {
          50: "#edf7f1",
          100: "#d7ecdf",
          200: "#b2d8c0",
          300: "#83bd99",
          400: "#4f9e6e",
          500: "#347f53",
          600: "#2a6543",
          700: "#225137",
          800: "#1d422f",
          900: "#19362a"
        },
        sand: {
          100: "#f7f1e5",
          200: "#efe5d1",
          300: "#e1cfab",
          400: "#d2b985"
        },
        charcoal: {
          800: "#1f2623",
          900: "#161c1a"
        }
      },
      fontFamily: {
        display: ["Oswald", "Arial Narrow", "sans-serif"],
        body: ["Nunito Sans", "Segoe UI", "sans-serif"]
      },
      backgroundImage: {
        "grain-overlay": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)"
      },
      keyframes: {
        floatIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        floatIn: "floatIn 700ms ease-out forwards"
      }
    }
  },
  plugins: []
} satisfies Config;
