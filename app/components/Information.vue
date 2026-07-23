<template>
    <div class="border flex py-2 px-5 w-150 border-dashed border-white/20 rounded-md">
        <div class="flex flex-col px-2"  v-for="quickInfomantion in quickInfo" :key="quickInfomantion">
            <span class="text-gray-400 text-sm">
                {{ quickInfomantion.title }}
            </span>
            <span class="text-white">
                <p class="text-md">
                    {{ quickInfomantion.value }}
                </p>
            </span>
        </div>
    </div>
</template>
<script setup>
const quickInfo = [
    {
        title: "LOCATION",
        value: "Phnom Penh, KH",
    },
    {
        title: "TIMEZONE",
        value: "ICT (UTC+7)",
    },
    {
        title: "RESPONSE TIME",
        value: "Within 12 Hours",
    },
    {
        title: "AVAILABILITY",
        value: "Internship & Full-Time",
    },
];
</script>