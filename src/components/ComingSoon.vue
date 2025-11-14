<!-- src/components/ComingSoon.vue -->
<template>
    <div
        class="min-h-screen bg-linear-to-br from-blue-900 via-purple-900 to-pink-800 flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
        <div class="max-w-md w-full space-y-8 text-center">
            <!-- Logo/Brand Section -->
            <div class="animate-fade-in-down">
                <div
                    class="mx-auto h-20 w-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4"
                >
                    <span class="text-white text-2xl font-bold">🌟</span>
                </div>
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">Coming Soon</h1>
                <p class="text-blue-200 text-lg">We're working hard to bring you something amazing</p>
            </div>

            <!-- Countdown Timer -->
            <div class="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 animate-fade-in-up">
                <h2 class="text-white text-xl font-semibold mb-4">Launching in</h2>
                <div class="grid grid-cols-4 gap-4 text-white">
                    <div class="bg-black bg-opacity-30 rounded-lg p-3">
                        <div class="text-2xl font-bold" id="days">{{ days }}</div>
                        <div class="text-sm text-blue-200">Days</div>
                    </div>
                    <div class="bg-black bg-opacity-30 rounded-lg p-3">
                        <div class="text-2xl font-bold" id="hours">{{ hours }}</div>
                        <div class="text-sm text-blue-200">Hours</div>
                    </div>
                    <div class="bg-black bg-opacity-30 rounded-lg p-3">
                        <div class="text-2xl font-bold" id="minutes">{{ minutes }}</div>
                        <div class="text-sm text-blue-200">Minutes</div>
                    </div>
                    <div class="bg-black bg-opacity-30 rounded-lg p-3">
                        <div class="text-2xl font-bold" id="seconds">{{ seconds }}</div>
                        <div class="text-sm text-blue-200">Seconds</div>
                    </div>
                </div>
            </div>

            <!-- Email Signup -->
            <div class="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 animate-fade-in-up animation-delay-300">
                <h2 class="text-white text-xl font-semibold mb-4">Stay Updated</h2>
                <p class="text-blue-200 dark:text-blue-200 mb-4 text-sm">Get notified when we launch</p>
                <form @submit.prevent="handleSubscribe" class="space-y-3">
                    <input
                        v-model="email"
                        type="email"
                        placeholder="Your email address"
                        class="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        class="w-full bg-linear-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105"
                    >
                        Notify Me
                    </button>
                </form>
            </div>

            <!-- Social Links -->
            <div class="animate-fade-in-up animation-delay-600">
                <p class="text-blue-200 text-sm mb-4">Follow our journey</p>
                <div class="flex justify-center space-x-4">
                    <a href="#" class="text-blue-200 hover:text-white transition duration-300">
                        <span class="text-2xl">📱</span>
                    </a>
                    <a href="#" class="text-blue-200 hover:text-white transition duration-300">
                        <span class="text-2xl">💻</span>
                    </a>
                    <a href="#" class="text-blue-200 hover:text-white transition duration-300">
                        <span class="text-2xl">📧</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    onMounted,
    onUnmounted,
    ref,
} from 'vue';

const email = ref('');
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
let countdownInterval = null;

// Set launch date (30 days from now)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30);

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        days.value = 0;
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;
        return;
    }

    days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
};

const handleSubscribe = () => {
    if (email.value) {
        alert(`Thank you! We'll notify ${email.value} when we launch.`);
        email.value = '';
    }
};

onMounted(() => {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
});
</script>

<style>
.animate-fade-in-down {
    animation: fadeInDown 1s ease-out;
}

.animate-fade-in-up {
    animation: fadeInUp 1s ease-out;
}

.animation-delay-300 {
    animation-delay: 0.3s;
}

.animation-delay-600 {
    animation-delay: 0.6s;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
