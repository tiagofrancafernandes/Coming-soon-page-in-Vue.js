<!-- src/App.vue -->
<template>
    <div id="app" class="min-h-screen flex flex-col">
        <router-view class="flex-1" />
        <Footer />
    </div>
</template>

<script setup>
import Footer from '@/components/Layout/Footer.vue';
</script>

<style>
/* Global styles can go here if needed */
</style>
