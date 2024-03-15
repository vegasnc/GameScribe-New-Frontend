import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const colors = require('tailwindcss/colors');

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        button: "var(--button-font)",
        shortcut: "var(--font-sans)",
        stat: "var(--stat-font)",
      },
      animation: {
        "stat-slide": "slideLeft .5s ease-in-out linear",
        "dice-fade": "fade-in .5s ease-in-out linear",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-10px)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
    // eslint-disable-next-line
    colors: {
      // theme
      theme: "hsl(var(--color-theme) / <alpha-value>)",
      "theme-ex-light": "hsl(var(--color-theme) / .10)",
      "theme-light": "hsl(var(--color-theme) / .20)",
      "theme-mid": "hsl(var(--color-theme) / .40)",
      "theme-dark": "hsl(var(--color-theme) / .60)",

      // text
      text: "hsl(var(--color-text))",
      "text-60": "hsl(var(--color-text) / .60)",
      "text-40": "hsl(var(--color-text) / .40)",

      // background
      bg: "hsl(var(--color-bg) / <alpha-value>)",
      "bg-60": "hsl(var(--color-bg) / .60)",
      "bg-80": "hsl(var(--color-bg) / .80)",

      // gray
      "gray-ex-light": "hsl(var(--color-gray) / .05)",
      "gray-mid": "hsl(var(--color-gray) / .10)",
      "gray-light": "hsl(var(--color-gray) / .20)",
      ...colors,
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
} satisfies Config;
