<template>
  <div class="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-10 px-4 sm:px-0">
    <div class="flex flex-col py-10 md:py-25 w-full md:w-120 text-center md:text-left">
      <p class="text-green-400 text-base sm:text-lg">
        ___ FULL STACK DEVELOPMENT
      </p>

      <div class="block py-6 sm:py-10 w-full sm:w-70 mx-auto md:mx-0">
        <div class="flex justify-between w-full sm:w-100">
          <span class="w-2 h-2 border border-green-400"></span>
          <span class="w-2 h-2 border border-green-400"></span>
        </div>

        <h1 class="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl py-2">
          <span class="text-green-400">Hi, I'm</span>
          <br>SoTheaRith
        </h1>

        <div class="flex justify-between w-full sm:w-100">
          <span class="w-2 h-2 border border-green-400"></span>
          <span class="w-2 h-2 border border-green-400"></span>
        </div>
      </div>

      <p class="text-base sm:text-lg text-gray-300">
        I build fast, scalable, and user-friendly web and mobile applications using modern technologies.
      </p>
    </div>

    <img
      :src="myPhoto"
      alt="my photo"
      class="photo w-48 h-48 sm:w-64 sm:h-64 md:w-100 md:h-100 mt-2 md:mt-20 rounded-md shadow-xl shadow-green-500 hover:shadow-2xl hover:mt-1 md:hover:mt-19 object-cover object-top"
    >
  </div>

    <div class="flex justify-center md:justify-start px-4 sm:px-0 py-0 sm:py-5 md:py-5 mt-4 md:mt-0">
        <Role />
    </div>
</template>

<script setup>
import Role from '../../components/role.vue'
import myPhoto from "~/assets/my-photo.jpg"
</script>