<!-- src/components/NotFound.vue -->
<template>
    <div
        class="min-h-screen bg-linear-to-br from-gray-900 to-purple-900 flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
        <div class="max-w-md w-full text-center">
            <div class="animate-bounce mb-8">
                <span class="text-6xl font-bold text-white">4</span>
                <span class="text-6xl font-bold text-blue-400 mx-4">0</span>
                <span class="text-6xl font-bold text-white">4</span>
            </div>
            <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">Page Not Found</h1>
            <p class="text-gray-300 mb-8">The page you're looking for doesn't exist or has been moved.</p>
            <router-link
                to="/"
                class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
            >
                Go Home
            </router-link>
        </div>
    </div>
</template>

<script setup>
// No script needed for this basic component
</script>
