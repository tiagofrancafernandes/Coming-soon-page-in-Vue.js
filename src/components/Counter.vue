<template>
    <div class="w-full">
        <div
            :class="[
                'grid gap-4 mb-5',
                {
                    'grid-cols-1': (days / 7).toFixed(0) >= 1 && (days / 28).toFixed(0) < 1,
                    'grid-cols-2': (days / 7).toFixed(0) >= 1 && (days / 28).toFixed(0) >= 1,
                },
            ]"
        >
            <CounterSquare
                v-if="(days / 28).toFixed(0) >= 1"
                :label="(days / 28).toFixed(0) > 1 ? 'Months' : 'Month'"
                id="months"
                :value="(days / 28).toFixed(0)"
            />

            <CounterSquare
                v-if="(days / 7).toFixed(0) >= 1"
                :label="(days / 7).toFixed(0) > 1 ? 'Weeks' : 'Week'"
                id="weeks"
                :value="(days / 7).toFixed(0)"
            />
        </div>

        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
            <CounterSquare label="Days" singular-label="Day" id="days" :value="days" />
            <CounterSquare label="Hours" singular-label="Hour" id="hours" :value="hours" />
            <CounterSquare label="Minutes" singular-label="Minute" id="minutes" :value="minutes" />
            <CounterSquare label="Seconds" singular-label="Second" id="seconds" :value="seconds" />
            <CounterSquare label="Ms" id="milliseconds" :value="milliseconds" />
        </div>
    </div>
</template>

<script setup lang="js">
import {
    onMounted,
    onUnmounted,
    ref,
} from 'vue';

import CounterSquare from '@/components/CounterSquare.vue';
import {
    formatMinSlot,
    formatSlot,
} from '@/utils/helpers.js';

// formatMinSlot

const props = defineProps({
    finalDate: {
        default: null,
    },
    fakeDate: {
        type: Boolean,
        default: false,
    },
});

const email = ref('');
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const milliseconds = ref(0);
let countdownInterval = null;

// Set launch date (30 days from now)
let finalDate = props?.finalDate || null;

if (props?.fakeDate || !finalDate) {
    finalDate = new Date().getDate() + 30; // fake date
}

const launchDate = new Date(finalDate);
launchDate.setDate(launchDate.getDate());

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        days.value = formatSlot(0, 2);
        hours.value = formatSlot(0, 2);
        minutes.value = formatSlot(0, 2);
        seconds.value = formatSlot(0, 2);
        milliseconds.value = formatSlot(0, 2);
        return;
    }

    days.value = formatSlot(Math.floor(distance / (1000 * 60 * 60 * 24)), 2);
    hours.value = formatSlot(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 2);
    minutes.value = formatSlot(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), 2);
    seconds.value = formatSlot(Math.floor((distance % (1000 * 60)) / 1000), 2);
    // milliseconds.value = Math.floor((distance % (1000 * 60)));
    milliseconds.value = formatSlot(new Date(distance).getMilliseconds(), 2);
};

const handleSubscribe = () => {
    if (email.value) {
        alert(`Thank you! We'll notify ${email.value} when we launch.`);
        email.value = '';
    }
};

onMounted(() => {
    updateCountdown();
    let msInterval = 1000;
    msInterval = 1;
    countdownInterval = setInterval(updateCountdown, msInterval);
});

onUnmounted(() => {
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
});
</script>
