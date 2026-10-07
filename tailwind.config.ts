import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080c14",
        surface: {
          50: "#131826",
          100: "#101522",
          200: "#0d111d",
          300: "#090d16",
        },
        border: {
          subtle: "#1c2438",
          strong: "#2a3652",
        },
        accent: {
          DEFAULT: "#00d2ff",
          hover: "#38bdf8",
          glow: "rgba(0, 210, 255, 0.15)",
        },
        emerald: {
          custom: "#10b981",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        "dots-pattern": "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(0, 210, 255, 0.2)",
        "glow-sm": "0 0 15px -3px rgba(0, 210, 255, 0.15)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
