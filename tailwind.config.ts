import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        mono: ["var(--font-space-mono)"],
        body: ["var(--font-rajdhani)"],
      },
    },
  },
  plugins: [],
  // Performance optimization
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
