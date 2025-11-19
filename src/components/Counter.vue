<template>
    <div class="w-full">
        <div
            :data-ymh-cols="ymhCols"
            :class="[
                'grid gap-4 mb-5',
                {
                    'grid-cols-1': ymhCols === 1 || !ymhCols,
                    'grid-cols-2': ymhCols === 2,
                    'grid-cols-3': ymhCols === 3,
                },
            ]"
        >
            <CounterSquare v-if="years >= 1" :label="years > 1 ? 'Years' : 'Year'" id="years" :value="years" />

            <CounterSquare v-if="months >= 1" :label="months > 1 ? 'Months' : 'Month'" id="months" :value="months" />

            <CounterSquare v-if="weeks >= 1" :label="weeks > 1 ? 'Weeks' : 'Week'" id="weeks" :value="weeks" />
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
import { computed, onMounted, onUnmounted, ref } from 'vue';

import CounterSquare from '@/components/CounterSquare.vue';
import { diffCalendar, diffFromNow, formatMinSlot, formatSlot, ifValidDate, isFutureDate } from '@/utils/helpers.js';

// diffFromNow,
// diffCalendar,
// ifValidDate,
// isFutureDate,
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
const years = ref(0);
const months = ref(0);
const weeks = ref(0);
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const milliseconds = ref(0);
let countdownInterval = null;

const ymhCols = computed(() => [years.value > 0, months.value > 0, weeks.value > 0].filter(Boolean).length);

// Set launch date (30 days from now)
let finalDate = ifValidDate(props?.finalDate) || null;

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
        years.value = formatSlot(0, 2, 2);
        months.value = formatSlot(0, 2, 2);
        weeks.value = formatSlot(0, 2, 2);
        days.value = formatSlot(0, 2, 2);
        hours.value = formatSlot(0, 2);
        minutes.value = formatSlot(0, 2);
        seconds.value = formatSlot(0, 2);
        milliseconds.value = formatSlot(0, 3);
        return;
    }

    let diffData = diffCalendar(launchDate);

    years.value = formatSlot(diffData.years || 0, 2);
    months.value = formatSlot(diffData.months || 0, 2);
    weeks.value = formatSlot(diffData.weeks || 0, 2);
    days.value = formatSlot(diffData.days || 0, 2);
    hours.value = formatSlot(diffData.hours || 0, 2);
    minutes.value = formatSlot(diffData.minutes || 0, 2);
    seconds.value = formatSlot(diffData.seconds || 0, 2);
    milliseconds.value = formatSlot(diffData.milliseconds || 0, 3);

    // days.value = formatSlot(Math.floor(distance / (1000 * 60 * 60 * 24)), 2, 4);
    // hours.value = formatSlot(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 2);
    // minutes.value = formatSlot(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), 2);
    // seconds.value = formatSlot(Math.floor((distance % (1000 * 60)) / 1000), 2);
    // // milliseconds.value = Math.floor((distance % (1000 * 60)));
    // milliseconds.value = formatSlot(new Date(distance).getMilliseconds(), 2);
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
