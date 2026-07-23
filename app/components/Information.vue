<template>
  <div class="border flex flex-wrap sm:flex-nowrap gap-y-4 py-4 px-4 sm:px-5 w-full sm:w-fit md:w-150 border-dashed border-white/20 rounded-md">
    <div
      class="flex flex-col px-2 w-1/2 sm:w-auto"
      v-for="quickInfomantion in quickInfo"
      :key="quickInfomantion.title"
    >
      <span class="text-gray-400 text-xs sm:text-sm">
        {{ quickInfomantion.title }}
      </span>
      <span class="text-white">
        <p class="text-sm sm:text-md">
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