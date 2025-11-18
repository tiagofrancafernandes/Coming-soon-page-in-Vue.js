<!-- src/components/ComingSoon.vue -->
<template>
    <div
        class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900 dark:via-purple-900 dark:to-pink-800 flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
        <div class="max-w-md w-full space-y-8 text-center">
            <!-- Logo/Brand Section -->
            <div class="animate-fade-in-down">
                <div
                    class="mx-auto h-20 w-20 bg-blue-200 dark:bg-white bg-opacity-30 dark:bg-opacity-20 rounded-full flex items-center justify-center mb-4 transition-colors duration-300"
                >
                    <span class="text-blue-900 dark:text-white text-2xl font-bold transition-colors duration-300">
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

            <!-- Countdown Timer -->
            <div
                class="bg-white dark:bg-white bg-opacity-70 dark:bg-opacity-10 backdrop-blur-md rounded-lg p-6 animate-fade-in-up shadow-lg dark:shadow-none transition-all duration-300"
            >
                <h2 class="text-gray-900 dark:text-white text-xl font-semibold mb-4 transition-colors duration-300">
                    Launching in
                </h2>
                <div class="grid grid-cols-4 gap-4">
                    <div
                        class="bg-blue-100 dark:bg-black bg-opacity-80 dark:bg-opacity-30 rounded-lg p-3 transition-colors duration-300"
                    >
                        <div
                            class="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
                            id="days"
                        >
                            {{ days }}
                        </div>
                        <div class="text-sm text-blue-700 dark:text-blue-200 transition-colors duration-300">Days</div>
                    </div>
                    <div
                        class="bg-blue-100 dark:bg-black bg-opacity-80 dark:bg-opacity-30 rounded-lg p-3 transition-colors duration-300"
                    >
                        <div
                            class="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
                            id="hours"
                        >
                            {{ hours }}
                        </div>
                        <div class="text-sm text-blue-700 dark:text-blue-200 transition-colors duration-300">Hours</div>
                    </div>
                    <div
                        class="bg-blue-100 dark:bg-black bg-opacity-80 dark:bg-opacity-30 rounded-lg p-3 transition-colors duration-300"
                    >
                        <div
                            class="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
                            id="minutes"
                        >
                            {{ minutes }}
                        </div>
                        <div class="text-sm text-blue-700 dark:text-blue-200 transition-colors duration-300">
                            Minutes
                        </div>
                    </div>
                    <div
                        class="bg-blue-100 dark:bg-black bg-opacity-80 dark:bg-opacity-30 rounded-lg p-3 transition-colors duration-300"
                    >
                        <div
                            class="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
                            id="seconds"
                        >
                            {{ seconds }}
                        </div>
                        <div class="text-sm text-blue-700 dark:text-blue-200 transition-colors duration-300">
                            Seconds
                        </div>
                    </div>
                </div>
            </div>

            <!-- Email Signup -->
            <div
                class="bg-white dark:bg-white bg-opacity-70 dark:bg-opacity-10 backdrop-blur-md rounded-lg p-6 animate-fade-in-up animation-delay-300 shadow-lg dark:shadow-none transition-all duration-300"
            >
                <h2 class="text-gray-900 dark:text-white text-xl font-semibold mb-4 transition-colors duration-300">
                    Stay Updated
                </h2>
                <p class="text-blue-700 dark:text-blue-200 mb-4 text-sm transition-colors duration-300">
                    Get notified when we launch
                </p>
                <form @submit.prevent="handleSubscribe" class="space-y-3">
                    <input
                        v-model="email"
                        type="email"
                        placeholder="Your email address"
                        class="w-full px-4 py-3 rounded-lg text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                        required
                    />
                    <button
                        type="submit"
                        class="w-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 dark:hover:from-blue-700 dark:hover:to-purple-800 transition duration-300 transform hover:scale-105 shadow-md"
                    >
                        Notify Me
                    </button>
                </form>
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
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

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
