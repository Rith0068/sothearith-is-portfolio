<template>
  <div ref="heroRef" class="relative">

    <!-- Ambient background layer -->
    <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute top-10 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-10 w-72 h-72 bg-green-400/5 rounded-full blur-3xl"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(74,222,128,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(74,222,128,0.04)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]"></div>
    </div>

    <div class="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 overflow-hidden">

      <!-- Text Container -->
      <Transition name="slide-left-to-right">
        <div v-if="isVisible" class="relative flex flex-col py-4 md:py-12 w-full md:w-[480px] text-center md:text-left order-2 md:order-1 items-center md:items-start">

          <!-- Ambient glow behind content -->
          <div class="pointer-events-none absolute -left-20 -top-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>

          <!-- Eyebrow label -->
          <p class="relative inline-flex items-center gap-2 text-green-400 text-sm sm:text-base font-mono tracking-widest uppercase">
            <span class="w-6 h-px bg-green-400/60"></span>
            Full Stack Development
            <span class="inline-block w-2 h-4 bg-green-400 cursor-blink ml-1"></span>
          </p>

          <div class="block py-4 sm:py-6 w-full max-w-[280px] sm:max-w-none mx-auto md:mx-0">
            <div class="flex justify-between w-full">
              <span class="w-2 h-2 border border-green-400 rotate-45"></span>
              <span class="w-2 h-2 border border-green-400 rotate-45"></span>
            </div>

            <h1 class="relative font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl py-2 text-white leading-tight drop-shadow-[0_0_25px_rgba(74,222,128,0.15)]">
              <span class="bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
                Hi, I'm
              </span>
              <br>
              <span class="relative inline-block">
                SoTheaRith
                <span class="absolute -bottom-1 left-0 md:left-0 w-1/2 h-[3px] bg-gradient-to-r from-green-400 to-transparent"></span>
              </span>
            </h1>

            <div class="flex justify-between w-full">
              <span class="w-2 h-2 border border-green-400 rotate-45"></span>
              <span class="w-2 h-2 border border-green-400 rotate-45"></span>
            </div>
          </div>

          <p class="text-sm sm:text-base md:text-lg text-gray-400 mb-6 max-w-md leading-relaxed">
            I build <span class="text-gray-200 font-medium">fast</span>,
            <span class="text-gray-200 font-medium">scalable</span>, and
            <span class="text-gray-200 font-medium">user-friendly</span>
            web and mobile applications using modern technologies.
          </p>

          <!-- View Resume Button -->
          <div class="flex justify-center md:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500/10 border border-green-400/40 text-green-400 font-mono text-sm sm:text-base font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:bg-green-400 hover:text-black hover:shadow-[0_0_35px_rgba(74,222,128,0.6)] hover:border-green-300 active:scale-95 group"
            >
              <span class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              <span class="relative">VIEW RESUME</span>
              <svg
                class="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </Transition>

      <!-- Image -->
      <Transition name="slide-right-to-left">
        <div v-if="isVisible" class="relative order-1 md:order-2 shrink-0 float-photo">

          <!-- Corner brackets -->
          <span class="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-green-400"></span>
          <span class="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-green-400"></span>
          <span class="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-green-400"></span>
          <span class="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-green-400"></span>

          <img
            src="~/assets/travel.jpg"
            alt="Portrait of Koem SoTheaRith"
            class="photo grayscale-[40%] w-40 h-40 sm:w-64 sm:h-64 md:w-[380px] md:h-[380px] mt-4 md:mt-10 object-cover object-top border border-green-500/40 transition-all duration-300 rounded-3xl hover:grayscale-0 shrink-0"
          >

          <!-- Status badge -->
          <div class="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm border border-green-400/40 text-green-400 font-mono text-xs">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Available for work
          </div>
        </div>
      </Transition>

    </div>

    <div class="flex justify-center md:justify-start py-4 sm:py-8 w-full">
      <Role />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Role from '~/components/role.vue'

const heroRef = ref(null)
const isVisible = ref(false)

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      isVisible.value = entry.isIntersecting
    },
    { threshold: 0.15 }
  )

  if (heroRef.value) observer.observe(heroRef.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.slide-left-to-right-enter-active,
.slide-left-to-right-leave-active,
.slide-right-to-left-enter-active,
.slide-right-to-left-leave-active {
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
}

.slide-left-to-right-enter-from,
.slide-left-to-right-leave-to {
  opacity: 0;
  transform: translateX(-80px);
}

.slide-right-to-left-enter-from,
.slide-right-to-left-leave-to {
  opacity: 0;
  transform: translateX(80px);
}

.photo {
  box-shadow: 0 0 40px 5px rgba(74, 222, 128, 0.4);
}

.photo:hover {
  box-shadow: 0 0 55px 10px rgba(74, 222, 128, 0.6);
}

/* Gentle floating motion on the whole photo block */
.float-photo {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
}

/* Terminal-style blinking cursor */
.cursor-blink {
  animation: blink 1.1s step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>