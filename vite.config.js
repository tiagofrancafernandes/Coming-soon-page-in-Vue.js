import { fileURLToPath, URL } from 'node:url'; // Use 'node:url' for Node.js built-in module

// vite.config.js
import { defineConfig } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue(), tailwindcss()],
    server: {
        port: 3000,
        open: true,
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            // '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
            // '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
            // '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
            // '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            // '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
            // '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
            // '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
            // '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
            // '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
            // '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
            // '@public': fileURLToPath(new URL('./public', import.meta.url)),
        },
    },
});
