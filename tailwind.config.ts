import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        txt: "#363636",
        "txt-light": "#1a1b1f",
        
        primary: "#C92037",
        "primary-op": "rgba(201, 32, 55, .6)",
        
        back: "#EAEFF4",
        "back-strong": "#F5FAFF",
        "back-transparent": "rgb(255,255,255,0.6)",
        "half-transparent": "rgb(0,0,0,0.8)",
        divide: "#D9D9D9",
      },
      transitionProperty: {
        width: "width",
      },
      rotate: {
        _45: "-45deg",
      },
      divideWidth: {
        '16': '16px'
      },
      boxShadow: {
        't': '0px 0px 20px 2px rgba(0, 0, 0, 0.3)',
      },
      inset: {
        'neg': '-.7rem',
        'pos': '.5rem'
      }
    },
  },
  plugins: [],
};
export default config;
