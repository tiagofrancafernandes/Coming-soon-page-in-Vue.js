<!-- src/App.vue -->
<template>
    <div id="app" class="min-h-screen flex flex-col">
        <router-view class="flex-1" />
        <footer class="text-gray-600 dark:text-gray-300 body-font transition-colors duration-300">
            <div
                class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 transition-all duration-300"
            >
                <div class="container mx-auto py-3 px-5 flex flex-wrap flex-col sm:flex-row items-center">
                    <p
                        class="text-sm text-gray-500 dark:text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 border-gray-200 dark:border-gray-700 sm:py-2 sm:mt-0 mt-2 transition-colors duration-300"
                    >
                        © 2025 Coming Soon — Built with Vue 3
                    </p>
                    <ToggleButton class="sm:ml-auto mt-2 sm:mt-0" />
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import ToggleButton from '@/components/ToggleButton.vue';

// No script needed for this basic component
</script>

<style>
/* Global styles can go here if needed */
</style>
