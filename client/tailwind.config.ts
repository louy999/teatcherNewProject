import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary100: "#d4eaf7",
        primary200: "#b6ccd8",
        primary300: "#3b3c3d",
        accent100: "#71c4ef",
        accent200: "#00668c",
        text100: "#1d1c1c",
        text200: "#313d44",
        bg100: "#fffefb",
        bg200: "#f5f4f1",
        bg300: "#cccbc8",
        tub: "#FF0000",
      },
      plugins: [require("flowbite/plugin")],
    },
  },
  plugins: [],
};
export default config;
