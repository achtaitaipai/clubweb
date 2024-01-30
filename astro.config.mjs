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
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Commencer une page web",
              link: "/guides/commencer-une-page-web/",
            },
          ],
        },
        {
          label: "Réference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
