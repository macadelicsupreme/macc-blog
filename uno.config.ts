export default defineConfig({
    presets: [presetUno()],
    theme: {
        colors: {
            // Add custom colors
            'custom-bg-color': "#f2c3b6",
            'custom-navbar-color': "#d5e5f4",
        },
    },
    rules: [
        [
            /*Background for main class in index for now*/
            'custom-main-bg',
            {
                'background-color': "#f2c3b6",
                'background-image': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d14936' fill-opacity='0.44'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            },
        ],
        [
            /*Background for main class in index for now*/
            'custom-navbar-bg',
            {
                'background-color': "#d5e5f4",
                'background-image': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2336bed1' fill-opacity='0.16' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
            },
        ],
        [
            'shadow-custom',
            {
                'box-shadow': '3px 0px 11px 0px rgba(0,0,0,0.8)',
            },
        ],
    ],
})

import {
    defineConfig,

    presetUno,
} from 'unocss'
