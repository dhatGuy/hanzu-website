/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('/src/assets/images/BG.png')",
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
        euro: ["Eurostile Extended", ...defaultTheme.fontFamily.sans],
        "euro-normal": ["EurostileExt-Normal", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
