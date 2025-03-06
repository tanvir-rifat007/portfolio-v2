import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",

  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      animation: {
        "ping-large": "ping-large 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        "move-left": "move-left 30s linear infinite",
      },

      keyframes: {
        "ping-large": {
          "75%, 100%": {
            opacity: "0",
            transform: "scale(3)",
          },
        },
        "move-left":{
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },

        }
      },

      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },

      transitionProperty: {
        background: "background-color",
      },

      colors: {
        primary: "var(--color-primary)",
        background: "var(--color-background)",
        text: "var(--color-text)",
      },
    },
  },
  plugins: [],
};
export default config;
