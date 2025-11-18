// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    safelist: [
        // nomes exatos
        'bg-linear-to-br',
        // regex para permitir variações que comecem com 'bg-'
        { pattern: /^bg-linear/ },
        { pattern: /^bg-linear/, variants: ['dark'] },
        { pattern: /^bg-/, variants: ['dark'] },
    ],
    theme: {
        extend: {
            animation: {
                'fade-in-down': 'fadeInDown 1s ease-out',
                'fade-in-up': 'fadeInUp 1s ease-out',
                bounce: 'bounce 1s infinite',
            },
        },
    },
    plugins: [],
};
