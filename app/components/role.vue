<template>
  <div class="role-container relative w-full grid grid-cols-2 sm:flex sm:flex-nowrap justify-between gap-4 py-4 px-4 sm:px-6 border border-dashed border-green-500/40 rounded-xl bg-[#0d1117]/80 backdrop-blur-sm transition-all duration-300 hover:border-green-400">
    <!-- Decorative Corner Accent Crosses -->
    <span class="absolute -top-1 -left-1 text-green-400/80 font-mono text-[10px] select-none">+</span>
    <span class="absolute -top-1 -right-1 text-green-400/80 font-mono text-[10px] select-none">+</span>
    <span class="absolute -bottom-1 -left-1 text-green-400/80 font-mono text-[10px] select-none">+</span>
    <span class="absolute -bottom-1 -right-1 text-green-400/80 font-mono text-[10px] select-none">+</span>

    <div
      v-for="role in roles"
      :key="role.name"
      class="flex flex-col min-w-0 group"
    >
      <span class="text-gray-500 text-xs font-mono tracking-widest uppercase mb-1 transition-colors duration-200 group-hover:text-green-400">
        {{ role.name }}
      </span>
      <p class="text-gray-200 text-sm sm:text-base font-medium truncate group-hover:text-white transition-colors duration-200">
        {{ role.role }}
      </p>
    </div>
  </div>
</template>

<script setup>
const roles = [
  {
    name: 'ROLE',
    role: 'Full Stack Developer'
  },
  {
    name: 'BASED IN',
    role: 'Phnom Penh, Cambodia'
  },
  {
    name: 'FOCUS',
    role: 'Web & Mobile Development'
  },
  {
    name: 'STATUS',
    role: 'Open to Work'
  },
]
</script>