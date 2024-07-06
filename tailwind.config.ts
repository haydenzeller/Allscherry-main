import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'right-bottom': '10px 10px 2px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#FFD0D0",
                
        "secondary": "#FFDBDB",
                
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
