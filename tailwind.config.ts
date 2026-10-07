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
        background: "#030508",
        surface: {
          50: "#121722",
          100: "#0d111a",
          200: "#090d14",
          300: "#05070c",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          strong: "rgba(255, 255, 255, 0.18)",
        },
        accent: {
          DEFAULT: "#00e599",
          hover: "#05f5a5",
          glow: "rgba(0, 229, 153, 0.2)",
          dark: "#034d35",
        },
        cyan: {
          custom: "#00e599",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        "vertical-stripes": "repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0px, rgba(255, 255, 255, 0.05) 2px, transparent 2px, transparent 12px)",
        "stripes-dense": "repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0px, rgba(255, 255, 255, 0.08) 2px, transparent 2px, transparent 8px)",
      },
      boxShadow: {
        glow: "0 0 25px -4px rgba(0, 229, 153, 0.3)",
        "glow-sm": "0 0 15px -3px rgba(0, 229, 153, 0.2)",
        card: "0 4px 30px -4px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
