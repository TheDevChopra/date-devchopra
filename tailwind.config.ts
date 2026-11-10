import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F0",
        blush: "#F7E4E5",
        "soft-blush": "#F7E4E5",
        rose: {
          DEFAULT: "#E9A8B0",
          light: "#F5CCD1",
          dark: "#D4828C",
        },
        ink: {
          DEFAULT: "#24252B",
          soft: "#454752",
          muted: "#737686",
        },
        cocoa: {
          DEFAULT: "#765747",
          light: "#9A7360",
          soft: "#B89481",
        },
        sage: {
          DEFAULT: "#DDE8D8",
          light: "#EEF4EB",
          dark: "#BDD1B5",
        },
        powder: {
          DEFAULT: "#DCE8F4",
          light: "#EDF4FB",
          dark: "#B8D4EE",
        },
        butter: {
          DEFAULT: "#F6E7B8",
          light: "#FCF4DA",
          dark: "#EAD690",
        },
        paper: "#FFFCF8",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "DM Sans", "Inter", "sans-serif"],
        handwriting: ["var(--font-hand)", "Caveat", "cursive"],
      },
      boxShadow: {
        scrapbook: "0 10px 30px -10px rgba(118, 87, 71, 0.12), 0 4px 12px -2px rgba(36, 37, 43, 0.05)",
        "polaroid": "0 8px 24px -4px rgba(36, 37, 43, 0.12), 0 2px 6px -1px rgba(36, 37, 43, 0.06)",
        "sticker": "0 4px 14px 0 rgba(36, 37, 43, 0.08)",
        "hover-card": "0 20px 40px -15px rgba(118, 87, 71, 0.2)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "petal-sway": "sway 3s ease-in-out infinite alternate",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        sway: {
          "0%": { transform: "rotate(-6deg) translateX(-5px)" },
          "100%": { transform: "rotate(6deg) translateX(5px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
