<template>
  <div class="quick-info-container relative flex flex-wrap sm:flex-nowrap justify-between gap-4 py-4 px-4 sm:px-6 w-full sm:w-fit md:w-150 border border-dashed border-green-500/40 rounded-xl bg-[#0d1117]/80 backdrop-blur-sm transition-all duration-300 hover:border-green-400">
    <!-- Decorative Corner Crosses -->
    <span class="absolute -top-1 -left-1 text-green-400/80 font-mono text-[10px] select-none">+</span>
    <span class="absolute -top-1 -right-1 text-green-400/80 font-mono text-[10px] select-none">+</span>
    <span class="absolute -bottom-1 -left-1 text-green-400/80 font-mono text-[10px] select-none">+</span>
    <span class="absolute -bottom-1 -right-1 text-green-400/80 font-mono text-[10px] select-none">+</span>

    <div
      v-for="info in quickInfo"
      :key="info.title"
      class="flex flex-col min-w-0 group"
    >
      <span class="text-gray-500 text-xs font-mono tracking-widest uppercase mb-1 transition-colors duration-200 group-hover:text-green-400">
        {{ info.title }}
      </span>
      <p class="text-gray-200 text-sm sm:text-base font-medium truncate group-hover:text-white transition-colors duration-200">
        {{ info.value }}
      </p>
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

<style scoped>
/* Card Scoped Glow & Ambient Shadow Effects */
.quick-info-container {
  box-shadow: 0 0 20px -5px rgba(74, 222, 128, 0.15), inset 0 0 15px -5px rgba(74, 222, 128, 0.05);
}

.quick-info-container:hover {
  box-shadow: 0 0 30px 2px rgba(74, 222, 128, 0.3), inset 0 0 20px -2px rgba(74, 222, 128, 0.08);
}
</style>