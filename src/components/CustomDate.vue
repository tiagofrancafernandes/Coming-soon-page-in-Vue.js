<template>
    <div
        class="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900 dark:via-purple-900 dark:to-pink-800 flex flex-col items-center justify-center p-0 transition-colors duration-300 pb-15"
    >
        <div class="flex flex-col w-full p-0">
            <div class="md:max-w-lg mx-auto w-full space-y-8 text-center px-4 sm:px-6 lg:px-8">
                <!-- Logo/Brand Section -->
                <div class="animate-fade-in-down">
                    <div
                        class="mx-auto h-20 w-20 bg-blue-200 dark:bg-purple-500 bg-opacity-30 dark:bg-opacity-20 rounded-full flex items-center justify-center mb-4 transition-colors duration-300"
                    >
                        <span
                            class="text-blue-900 dark:text-purple-300 text-2xl font-bold transition-colors duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <g>
                                    <path fill="currentColor" d="M7 3H17V7.2L12 12L7 7.2V3Z">
                                        <animate
                                            id="SVGFjnOndxt"
                                            fill="freeze"
                                            attributeName="opacity"
                                            begin="0;SVGn6mLadge.end"
                                            dur="2s"
                                            from="1"
                                            to="0"
                                        />
                                    </path>
                                    <path fill="currentColor" d="M17 21H7V16.8L12 12L17 16.8V21Z">
                                        <animate
                                            fill="freeze"
                                            attributeName="opacity"
                                            begin="0;SVGn6mLadge.end"
                                            dur="2s"
                                            from="0"
                                            to="1"
                                        />
                                    </path>
                                    <path
                                        fill="currentColor"
                                        d="M6 2V8H6.01L6 8.01L10 12L6 16L6.01 16.01H6V22H18V16.01H17.99L18 16L14 12L18 8.01L17.99 8H18V2H6ZM16 16.5V20H8V16.5L12 12.5L16 16.5ZM12 11.5L8 7.5V4H16V7.5L12 11.5Z"
                                    />
                                    <animateTransform
                                        id="SVGn6mLadge"
                                        attributeName="transform"
                                        attributeType="XML"
                                        begin="SVGFjnOndxt.end"
                                        dur="0.5s"
                                        from="0 12 12"
                                        to="180 12 12"
                                        type="rotate"
                                    />
                                </g>
                            </svg>
                        </span>
                    </div>
                    <h1
                        class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300"
                    >
                        Custom Countdown
                    </h1>
                    <p class="text-blue-700 dark:text-blue-200 text-lg transition-colors duration-300">
                        {{ dateMessage }}
                    </p>
                </div>

                <!-- Validation Message -->
                <div
                    v-if="!isValidDate"
                    class="bg-yellow-100 dark:bg-yellow-900 bg-opacity-70 dark:bg-opacity-30 backdrop-blur-md rounded-lg p-4 animate-fade-in-up shadow-lg transition-all duration-300"
                >
                    <p class="text-yellow-800 dark:text-yellow-200 text-sm transition-colors duration-300">
                        ⚠️ Invalid or past date provided. Using example date instead.
                    </p>
                </div>

                <!-- Date Info -->
                <div
                    class="bg-white dark:bg-white bg-opacity-70 dark:bg-opacity-10 backdrop-blur-md rounded-lg p-4 animate-fade-in-up shadow-lg dark:shadow-none transition-all duration-300"
                >
                    <p class="text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">
                        <strong>Target Date:</strong>
                        {{ formattedDate }}
                    </p>
                </div>

                <!-- Countdown Timer -->
                <div
                    class="bg-white dark:bg-white bg-opacity-70 dark:bg-opacity-10 backdrop-blur-md rounded-lg p-6 animate-fade-in-up shadow-lg dark:shadow-none transition-all duration-300 px-4"
                >
                    <h2 class="dark:text-gray-900 text-white text-xl font-semibold mb-4 transition-colors duration-300">
                        Time Remaining
                    </h2>
                    <Counter :finalDate="finalDate" />
                </div>

                <!-- Navigation -->
                <div class="animate-fade-in-up animation-delay-300">
                    <router-link
                        to="/"
                        class="inline-block bg-linear-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 dark:hover:from-blue-700 dark:hover:to-purple-800 transition duration-300 transform hover:scale-105 shadow-md"
                    >
                        ← Back to Home
                    </router-link>
                    <router-link
                        to="/examples"
                        class="inline-block ml-3 bg-linear-to-r from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 dark:hover:from-green-700 dark:hover:to-teal-800 transition duration-300 transform hover:scale-105 shadow-md"
                    >
                        View Examples →
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

import { useRoute } from 'vue-router';

import Counter from '@/components/Counter.vue';
import { ifValidDate, isFutureDate } from '@/utils/helpers.js';

const route = useRoute();

// Pega a data da URL
const dateParam = route.params.date || null;

// Valida a data
const validatedDate = ifValidDate(dateParam);
const isValidDate = computed(() => validatedDate && isFutureDate(validatedDate));

// Data final para o contador
const finalDate = ref(null);

if (isValidDate.value) {
    finalDate.value = validatedDate;
} else {
    // Data exemplo: hoje + 30 dias às 14 horas
    const exampleDate = new Date();
    exampleDate.setDate(exampleDate.getDate() + 30);
    exampleDate.setHours(14, 0, 0, 0);
    finalDate.value = exampleDate;
}

// Mensagem descritiva
const dateMessage = computed(() => {
    if (isValidDate.value) {
        return 'Counting down to your custom date';
    }
    return 'Using example date (30 days from now at 2 PM)';
});

// Data formatada para exibição
const formattedDate = computed(() => {
    return finalDate.value.toLocaleString('pt-BR', {
        dateStyle: 'full',
        timeStyle: 'short',
    });
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
