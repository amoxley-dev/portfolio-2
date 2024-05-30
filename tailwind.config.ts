import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

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
      white: colors.white
    }
  },
  plugins: [],
};
export default config;
