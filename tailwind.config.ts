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
        background: "var(--background)",
        foreground: "var(--foreground)",
        base: "var(--text-base)",
        subdued: "var(--text-subdued)",
        brightAccent: "var(--text-bright-accent)",
        negative: "var(--text-negative)",
        warning: "var(--text-warning)",
        positive: "var(--text-positive)",
        announce: "var(--text-announce)",
        elevatedBase: "#1f1f1f",
        highlight: "#1f1f1f",
        press: "#000",
        elevatedPress: "#191919",
        tintedBase: "hsla(0, 0%, 100%, .1)",
        tintedHighlight: "hsla(0, 0%, 100%, .14)",
        tintedPress: "hsla(0, 0%, 100%, .05)",
      },
    },
  },
  plugins: [],
};
export default config;
