// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://hanzu.vercel.app",
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    icon({ iconDir: "src/assets/icons" }),
    sitemap(),
  ],
});
