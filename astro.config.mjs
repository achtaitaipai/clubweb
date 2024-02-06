import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Club web",
      locales: {
        root: {
          label: "Français",
          lang: "fr",
        },
      },

      social: {
        github: "https://github.com/achtaitaipai/club-web",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Les éléments HTML",
          autogenerate: { directory: "elements-html" },
        },
      ],
    }),
  ],
});
