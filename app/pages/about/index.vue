<template>
  <div class="flex flex-col lg:flex-row justify-between gap-10 px-4 sm:px-0">
    <FadeInSection direction="left" class="flex flex-col w-full lg:w-auto">
      <h3 class="font-bold text-2xl sm:text-[28px] lg:text-[32px]">
        <span class="text-green-400">1</span> About
      </h3>

      <div class="flex flex-col w-full lg:w-150 mt-6 lg:mt-10 gap-6">
        <div class="relative group overflow-hidden rounded-md border border-green-400/60 shadow-[0_0_25px_rgba(74,222,128,0.5)] hover:shadow-[0_0_40px_rgba(74,222,128,0.8)] hover:border-green-400 transition-all duration-500">
          <img
            src="../../assets/group.jpg"
            alt="About me"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

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
    </FadeInSection>

    <FadeInSection direction="right" class="flex flex-col w-full lg:w-auto">
      <div class="flex flex-col mt-6 lg:mt-10 w-full lg:w-120 divide-y divide-green-500/20">
        <div
          class="group relative flex flex-col sm:flex-row sm:justify-between lg:pl-10 text-base sm:text-lg text-gray-300 gap-1 sm:gap-0 py-4 transition-all duration-300 hover:pl-2 lg:hover:pl-14"
          v-for="contact in contactMe"
          :key="contact.tittle"
        >
          <span class="absolute left-0 bottom-0 w-0 h-[1.5px] bg-green-400 shadow-[0_0_10px_2px_rgba(74,222,128,0.8)] group-hover:w-full transition-all duration-500"></span>
          <span class="font-medium sm:font-normal text-gray-400 sm:text-gray-300 group-hover:text-green-400 transition-colors duration-300">
            {{ contact.tittle }}
          </span>
          <span class="sm:text-right group-hover:text-white transition-colors duration-300">
            {{ contact.contact }}
          </span>
        </div>
      </div>

      <div class="relative group overflow-hidden rounded-md w-full lg:w-120 lg:ml-10 mt-8 border border-green-400/60 shadow-[0_0_25px_rgba(74,222,128,0.5)] hover:shadow-[0_0_40px_rgba(74,222,128,0.8)] hover:border-green-400 transition-all duration-500">
        <img
          src="../../assets/my-photo.jpg"
          alt="Contact"
          class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
    </FadeInSection>
  </div>
</template>

<script setup>
const aboutMe = [
  {
    text: "I'm a passionate Full Stack Developer who enjoys building modern, responsive, and user-friendly web applications across both frontend and backend."
  },
  {
    text: "I've been continuously learning and building projects with HTML, CSS, JavaScript, Tailwind CSS, Vue.js, Nuxt.js, Laravel, PHP, and MySQL — strengthening my problem-solving skills along the way."
  },
  {
    text: "Beyond coding, I love exploring new technologies and contributing to personal projects that challenge me to grow. I'm currently seeking internship and collaborative opportunities to keep learning and building."
  }
];

const contactMe = [
  { tittle: "Years of Learning", contact: " 2+" },
  { tittle: "Project", contact: " 14+" },
  { tittle: "Specialties", contact: "Full Stack, Web Development" },
  { tittle: "Based In", contact: "Phnom Penh, Cambodia" },
  { tittle: "Currently", contact: "Open to Internship Opportunities" },
]
</script>