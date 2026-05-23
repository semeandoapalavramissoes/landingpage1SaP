import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"Source Sans 3"', "sans-serif"],
      },
      colors: {
        primary: "hsl(36 80% 50%)",
        secondary: "hsl(220 25% 20%)",
        accent: "hsl(16 65% 55%)",
        background: "hsl(40 33% 97%)",
        foreground: "hsl(220 30% 15%)",
        muted: "hsl(40 20% 90%)",
        card: "hsl(40 30% 95%)",
        warm: "hsl(30 40% 92%)",
        gold: "hsl(45 90% 55%)",
        earth: "hsl(25 35% 35%)",
        sky: "hsl(200 60% 45%)",
      },
      boxShadow: {
        soft: "0 4px 20px -4px hsl(220 30% 15% / 0.1)",
        card: "0 8px 30px -8px hsl(220 30% 15% / 0.12)",
        glow: "0 0 40px -10px hsl(36 80% 50% / 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;