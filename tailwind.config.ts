import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily:{
        sans:'var(--font-sans)',
        serif:'var(--font-serif)',
      },
      animation:{
        'ping-large':"ping-large 1s ease-in-out infinite",
        'move-left':"move-left 1s linear infinite",
        'move-right':"move-right 1s linear infinite",
        'spin-border': "spin-border 7s linear infinite"
      },
      keyframes:{
        'ping-large':{
          '75%,100%':{
            transform:'scale(3)',
            opacity:'0',
          },
        },
        'move-left':{
          '0%':{
            transform:'translateX(0%)'
          },
          '100%':{
            transform:'translateX(-50%)'
          },
        },
        'move-right':{
          '0%':{
            transform:'translateX(-50%)'
          },
          '100%':{
            transform:'translateX(0%)'
          },
        },
        'spin-border': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }
    },
  },
  plugins: [],
};
export default config;
