<template>
  <header class="top-0 z-50 sticky mt-0">
    <div class="flex w-full items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32 xl:px-50 bg-black text-white font-heading py-2">

      <!-- Logo -->
      <div>
        <NuxtLink to="#home" class="text-sm sm:text-base whitespace-nowrap">
          <span class="text-green-400 border border-green-500 py-1 px-1">[ KS ]</span>
          <span class="hidden sm:inline"> KOEM SOTHEARITH</span>
        </NuxtLink>
      </div>

      <!-- Desktop nav links -->
      <div class="hidden md:flex gap-6 lg:gap-10 text-base lg:text-lg">
        <NuxtLink to="#about" class="text-gray-400 hover:text-green-500 hover:border-b">About</NuxtLink>
        <NuxtLink to="#prosecss" class="text-gray-400 hover:text-green-500 hover:border-b">Process</NuxtLink>
        <NuxtLink to="#experiences" class="text-gray-400 hover:text-green-500 hover:border-b">Experience</NuxtLink>
        <NuxtLink to="#contact" class="text-gray-400 hover:text-green-500 hover:border-b">Contact</NuxtLink>
      </div>

      <!-- Available for work (desktop only) -->
      <div class="hidden lg:flex items-center gap-2 text-sm text-gray-300">
        <span class="bg-green-500 h-2 w-2 rounded-full border border-green-600"></span>
        Available for work
      </div>

      <!-- Mobile hamburger button -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2"
        @click="isOpen = !isOpen"
        aria-label="Toggle menu"
      >
        <span class="w-6 h-0.5 bg-white transition-transform" :class="{ 'rotate-45 translate-y-2': isOpen }"></span>
        <span class="w-6 h-0.5 bg-white transition-opacity" :class="{ 'opacity-0': isOpen }"></span>
        <span class="w-6 h-0.5 bg-white transition-transform" :class="{ '-rotate-45 -translate-y-2': isOpen }"></span>
      </button>
    </div>

    <!-- Mobile dropdown menu -->
    <Transition name="fade">
      <div v-if="isOpen" class="md:hidden bg-black text-white flex flex-col px-4 py-4 gap-4 border-t border-gray-800">
        <NuxtLink to="#about" class="text-gray-400 hover:text-green-500" @click="isOpen = false">About</NuxtLink>
        <NuxtLink to="#prosecss" class="text-gray-400 hover:text-green-500" @click="isOpen = false">Process</NuxtLink>
        <NuxtLink to="#experiences" class="text-gray-400 hover:text-green-500" @click="isOpen = false">Experience</NuxtLink>
        <NuxtLink to="#contact" class="text-gray-400 hover:text-green-500" @click="isOpen = false">Contact</NuxtLink>
        <div class="flex items-center gap-2 text-sm text-gray-300 pt-2">
          <span class="bg-green-500 h-2 w-2 rounded-full border border-green-600"></span>
          Available for work
        </div>
      </div>
    </Transition>

    <hr class="text-gray-500 shadow-xl">
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>