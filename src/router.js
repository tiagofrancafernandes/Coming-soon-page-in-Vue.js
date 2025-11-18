import { createRouter, createWebHistory } from 'vue-router';

import ComingSoon from './components/ComingSoon.vue';
import NotFound from './components/NotFound.vue';

// Create router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ComingSoon },
        { path: '/coming-soon', component: ComingSoon },
        { path: '/:pathMatch(.*)*', component: NotFound },
    ],
});

export default router;
