import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';
import {nextui} from '@nextui-org/react';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)'},
          '80%': { transform: 'scaleY(1.2)'},
          '100%': { transform: 'scaleY(1)'},
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
    colors: {
      'turquoise-blue': {
        '50': '#edfefd',
        '100': '#d0fcfd',
        '200': '#a7f6fa',
        '300': '#6beef5',
        '400': '#4be1ec',
        '500': '#0cbece',
        '600': '#0d98ad',
        '700': '#127a8c',
        '800': '#186372',
        '900': '#185261',
        '950': '#0a3642',
      },
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      transparent: colors.transparent
    }
  },
  plugins: [nextui()],
};
export default config;
