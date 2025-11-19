<template>
    <div
        class="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900 dark:via-purple-900 dark:to-pink-800 flex flex-col items-center justify-center p-4 transition-colors duration-300"
    >
        <div class="max-w-4xl w-full space-y-8">
            <!-- Header -->
            <div class="text-center animate-fade-in-down">
                <h1
                    class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300"
                >
                    Countdown Examples
                </h1>
                <p class="text-blue-700 dark:text-blue-200 text-lg transition-colors duration-300">
                    Choose a countdown example to see it in action
                </p>
            </div>

            <!-- Examples Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
                <!-- Long-term countdowns (vários meses) -->
                <div
                    v-for="example in longTermExamples"
                    :key="example.id"
                    class="bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-90 backdrop-blur-md rounded-lg p-6 shadow-lg dark:shadow-xl transition-all duration-300 hover:scale-105 transform"
                >
                    <div class="mb-4">
                        <span
                            class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200"
                        >
                            {{ example.category }}
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                        {{ example.title }}
                    </h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                        {{ example.description }}
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mb-4 transition-colors duration-300">
                        📅 {{ formatDate(example.date) }}
                    </p>
                    <router-link
                        :to="getCountdownRoute(example.date)"
                        class="inline-block w-full text-center bg-linear-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition duration-300"
                    >
                        View Countdown →
                    </router-link>
                </div>

                <!-- Medium-term countdowns (menos de 1 ano, menos de 2 meses) -->
                <div
                    v-for="example in mediumTermExamples"
                    :key="example.id"
                    class="bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-90 backdrop-blur-md rounded-lg p-6 shadow-lg dark:shadow-xl transition-all duration-300 hover:scale-105 transform"
                >
                    <div class="mb-4">
                        <span
                            class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200"
                        >
                            {{ example.category }}
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                        {{ example.title }}
                    </h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                        {{ example.description }}
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mb-4 transition-colors duration-300">
                        📅 {{ formatDate(example.date) }}
                    </p>
                    <router-link
                        :to="getCountdownRoute(example.date)"
                        class="inline-block w-full text-center bg-linear-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition duration-300"
                    >
                        View Countdown →
                    </router-link>
                </div>

                <!-- Short-term countdowns (menos de 7 dias) -->
                <div
                    v-for="example in shortTermExamples"
                    :key="example.id"
                    class="bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-90 backdrop-blur-md rounded-lg p-6 shadow-lg dark:shadow-xl transition-all duration-300 hover:scale-105 transform"
                >
                    <div class="mb-4">
                        <span
                            class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200"
                        >
                            {{ example.category }}
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                        {{ example.title }}
                    </h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                        {{ example.description }}
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mb-4 transition-colors duration-300">
                        📅 {{ formatDate(example.date) }}
                    </p>
                    <router-link
                        :to="getCountdownRoute(example.date)"
                        class="inline-block w-full text-center bg-linear-to-r from-green-500 to-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition duration-300"
                    >
                        View Countdown →
                    </router-link>
                </div>
            </div>

            <!-- Navigation -->
            <div class="text-center animate-fade-in-up animation-delay-300">
                <router-link
                    to="/"
                    class="inline-block bg-linear-to-r from-gray-500 to-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-gray-600 hover:to-gray-800 transition duration-300 transform hover:scale-105 shadow-md"
                >
                    ← Back to Home
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

// Função para criar data futura
const createFutureDate = (daysFromNow, hours = 12, minutes = 0) => {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    date.setHours(hours, minutes, 0, 0);
    return date.toISOString();
};

// Long-term examples (vários meses no futuro)
const longTermExamples = computed(() => [
    {
        id: 'new-year-2026',
        category: 'Long-term',
        title: 'New Year 2026',
        description: 'Countdown to the next year',
        date: '2026-01-01T00:00:00',
    },
    {
        id: 'summer-2025',
        category: 'Long-term',
        title: 'Summer 2025',
        description: 'First day of summer',
        date: '2025-06-21T12:00:00',
    },
    {
        id: 'christmas-2025',
        category: 'Long-term',
        title: 'Christmas 2025',
        description: 'Holiday season celebration',
        date: '2025-12-25T00:00:00',
    },
    {
        id: '6-months',
        category: 'Long-term',
        title: '6 Months Away',
        description: 'Half a year from now',
        date: createFutureDate(180, 15, 30),
    },
]);

// Medium-term examples (menos de 1 ano, menos de 2 meses)
const mediumTermExamples = computed(() => [
    {
        id: '45-days',
        category: 'Medium-term',
        title: '45 Days',
        description: 'A month and a half from now',
        date: createFutureDate(45, 10, 0),
    },
    {
        id: '30-days',
        category: 'Medium-term',
        title: '1 Month',
        description: 'Exactly 30 days away',
        date: createFutureDate(30, 14, 0),
    },
    {
        id: '21-days',
        category: 'Medium-term',
        title: '3 Weeks',
        description: 'Three weeks from today',
        date: createFutureDate(21, 9, 30),
    },
    {
        id: '14-days',
        category: 'Medium-term',
        title: '2 Weeks',
        description: 'Two weeks from now',
        date: createFutureDate(14, 16, 0),
    },
]);

// Short-term examples (menos de 7 dias)
const shortTermExamples = computed(() => [
    {
        id: '6-days',
        category: 'Short-term',
        title: '6 Days',
        description: 'Less than a week away',
        date: createFutureDate(6, 18, 0),
    },
    {
        id: '3-days',
        category: 'Short-term',
        title: '3 Days',
        description: 'Just three days to go',
        date: createFutureDate(3, 12, 0),
    },
    {
        id: '1-day',
        category: 'Short-term',
        title: 'Tomorrow',
        description: 'Just 24 hours away',
        date: createFutureDate(1, 20, 0),
    },
    {
        id: '12-hours',
        category: 'Short-term',
        title: '12 Hours',
        description: 'Half a day from now',
        date: (() => {
            const date = new Date();
            date.setHours(date.getHours() + 12);
            return date.toISOString();
        })(),
    },
]);

// Formata a data para exibição
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('pt-BR', {
        dateStyle: 'medium',
        timeStyle: 'short',
    });
};

// Gera a rota para o countdown
const getCountdownRoute = (dateString) => {
    return `/countdown/${encodeURIComponent(dateString)}`;
};
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
