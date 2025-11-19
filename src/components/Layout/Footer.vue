<template>
    <footer class="text-gray-600 dark:text-purple-200 body-font transition-colors duration-300">
        <div
            class="bg-white/50 dark:bg-purple-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-purple-700 transition-all duration-300"
        >
            <div class="container mx-auto py-3 px-5 flex flex-wrap flex-col sm:flex-row items-center">
                <p
                    class="text-sm text-gray-500 dark:text-purple-300 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-2 transition-colors duration-300"
                >
                    © {{ new Date().getFullYear() }} Coming Soon — Built with
                    <a href="https://vuejs.org/" target="_blank" class="font-semibold underline hover:no-underline">
                        Vue 3
                    </a>
                    and
                    <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        class="font-semibold underline hover:no-underline"
                    >
                        TailwindCSS
                    </a>
                </p>
                <span class="sm:border-l-2 border-gray-200 dark:border-purple-600"></span>
                <ToggleButton class="sm:ml-auto mt-2 sm:mt-0" />
            </div>
        </div>
    </footer>
</template>

<script setup lang="js">
import ToggleButton from '@/components/ToggleButton.vue';

const props = defineProps({
    label: {
        type: String,
    },
});
</script>
