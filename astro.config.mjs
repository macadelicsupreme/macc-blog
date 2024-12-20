// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/vite';
import sitemap from '@astrojs/sitemap';



export default defineConfig({
    integrations: [sitemap()],
    vite: {
        plugins: [
            UnoCSS({
                inspector: true, // Enables the UnoCSS inspector
            }),
        ],
    },
});
