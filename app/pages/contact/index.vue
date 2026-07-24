<template>
  <div class="flex flex-col md:flex-row justify-between gap-8 md:gap-6 px-4 sm:px-0">
    <div class="flex flex-col">
      <h1 class="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-6 md:pb-10">
        <span>Have a project</span>
        <br>in mind? Let's talk.
      </h1>
      <Information class="mb-6 md:mb-10" />
    </div>

    <div class="flex flex-col md:items-end">
      <p
        class="py-2 text-sm sm:text-base text-gray-500 break-all sm:break-normal"
        v-for="infos in info"
        :key="infos.contact"
      >
        {{ infos.contact }}
      </p>
    </div>
  </div>
</template>

<script setup>
import Information from '~/components/Information.vue';

const info = [
  {
    contact: 'sothearithkoem@gmail.com'
  },
  {
    contact: '068 617 960'
  },
  {
    contact: 'https://github.com/Rith0068'
  },
  {
    contact: '@sothearithkoem'
  }
]
</script>