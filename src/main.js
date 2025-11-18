import './assets/style.css';

// src/main.js
import { createApp } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import ComingSoon from './components/ComingSoon.vue';
import NotFound from './components/NotFound.vue';
import { loadTheme } from './utils/colorScheme';

// Carrega o tema antes de inicializar a aplicação para evitar FOUC
loadTheme();

// Create router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ComingSoon },
        { path: '/coming-soon', component: ComingSoon },
        { path: '/:pathMatch(.*)*', component: NotFound },
    ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
