import {
    defineConfig,
    presetTypography,
    presetUno,
    presetWind
} from 'unocss';

export default defineConfig({
    presets: [
        presetWind(),
        presetUno(),
        presetTypography(),
    ],
    theme: {
        colors: {
            'custom-lavender-texture-bg': "#eeeaf4",
            'custom-navbar-color': "#d5e5f4",
            'recent-blog-post-bg': "#f2c7c1",
            'border': '#2b2929',
            'darkerBorder': '#2a2a2a',
        },
        boxShadow: {
            light: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            dark: '0px 4px 6px rgba(0, 0, 0, 0.6)',
        },
        borderRadius: {
            base: '0.5rem',
        },
    },
    rules: [

        [
            'recent-blog-post-bg',
            {
                'background-color': "#f2c7c1",
                'background-image': `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f65b70' fill-opacity='0.52' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
            },
        ],
        [
            'custom-lavender-texture-bg',
            {
                'background-color': "#eeeaf4",
                'background-image': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23b182fc' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
            },
        ],
        [
            'custom-navbar-bg',
            {
                'background-color': "#d5e5f4",
                'background-image': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2336bed1' fill-opacity='0.16' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
            },
        ],
    ],
});
