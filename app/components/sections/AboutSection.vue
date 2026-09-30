<template>
  <div ref="aboutRef" class="flex flex-col lg:flex-row justify-between gap-10 overflow-hidden">
    <!-- Left Section: About Details (Slides Left to Right) -->
    <Transition name="slide-left-to-right">
      <div v-show="isVisible" class="flex flex-col w-full lg:w-auto">
        <h2 class="font-bold text-2xl sm:text-[28px] lg:text-[32px] text-gray-200">
          <span class="text-green-400">1</span> About
        </h2>

        <div class="flex flex-col w-full lg:w-[600px] mt-6 lg:mt-10 gap-6">
          <!-- Main Group Photo -->
          <div class="photo-card relative group overflow-hidden rounded-3xl aspect-[4/3] border border-green-500/40 bg-[#0d1117] transition-all duration-500 hover:border-green-400">
            <!-- Decorative Corner Crosses -->
            <span class="absolute top-2 left-2 z-10 text-green-400/80 font-mono text-[10px] select-none">+</span>
            <span class="absolute top-2 right-2 z-10 text-green-400/80 font-mono text-[10px] select-none">+</span>
            <span class="absolute bottom-2 left-2 z-10 text-green-400/80 font-mono text-[10px] select-none">+</span>
            <span class="absolute bottom-2 right-2 z-10 text-green-400/80 font-mono text-[10px] select-none">+</span>

            <img
              src="~/assets/group.jpg"
              alt="Group photo with classmates and friends"
              loading="lazy"
              decoding="async"
              class="w-full h-full grayscale-[40%] object-cover transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          </div>

          <!-- About Text Paragraphs -->
          <div
            class="flex flex-col gap-4"
            v-for="me in aboutMe"
            :key="me.text"
          >
            <p class="text-base sm:text-lg text-gray-400 leading-relaxed hover:text-gray-300 transition-colors duration-300">
              {{ me.text }}
            </p>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Right Section: Stats & Photo (Slides Right to Left) -->
    <Transition name="slide-right-to-left">
      <div v-show="isVisible" class="flex flex-col w-full lg:w-auto">
        <!-- Stats Table -->
        <div class="flex flex-col mt-6 lg:mt-10 w-full lg:w-[480px] divide-y divide-green-500/20">
          <div
            class="group relative flex flex-col sm:flex-row sm:justify-between lg:pl-10 text-base sm:text-lg text-gray-300 gap-1 sm:gap-0 py-4 transition-all duration-300 hover:pl-2 lg:hover:pl-14"
            v-for="row in contactMe"
            :key="row.title"
          >
            <span class="absolute left-0 bottom-0 w-0 h-[1.5px] bg-green-400 shadow-[0_0_10px_2px_rgba(74,222,128,0.8)] group-hover:w-full transition-all duration-500"></span>
            <span class="font-medium sm:font-normal text-gray-400 sm:text-gray-300 group-hover:text-green-400 transition-colors duration-300">
              {{ row.title }}
            </span>
            <span class="sm:text-right group-hover:text-white transition-colors duration-300 font-mono">
              {{ row.value }}
            </span>
          </div>
        </div>

        <!-- Secondary Photo -->
        <div class="photo-card relative group overflow-hidden rounded-3xl aspect-[3/4] w-full lg:w-[480px] lg:ml-10 mt-8 border border-green-500/40 bg-[#0d1117] transition-all duration-500 hover:border-green-400">
          <!-- Decorative Corner Crosses -->
          <span class="absolute top-2 left-2 z-10 text-green-400/80 font-mono text-[10px] select-none">+</span>
          <span class="absolute top-2 right-2 z-10 text-green-400/80 font-mono text-[10px] select-none">+</span>
          <span class="absolute bottom-2 left-2 z-10 text-green-400/80 font-mono text-[10px] select-none">+</span>
          <span class="absolute bottom-2 right-2 z-10 text-green-400/80 font-mono text-[10px] select-none">+</span>

          <img
            src="~/assets/my-photo.jpg"
            alt="Portrait of Koem SoTheaRith"
            loading="lazy"
            decoding="async"
            class="w-full h-full grayscale-[40%] object-cover transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const { target: aboutRef, isVisible } = useReveal()

const aboutMe = [
  {
    text: "I'm a passionate Full Stack Developer who enjoys building modern, responsive, and user-friendly web applications across both frontend and backend."
  },
  {
    text: "I've been continuously learning and building projects with HTML, CSS, JavaScript, Tailwind CSS, Vue.js, Nuxt.js, Laravel, PHP, MySQL, and PostgreSQL — strengthening my problem-solving skills along the way."
  },
  {
    text: "Beyond coding, I love exploring new technologies and contributing to personal projects that challenge me to grow. I'm currently seeking internship and collaborative opportunities to keep learning and building."
  }
];

const contactMe = [
  { title: "Years of Learning", value: "2+" },
  { title: "Projects Built", value: "14+" },
  { title: "Specialties", value: "Full Stack, Web Development" },
  { title: "Based In", value: "Phnom Penh, Cambodia" },
  { title: "Currently", value: "Open to Internship Opportunities" },
]
</script>
