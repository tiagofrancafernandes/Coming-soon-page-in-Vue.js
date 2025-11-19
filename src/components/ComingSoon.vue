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
                                <!-- Icon from EOS Icons by SUSE UX/UI team - https://gitlab.com/SUSE-UIUX/eos-icons/-/blob/master/LICENSE -->
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
                        Coming Soon
                    </h1>
                    <p class="text-blue-700 dark:text-blue-200 text-lg transition-colors duration-300">
                        We're working hard to bring you something amazing
                    </p>
                </div>

                <!-- Date Info -->
                <div
                    class="bg-white dark:bg-white bg-opacity-70 dark:bg-opacity-10 backdrop-blur-md rounded-lg p-4 animate-fade-in-up shadow-lg dark:shadow-none transition-all duration-300"
                >
                    <p class="text-gray-700 dark:text-gray-500 text-sm transition-colors duration-300">
                        <strong>Target Date:</strong>
                        {{ formattedDate }}
                    </p>
                </div>

                <!-- Countdown Timer -->
                <div
                    class="bg-white dark:bg-white bg-opacity-70 dark:bg-opacity-10 backdrop-blur-md rounded-lg p-6 animate-fade-in-up shadow-lg dark:shadow-none transition-all duration-300 px-4"
                >
                    <h2
                        v-if="eventLabel"
                        class="dark:text-gray-900 text-white text-xl font-semibold mb-4 transition-colors duration-300"
                    >
                        {{ eventLabel }}
                    </h2>
                    <Counter :finalDate="finalDate" />
                </div>

                <!-- Email Signup -->
                <div
                    class="bg-white dark:bg-white bg-opacity-70 dark:bg-opacity-10 backdrop-blur-md rounded-lg p-6 animate-fade-in-up animation-delay-300 shadow-lg dark:shadow-none transition-all duration-300"
                >
                    <h2 class="text-gray-900 dark:text-white text-xl font-semibold mb-4 transition-colors duration-300">
                        Stay Updated
                    </h2>
                    <p class="text-blue-500 dark:text-blue-700 mb-4 text-sm transition-colors duration-300">
                        Get notified when we launch
                    </p>
                    <form @submit.prevent="handleSubscribe" class="space-y-3">
                        <input
                            v-model="email"
                            type="email"
                            placeholder="Your email address"
                            class="w-full px-4 py-3 rounded-lg text-purple-800 dark:text-purple-100 bg-white dark:bg-purple-500 border border-purple-300 dark:border-purple-600 focus:outline-hidden focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all duration-300 placeholder:text-purple-400 dark:placeholder:text-purple-100"
                            required
                        />
                        <button
                            type="submit"
                            class="w-full bg-linear-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 dark:hover:from-blue-700 dark:hover:to-purple-800 transition duration-300 transform hover:scale-105 shadow-md"
                        >
                            Notify Me
                        </button>
                    </form>
                </div>

                <!-- Examples Link -->
                <div class="animate-fade-in-up animation-delay-450">
                    <router-link
                        to="/examples"
                        class="inline-block bg-linear-to-r from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 dark:hover:from-green-700 dark:hover:to-teal-800 transition duration-300 transform hover:scale-105 shadow-md"
                    >
                        📅 View Countdown Examples
                    </router-link>
                </div>

                <!-- Social Links -->
                <div class="animate-fade-in-up animation-delay-600 mb-2">
                    <p class="text-blue-700 dark:text-blue-200 text-sm mb-4 transition-colors duration-300">
                        <span>Follow our journey</span>
                    </p>
                    <div class="flex justify-center space-x-4">
                        <a
                            href="#"
                            class="text-blue-600 dark:text-blue-200 hover:text-blue-800 dark:hover:text-white transition duration-300"
                        >
                            <span class="text-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                    <!-- Icon from EOS Icons by SUSE UX/UI team - https://gitlab.com/SUSE-UIUX/eos-icons/-/blob/master/LICENSE -->
                                    <path
                                        fill="currentColor"
                                        d="M12 15h7v2h-7zM4.594 8.414L8.17 12l-3.578 3.588L6 17l5-5l-5-5z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M22 3H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H2V5h20Z"
                                    />
                                </svg>
                            </span>
                        </a>

                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="text-blue-600 dark:text-blue-200 hover:text-blue-800 dark:hover:text-white transition-colors duration-300"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                            >
                                <!-- Icon from EOS Icons by SUSE UX/UI team - https://gitlab.com/SUSE-UIUX/eos-icons/-/blob/master/LICENSE -->
                                <path
                                    fill="currentColor"
                                    d="M21 10a16.84 16.84 0 0 0-9 3.244A16.84 16.84 0 0 0 3 10v2.96a2.004 2.004 0 0 0-2 2.007v1.004c0 1.109 2 2.208 2 2.208v2.007a14.87 14.87 0 0 1 7.417 2.55A15 15 0 0 1 12 24a15 15 0 0 1 1.583-1.264A14.87 14.87 0 0 1 21 20.186v-2.208a2.004 2.004 0 0 0 2-2.007v-1.004a2.004 2.004 0 0 0-2-2.007Zm-9 11.422a16.84 16.84 0 0 0-7-2.996v-6.15a14.8 14.8 0 0 1 5.417 2.282A15 15 0 0 1 12 15.822a15 15 0 0 1 1.583-1.264A14.8 14.8 0 0 1 19 12.275v6.151a16.84 16.84 0 0 0-7 2.996M11 8h2v1h-2zm0-4h2v1h-2z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M11 10h2v1h-2zM9 5a1 1 0 0 0 1-1a.983.983 0 0 0-.99-.99A.995.995 0 1 0 9 5"
                                />
                                <circle cx="15" cy="4" r="1" fill="currentColor" />
                                <path
                                    fill="currentColor"
                                    d="M16 8H8a3.003 3.003 0 0 1-3-3V3a3.003 3.003 0 0 1 3-3h8a3.003 3.003 0 0 1 3 3v2a3.003 3.003 0 0 1-3 3M8 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
                                />
                            </svg>
                        </span>

                        <a
                            href="#"
                            class="text-blue-600 dark:text-blue-200 hover:text-blue-800 dark:hover:text-white transition duration-300"
                        >
                            <span class="text-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                    <!-- Icon from EOS Icons by SUSE UX/UI team - https://gitlab.com/SUSE-UIUX/eos-icons/-/blob/master/LICENSE -->
                                    <path
                                        fill="currentColor"
                                        d="m13.372 11.013l.614.614l-6.04 6.04h-.613v-.614zM15.771 7a.67.67 0 0 0-.467.193l-1.22 1.22l2.5 2.5l1.22-1.22a.664.664 0 0 0 0-.94l-1.56-1.56A.66.66 0 0 0 15.772 7m-2.4 2.127L6 16.5V19h2.5l7.372-7.373Z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M19 1h-2v2H7V1H5v2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1zM4 21V5h16v16Z"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                    <div class="flex justify-center space-x-4 mt-3">
                        <a
                            href="#"
                            class="text-blue-600 dark:text-blue-200 hover:text-blue-800 dark:hover:text-white transition-all duration-300 transform hover:scale-110"
                        >
                            <span class="text-2xl">📱</span>
                        </a>
                        <a
                            href="#"
                            class="text-blue-600 dark:text-blue-200 hover:text-blue-800 dark:hover:text-white transition-all duration-300 transform hover:scale-110"
                        >
                            <span class="text-2xl">💻</span>
                        </a>
                        <a
                            href="#"
                            class="text-blue-600 dark:text-blue-200 hover:text-blue-800 dark:hover:text-white transition-all duration-300 transform hover:scale-110"
                        >
                            <span class="text-2xl">📧</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';

import { useRoute } from 'vue-router';

import Counter from '@/components/Counter.vue';
import { ifValidDate, isFutureDate, normalizeLocale } from '@/utils/helpers.js';

const route = useRoute();

// Pega a data da URL
const dateParam = import.meta.env.VITE_HOME_COUNTDOWN_DATE || '2026-12-25 00:00';
const eventLabel = import.meta.env.VITE_HOME_COUNTDOWN_LABEL || 'Launching in';
const dateLocaleCode = normalizeLocale(import.meta.env.VITE_DATE_LOCALE_CODE || 'en-US');

// Valida a data
const validatedDate = ifValidDate(dateParam);
const isValidDate = computed(() => validatedDate && isFutureDate(validatedDate));

// Data final para o contador
const finalDate = ref(validatedDate || null);

const finalDateCheck = () => {
    if (validatedDate) {
        finalDate.value = validatedDate;
        return;
    }

    // Data exemplo: hoje + 30 dias às 14 horas
    const exampleDate = new Date();
    exampleDate.setDate(exampleDate.getDate() + 30);
    exampleDate.setHours(14, 0, 0, 0);
    finalDate.value = exampleDate;
};

// Mensagem descritiva
const dateMessage = computed(() => {
    if (isValidDate.value) {
        return 'Counting down to your custom date';
    }
    return 'Using example date (30 days from now at 2 PM)';
});

// Data formatada para exibição
const formattedDate = computed(() => {
    if (!ifValidDate(finalDate.value)) {
        return '';
    }

    return finalDate.value.toLocaleString(dateLocaleCode, {
        dateStyle: 'full',
        timeStyle: 'short',
    });
});

onMounted(() => {
    finalDateCheck();
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
