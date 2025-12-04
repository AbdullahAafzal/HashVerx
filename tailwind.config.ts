import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0859B2",
          dark: "#064080",
          light: "#0a6bc4",
        },
        secondary: {
          DEFAULT: "#51CFDF",
          light: "#6dd9e8",
          dark: "#3db8c9",
        },
        accent: {
          DEFAULT: "#ffffff",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #0859B2 0%, #064080 100%)",
        "gradient-secondary": "linear-gradient(135deg, #51CFDF 0%, #3db8c9 100%)",
        "gradient-mixed": "linear-gradient(135deg, #0859B2 0%, #51CFDF 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

