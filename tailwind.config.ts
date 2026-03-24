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
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F3E5AB",
          dark: "#AA8C2C"
        },
        beige: {
          DEFAULT: "#F5F5DC",
          light: "#FAF0E6",
        }
      },
      fontFamily: {
        sans: ["var(--font-modern)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
        display: ["var(--font-display)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
