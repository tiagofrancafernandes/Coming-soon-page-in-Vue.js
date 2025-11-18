<template>
    <div
        class="bg-blue-100 dark:bg-black bg-opacity-80 dark:bg-opacity-30 rounded-lg px-0 py-2 transition-colors duration-300 text-center flex flex-col justify-center"
    >
        <div
            class="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300 text-center"
            id="props?.id"
        >
            <template v-if="$slots.default">
                <slot />
            </template>
            <template v-else>
                {{ props?.value }}
            </template>
        </div>
        <div class="text-sm text-blue-700 dark:text-blue-200 transition-colors duration-300">{{ props?.label }}</div>
    </div>
</template>

<script setup lang="js">
// import { useSlots, useAttrs } from 'vue';

// const slots = useSlots();
// const attrs = useAttrs();

const props = defineProps({
    value: {
        default: null,
    },
    label: {
        type: String,
        default: null,
    },
    id: {
        type: String,
    },
});
</script>
