<!-- src/App.vue -->
<template>
    <div id="app">
        <router-view />
        <footer class="text-gray-600 body-font">
            <div class="bg-gray-100 dark:bg-gray-700">
                <div class="container mx-auto py-1 px-5 flex flex-wrap flex-col sm:flex-row">
                    <ToggleButton class="mx-auto" lightLabel="🌑" darkLabel="☀️" />
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
