export const VALID_THEME_NAMES = ['light', 'dark', 'system', 'auto'];

export const getLocalStorageTheme = () => {
    return localStorage.getItem('theme') || null;
}

export const setLocalStorageTheme = (theme = null) => {
    theme = VALID_THEME_NAMES.includes(theme) ? theme : null;

    if (theme === null || ['auto', 'system'].includes(theme)) {
        localStorage.removeItem('theme');
        return;
    }

    return getLocalStorageTheme() || null;
}

export const currentThemeIsDark = () => {
    return (
        getLocalStorageTheme() === 'dark' ||
        ('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches
    );
};

export const isValidThemeName = (theme = null) => {
    return VALID_THEME_NAMES.includes(theme)
}

export const ifValidThemeName = (theme = null) => {
    return isValidThemeName(theme) ? theme : null;
}

export const getSchemeTheme = () => {
    return currentThemeIsDark() ? 'dark' : 'light';
}

export const getCurrentTheme = (defaultTheme = null) => {
    let theme = localStorage.getItem('theme') || null;
    let schemeTheme = getSchemeTheme();

    defaultTheme = ifValidThemeName(defaultTheme) || schemeTheme;

    if (!isValidThemeName(theme)) {
        return defaultTheme;
    };

    return ifValidThemeName(schemeTheme) || defaultTheme;
}

export const loadTheme = (defaultTheme = null) => {
    let theme = ifValidThemeName(localStorage.getItem('theme') || defaultTheme) || 'auto';

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    document.documentElement.classList.toggle(
        'dark',
        !currentThemeIsDark() || theme !== 'dark'
    );
};

export const setTheme = (theme = null) => {
    theme = ifValidThemeName(theme) || 'auto';

    if (theme === 'light') {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }

    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }

    if (theme === 'system' || theme === 'auto') {
        localStorage.removeItem('theme');

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
            return;
        }

        document.documentElement.classList.remove('dark');
    }
};
