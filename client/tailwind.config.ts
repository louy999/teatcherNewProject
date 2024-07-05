import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      back: "#ffffff",
      textO: "#9C9C9C",
      textT: "#49c5b6",
      black: "#000",
      primary100: "#B3E5FC",
      primary200: "#95c7dd",
      primary300: "#528398",
      accent100: "#4DB6AC",
      accent200: "#005851",
      text100: "#37474F",
      text200: "#62727b",
      bg100: "#FFFFFF",
      bg200: "#f5f5f5",
      bg300: "#cccccc",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      plugins: [require("flowbite/plugin")],
    },
  },
  plugins: [],
};
export default config;
