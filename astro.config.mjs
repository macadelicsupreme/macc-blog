// @ts-check
import {defineConfig} from 'astro/config';
import UnoCSS from "unocss/vite";


// https://astro.build/config
export default defineConfig({
    integrations: [],
    vite: {
        plugins: [
            UnoCSS({
                inspector: true, // Enables the UnoCSS inspector
            }),
        ],
    },
});
