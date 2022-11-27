/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");

const themeColor = colors.indigo;
const accentColor = colors.gray;
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "node_modules/daisyui/dist/**/*.js", "node_modules/react-daisyui/dist/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...colors,
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
          50: themeColor[50],
          100: themeColor[100],
          200: themeColor[200],
          300: themeColor[300],
          400: themeColor[400],
          500: themeColor[500],
          600: themeColor[600],
          700: themeColor[700],
          800: themeColor[800],
          900: themeColor[900],
        },
        accent: {
          50: accentColor[50],
          100: accentColor[100],
          200: accentColor[200],
          300: accentColor[300],
          400: accentColor[400],
          500: accentColor[500],
          600: accentColor[600],
          700: accentColor[700],
          800: accentColor[800],
          900: accentColor[900],
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: themeColor[500],
          secondary: accentColor[200],
          accent: "#c4b5fd",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#e11d48",
        },
      },
    ],
  },
};
