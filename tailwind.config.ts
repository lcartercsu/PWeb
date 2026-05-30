import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#f5f5f7",
          200: "#d2d2d7",
          500: "#86868b",
          600: "#6e6e73",
          900: "#1d1d1f",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "980px",
        wide: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
