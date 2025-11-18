import './assets/style.css';

// src/main.js
import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';
import { loadTheme } from './utils/colorScheme';
import { fullRefresh } from './utils/router-utils.js';

// Carrega o tema antes de inicializar a aplicação para evitar FOUC
loadTheme();

globalThis.router = router;

globalThis.__HELPERS = { router };

if (import.meta.hot) {
    const defaultHandler = async (event, eventName = null) => {
        console.log(`(Event "${eventName}"). Event data: `, event);
        // await hmrRefresh();
        await fullRefresh();
    };

    const _events = [
        ['vite:beforeFullReload', null],
        ['vite:updated', null],
        ['vite:beforeUpdate', null],
        ['vite:connected', null],
        ['vite:update', null],
        ['vite:update', null],
        ['vitejs:update', null],
        ['vitejs:update', null],
        ['vitejs:connected', null],
        ['updated', null],
        ['beforeUpdate', null],
    ];

    _events.forEach(([eventName, handler]) => {
        handler = handler || null;
        import.meta.hot.on(eventName, (event) => {
            if (handler) {
                handler(event);
                return;
            }

            defaultHandler(event, eventName);
        });
    });
}

const app = createApp(App);
app.use(router);
app.mount('#app');
