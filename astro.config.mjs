// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/vite';
import sitemap from '@astrojs/sitemap';


import netlify from '@astrojs/netlify';


export default defineConfig({
    site: "https://example.com",
  integrations: [sitemap(), netlify()],

  vite: {
      plugins: [
          UnoCSS({
              inspector: true, // Enables the UnoCSS inspector
          }),
      ],
  },
    output: 'server',
    server: {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    },
    adapter: netlify({
        edgeMiddleware: true
    }),
});