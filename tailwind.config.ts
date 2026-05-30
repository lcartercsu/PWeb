import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Apple palette
        "apple-gray": "#f5f5f7",
        "apple-text": "#1d1d1f",
        "apple-secondary": "#6e6e73",
        "apple-tertiary": "#86868b",
        "apple-border": "#d2d2d7",
        // Legacy (keep for subpages)
        ink: {
          DEFAULT: "#1d1d1f",
          soft: "#353535",
          muted: "#6e6e73",
        },
        bone: {
          DEFAULT: "#f5f5f7",
          warm: "#ece8e3",
          deep: "#e0dbd4",
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
        site: "1200px",
        editorial: "1180px",
        prose: "68ch",
      },
      letterSpacing: {
        eyebrow: "0.22em",
        badge: "0.18em",
      },
      fontSize: {
        eyebrow: ["0.72rem", { lineHeight: "1rem", letterSpacing: "0.22em" }],
      },
      boxShadow: {
        card: "0 1px 0 rgba(17,20,24,0.06), 0 12px 40px -24px rgba(17,20,24,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
