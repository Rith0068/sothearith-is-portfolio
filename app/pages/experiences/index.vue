<template>
  <div class="flex flex-col gap-8 px-4 sm:px-0">
    <!-- Header -->
    <h3 class="font-bold text-2xl sm:text-[28px] md:text-[32px] text-gray-200">
      <span class="text-green-400">4</span> Experience
    </h3>

    <!-- Timeline Wrapper -->
    <div class="relative flex flex-col gap-6 pl-6 sm:pl-8 border-l border-dashed border-green-500/30 ml-2 sm:ml-4">
      
      <div
        v-for="(exp, i) in experiences"
        :key="exp.title"
        class="experience-card relative flex flex-col gap-3 rounded-xl border border-dashed border-green-500/40 bg-[#0d1117]/80 backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-400 group"
      >
        <!-- Timeline Node (Glowing Dot) -->
        <div class="absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-[#0d1117] shadow-[0_0_12px_rgba(74,222,128,0.9)] group-hover:scale-125 transition-transform duration-300"></div>

        <!-- Decorative Corner Accents -->
        <span class="absolute -top-1 -left-1 text-green-400/80 font-mono text-[10px] select-none">+</span>
        <span class="absolute -top-1 -right-1 text-green-400/80 font-mono text-[10px] select-none">+</span>
        <span class="absolute -bottom-1 -left-1 text-green-400/80 font-mono text-[10px] select-none">+</span>
        <span class="absolute -bottom-1 -right-1 text-green-400/80 font-mono text-[10px] select-none">+</span>

        <!-- Card Header: Year Badge & Index -->
        <div class="flex items-center justify-between gap-4">
          <span class="font-mono text-xs px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-semibold shadow-[0_0_10px_rgba(74,222,128,0.15)]">
            // {{ exp.year }}
          </span>
          <span class="font-mono text-[11px] tracking-widest text-gray-500 uppercase">
            EXP — {{ String(i + 1).padStart(2, '0') }}
          </span>
        </div>

        <!-- Title -->
        <h4 class="text-lg sm:text-xl font-bold text-gray-100 group-hover:text-green-400 transition-colors duration-200">
          {{ exp.title }}
        </h4>

        <!-- Description -->
        <p class="text-sm sm:text-base text-gray-400 font-normal leading-relaxed">
          {{ exp.description }}
        </p>
      </div>

    </div>
  </div>
</template>

<script setup>
const experiences = [
  {
    year: "2025",
    title: "Started Full Stack Development",
    description:
      "Began my journey in Full Stack Web and Mobile Application Development, learning modern technologies and building a strong foundation in frontend and backend development."
  },
  {
    year: "2025 - Present",
    title: "14+ Projects Built",
    description:
      "Designed and developed more than 14 academic and personal projects, gaining hands-on experience in responsive web development, databases, and problem-solving."
  },
  {
    year: "2025 - Present",
    title: "Backend Development Enthusiast",
    description:
      "Focused on business logic implementation, database design, and building scalable web applications using Laravel, PHP, MySQL, Vue.js, and Nuxt.js."
  },
  {
    year: "Present",
    title: "Seeking Internship Opportunities",
    description:
      "Actively seeking internship opportunities to gain real-world experience, collaborate with experienced developers, and continue growing as a Full Stack Developer."
  }
];
</script>

<style scoped>
/* Scoped Glow & Shadow Effects */
.experience-card {
  box-shadow: 0 0 20px -5px rgba(74, 222, 128, 0.15), inset 0 0 15px -5px rgba(74, 222, 128, 0.05);
}

.experience-card:hover {
  box-shadow: 0 0 35px 2px rgba(74, 222, 128, 0.35), inset 0 0 20px -2px rgba(74, 222, 128, 0.1);
}
</style>