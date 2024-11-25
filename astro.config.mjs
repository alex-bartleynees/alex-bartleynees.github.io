import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],
  prefetch: true,
  site: "https://alex-bartleynees.github.io/",
  base: "/",
});
