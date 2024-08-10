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
        primary100: "#0070C0",
        primary200: "#004E86",
        primary300: "#6EC3FF",
        accent100: "#FFC000",
        accent200: "#B38600",
        text100: "#333333",
        text200: "#737373",
        bg100: "#F5F5F5",
        bg200: "#E9E9E9",
        bg300: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
