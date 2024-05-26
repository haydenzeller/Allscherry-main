import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#FFD0D0",
                
        "secondary": "#008fff",
                
        "accent": "#EEA0A0",
                
        "neutral": "#2f2a26",
                
        "base-100": "#303030",

        "base-200": "#FFB7B7",

        "base-300": "#AB7070"
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
export default config;
