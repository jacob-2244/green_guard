import { ZoomOut, ZoomOutIcon } from "lucide-react";
import type { Config } from "tailwindcss";
const colors = require("./src/constants/colors.js");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        greenfont: ["var(--font-greenfont)"],
      },

      keyframes: {
        "to-and-fro": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(25%)" },
        },

        "zoom-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(2.2)" },
        },

        "zoom-pulse-small": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.4)" },
        },

        "to-and-fro-down": {
          "0%, 100%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateY(-25%)" },
          "75%": { transform: "translateX(25%) translateY(-25%)" },
        },
      },
      animation: {
        "to-and-fro": "to-and-fro 3s ease-in-out infinite",
        "zoom-pulse": "zoom-pulse 3s ease-in-out infinite",
        "to-and-fro-down": "to-and-fro-down 5s ease-in-out infinite",
        "spin-slow": "spin 10s linear infinite",
        "zoom-pulse-small": "zoom-pulse-small 3s ease-in-out infinite",
      },
    },
  },

  fontSize: {
    "custom-14": ["14px", "21px"],
  },

  plugins: [
    require("tailwindcss-animate"),
    require("@designbycode/tailwindcss-text-stroke"),
  ],
};
export default config;
