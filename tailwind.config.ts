import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#111418",
          soft: "#1c2025",
          muted: "#4a4f57",
        },
        bone: {
          DEFAULT: "#f6f2ec",
          warm: "#efe8dd",
          deep: "#e6ddcd",
        },
        gold: {
          DEFAULT: "#8a6d3b",
          soft: "#b18a52",
          line: "#c9b48a",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        editorial: "1180px",
        prose: "68ch",
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      fontSize: {
        eyebrow: ["0.72rem", { lineHeight: "1rem", letterSpacing: "0.22em" }],
      },
      boxShadow: {
        card: "0 1px 0 rgba(17, 20, 24, 0.06), 0 12px 40px -24px rgba(17, 20, 24, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
