<template>
  <div class="border flex flex-wrap sm:flex-nowrap gap-y-4 py-4 px-4 sm:px-5 w-full sm:w-fit md:w-180 border-dashed border-white/20 rounded-md">
    <div
      class="flex flex-col px-2 w-1/2 sm:w-auto"
      v-for="role in roles"
      :key="role.name"
    >
      <span class="text-gray-400 text-xs sm:text-sm">
        {{ role.name }}
      </span>
      <span class="text-white">
        <p class="text-sm sm:text-md">
          {{ role.role }}
        </p>
      </span>
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