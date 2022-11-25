/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        indigo: colors.indigo,
        blue: colors.blue,
        red: colors.red,
        orange: colors.orange,
        yellow: colors.yellow,
        green: colors.green,
        teal: colors.teal,
        purple: colors.purple,
        pink: colors.pink,
        slate: colors.slate,
        gray: colors.gray,
        neutral: colors.neutral,
        stone: colors.stone,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        cyan: colors.cyan,
        sky: colors.sky,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
        theme: {
          50: colors.indigo[50],
          100: colors.indigo[100],
          200: colors.indigo[200],
          300: colors.indigo[300],
          400: colors.indigo[400],
          500: colors.indigo[500],
          600: colors.indigo[600],
          700: colors.indigo[700],
          800: colors.indigo[800],
          900: colors.indigo[900],
        },
        accent: {
          50: colors.gray[50],
          100: colors.gray[100],
          200: colors.gray[200],
          300: colors.gray[300],
          400: colors.gray[400],
          500: colors.gray[500],
          600: colors.gray[600],
          700: colors.gray[700],
          800: colors.gray[800],
          900: colors.gray[900],
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "100%",
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.400"),
            "h2, h3, h4, thead th": {
              color: theme("colors.gray.200"),
            },
            "h2 small, h3 small, h4 small": {
              color: theme("colors.gray.400"),
            },
            code: {
              color: theme("colors.gray.200"),
            },
            hr: {
              borderColor: theme("colors.gray.200"),
              opacity: "0.05",
            },
            pre: {
              boxShadow: "inset 0 0 0 1px rgb(255 255 255 / 0.1)",
            },
            a: {
              color: theme("colors.white"),
              borderBottomColor: theme("colors.sky.400"),
            },
            strong: {
              color: theme("colors.gray.200"),
            },
            thead: {
              color: theme("colors.gray.300"),
              borderBottomColor: "rgb(148 163 184 / 0.2)",
            },
            "tbody tr": {
              borderBottomColor: "rgb(148 163 184 / 0.1)",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp"), require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")],
};
