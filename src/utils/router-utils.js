import router from '../router.js';

export const redirectTo = (...routeArgs) => {
    return router.replace(...routeArgs);
};

export const refreshPage = async (hash = null) => {
    hash = hash && typeof hash === 'string' && hash.startsWith('#') ? hash.slice(1) : null;

    return await router.push((router.currentRoute?._rawValue?.path || '/') + (hash ? '#' + hash : ''));
};

export const hmrRefresh = async () => {
    return await refreshPage('#hmr-date=' + Date.now());
};

export const fullRefresh = async () => {
    console.log('fullRefresh');
    // '#hmr-date=' + Date.now();
    window.location = window.location.href.replace(window.location.hash, '') + '#hmr-date=' + Date.now();
    return;
};
