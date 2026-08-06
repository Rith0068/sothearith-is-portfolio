<template>
  <div ref="heroRef">
    <div class="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-10 px-4 sm:px-0 overflow-hidden">
      
      <!-- Text Container (Slides from Left to Right) -->
      <Transition name="slide-left-to-right">
        <div v-if="isVisible" class="flex flex-col py-10 md:py-25 w-full md:w-120 text-center md:text-left order-2 md:order-1">
          <p class="text-green-400 text-base sm:text-lg font-mono tracking-wider">
            ___ FULL STACK DEVELOPMENT
          </p>

          <div class="block py-6 sm:py-10 w-full sm:w-70 mx-auto md:mx-0">
            <div class="flex justify-between w-full sm:w-100">
              <span class="w-2 h-2 border border-green-400"></span>
              <span class="w-2 h-2 border border-green-400"></span>
            </div>

            <h1 class="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl py-2 text-white">
              <span class="text-green-400">Hi, I'm</span>
              <br>SoTheaRith
            </h1>

            <div class="flex justify-between w-full sm:w-100">
              <span class="w-2 h-2 border border-green-400"></span>
              <span class="w-2 h-2 border border-green-400"></span>
            </div>
          </div>

          <p class="text-base sm:text-lg text-gray-400 mb-6">
            I build fast, scalable, and user-friendly web and mobile applications using modern technologies.
          </p>

          <!-- View Resume Button -->
          <div class="flex justify-center md:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500/10 border border-green-400/40 text-green-400 font-mono text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 hover:bg-green-400 hover:text-black hover:shadow-[0_0_25px_rgba(74,222,128,0.5)] active:scale-95 group"
            >
              <span>VIEW RESUME</span>
              <svg
                class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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

      <!-- Image (Slides from Right to Left) -->
      <Transition name="slide-right-to-left">
        <img
          v-if="isVisible"
          src="../../assets/travel.jpg"
          alt="my photo"
          class="photo w-48 h-48 sm:w-64 sm:h-64 md:w-100 md:h-100 mt-2 md:mt-20 object-cover object-top border border-green-500/40 transition-all duration-300 rounded-3xl hover:grayscale-0 order-1 md:order-2"
        >
      </Transition>

    </div>

    <div class="flex justify-center md:justify-start px-4 sm:px-0 py-0 sm:py-10 md:py-10 mt-4 md:mt-0 w-full">
      <Role />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Role from '../../components/role.vue'

const heroRef = ref(null)
const isVisible = ref(false)

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      isVisible.value = entry.isIntersecting
    },
    {
      threshold: 0.2
    }
  )

  if (heroRef.value) {
    observer.observe(heroRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
/* Text Animation: Slides from Left to Right */
.slide-left-to-right-enter-active,
.slide-left-to-right-leave-active {
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
}
.slide-left-to-right-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}
.slide-left-to-right-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

/* Image Animation: Slides from Right to Left */
.slide-right-to-left-enter-active,
.slide-right-to-left-leave-active {
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
}
.slide-right-to-left-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.slide-right-to-left-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

/* Photo Box Shadow Styling */
.photo {
  box-shadow: 0 0 40px 5px rgba(74, 222, 128, 0.4);
}

.photo:hover {
  box-shadow: 0 0 55px 10px rgba(74, 222, 128, 0.6);
  margin-top: 0.5rem;
}

@media (min-width: 768px) {
  .photo {
    margin-top: 5rem;
  }
  .photo:hover {
    margin-top: 4.75rem;
  }
}
</style>