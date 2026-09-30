<template>
  <div ref="contactRef" class="flex flex-col lg:flex-row justify-between gap-10 overflow-hidden">
    <!-- Left Section: Contact Details (Slides Left to Right) -->
    <Transition name="slide-left-to-right">
      <div v-show="isVisible" class="flex flex-col w-full lg:w-auto">
        <h2 class="font-bold text-2xl sm:text-[28px] lg:text-[32px] text-gray-200">
          <span class="text-green-400">5</span> Contact
        </h2>

        <div class="flex flex-col w-full lg:w-[600px] mt-6 lg:mt-10 gap-6">
          <p class="text-base sm:text-lg text-gray-400 leading-relaxed hover:text-gray-300 transition-colors duration-300">
            I'm open to internship opportunities, freelance work, and collaborations. If you have a
            project in mind or just want to say hello, feel free to reach out — I reply to every
            message.
          </p>

          <Information />
        </div>
      </div>
    </Transition>

    <!-- Right Section: Contact Channels (Slides Right to Left) -->
    <Transition name="slide-right-to-left">
      <div v-show="isVisible" class="flex flex-col w-full lg:w-auto">
        <div class="flex flex-col mt-6 lg:mt-10 w-full lg:w-[480px] divide-y divide-green-500/20">
          <a
            v-for="channel in info"
            :key="channel.label"
            :href="channel.link"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative flex flex-col sm:flex-row sm:justify-between lg:pl-10 text-base sm:text-lg text-gray-300 gap-1 sm:gap-0 py-4 transition-all duration-300 hover:pl-2 lg:hover:pl-14"
          >
            <span class="absolute left-0 bottom-0 w-0 h-[1.5px] bg-green-400 shadow-[0_0_10px_2px_rgba(74,222,128,0.8)] group-hover:w-full transition-all duration-500"></span>
            <span class="font-medium sm:font-normal text-gray-400 sm:text-gray-300 group-hover:text-green-400 transition-colors duration-300">
              {{ channel.label }}
            </span>
            <span class="sm:text-right font-mono text-sm sm:text-base break-all sm:break-normal group-hover:text-white transition-colors duration-300">
              {{ channel.contact }}
            </span>
          </a>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import Information from '~/components/Information.vue';

const { target: contactRef, isVisible } = useReveal()

const info = [
  {
    label: "Gmail",
    contact: "sothearithkoem@gmail.com",
    link: "mailto:sothearithkoem@gmail.com",
  },
  {
    label: "Phone",
    contact: "068 617 960",
    link: "tel:+85568617960",
  },
  {
    label: "GitHub",
    contact: "github.com/Rith0068",
    link: "https://github.com/Rith0068",
  },
  {
    label: "Telegram",
    contact: "@Shikichirih",
    link: "https://t.me/Shikichirih",
  }
]
</script>
