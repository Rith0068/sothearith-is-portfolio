<template>
  <hr class="text-gray-500 shadow-xl sticky">
  <footer class="bg-black mb-0 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-50 py-4 sticky">
    <div class="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-white">

      <div>
        <span class="text-gray-400 text-sm sm:text-base">
          <p>@Koem SoTheaRith</p>
        </span>
      </div>

      <div>
        <span class="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 text-gray-400 text-sm sm:text-base">
          <NuxtLink to="/about" class="hover:text-green-500">About</NuxtLink>
          <NuxtLink to="/#" class="hover:text-green-500">Process</NuxtLink>
          <NuxtLink to="/#" class="hover:text-green-500">Experience</NuxtLink>
          <NuxtLink to="/#" class="hover:text-green-500">Contact</NuxtLink>
        </span>
      </div>

    </div>
  </footer>
</template>