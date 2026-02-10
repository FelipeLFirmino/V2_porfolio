import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://FelipeLFirmino.github.io",
  base: "/V2_porfolio",
  integrations: [mdx(), sitemap(), tailwind()],
});
