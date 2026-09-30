<template>
  <div class="quick-info-container relative grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 px-4 sm:px-6 w-full sm:w-fit border border-dashed border-green-500/40 rounded-xl bg-[#0d1117]/80 backdrop-blur-sm transition-all duration-300 hover:border-green-400">
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
      <p class="text-gray-200 text-sm sm:text-base font-medium break-words group-hover:text-white transition-colors duration-200">
        {{ info.value }}
      </p>
    </div>
  </div>
</template>

<script setup>
const quickInfo = [
  {
    title: "EMAIL",
    value: "sothearithkoem@gmail.com",
  },
  {
    title: "TELEGRAM",
    value: "@Shikichirih",
  },
  {
    title: "RESPONSE TIME",
    value: "Within 12 Hours",
  },
  {
    title: "TIMEZONE",
    value: "ICT (UTC+7)",
  },
];
</script>