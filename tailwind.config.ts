import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

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
    colors: {
      // theme
      "theme-100-light": "#5438C7",
      "theme-100-dark": "#785DE5",
      "theme-ex-light-light": "#5438C710",
      "theme-ex-light-dark": "#785DE510",
      "theme-light-light": "#5438C720",
      "theme-light-dark": "#785DE520",
      "theme-mid-light": "#5438C740",
      "theme-mid-dark": "#785DE540",
      "theme-dark-light": "#5438C760",
      "theme-dark-dark": "#785DE560",

      // text
      "dark-text-100-light": "#070C15",
      "dark-text-100-dark": "#FFF8F1",
      "dark-text-60-light": "#070C1560",
      "dark-text-60-dark": "#FFF8F160",
      "dark-text-40-light": "#070C1530",
      "dark-text-40-dark": "#FFF8F130",

      // background
      "background-light": "#FFF8F1",
      "background-dark": "#070C15",
      "background-60-light": "#FFF8F160",
      "background-60-dark": "#070C1560",
      "background-80-light": "#FFF8F180",
      "background-80-dark": "#070C1580",

      // gray
      "gray-ex-light-light": "#070C1505",
      "gray-ex-light-dark": "#FFF8F110",
      "gray-mid-light": "#070C1540",
      "gray-mid-dark": "#FFF8F140",
      "gray-light-light": "#070C1520",
      "gray-light-dark": "#FFF8F120",
    },
  },
  plugins: [],
} satisfies Config;
