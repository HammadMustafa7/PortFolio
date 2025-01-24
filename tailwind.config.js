/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Custom breakpoint for extra small screens
        xsm: '500px',
        xxsm: '330px',
      },
      fontFamily: {
        saira: ['"Saira"', 'sans-serif'], // Add Saira font
      },
      animation: {
        bounce2: 'bounce2 2s infinite',
        rotateme: "rotateme 5s linear infinite",
        typewriter: 'typewriter 6s steps(50, end) forwards 2s 1000 alternate',
        caret: 'typewriter 6s steps(50, end) forwards 2s 1000 alternate, blink 1s steps(50, end) infinite 2s',
      },
      keyframes: {
        rotateme: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" }, 
          "100%": { transform: "rotate(360deg)" },
        },
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
        bounce2: {
          '0%, 100%': {
            transform: 'translate(-10px)',
            transformOrigin: 'center',
          },
          '50%': {
            transform: 'translate(10px)',
          },
        }
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".ease-cubic-custom": {
          transitionTimingFunction: "cubic-bezier(0.98, 0.57, 1, 1)",
        },
        ".text-stroke-white": {
          "-webkit-text-stroke": "1px white",
        },
      });
    }),
  ],
}  

