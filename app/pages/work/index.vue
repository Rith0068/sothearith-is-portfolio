<template>
  <div class="flex flex-col gap-8">
    <h3 class="font-bold text-2xl sm:text-[28px] md:text-[32px] text-gray-200">
      <span class="text-green-400">2</span> Selected work
    </h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <article
        v-for="(project, i) in projects"
        :key="project.title"
        class="project-card relative flex flex-col justify-between gap-3.5 rounded-xl border border-dashed border-green-500/40 bg-[#0d1117]/80 backdrop-blur-sm p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-green-400"
      >
        <!-- Decorative Corner Accent Crosses -->
        <span class="absolute -top-1 -left-1 text-green-400/80 font-mono text-[10px] select-none">+</span>
        <span class="absolute -top-1 -right-1 text-green-400/80 font-mono text-[10px] select-none">+</span>
        <span class="absolute -bottom-1 -left-1 text-green-400/80 font-mono text-[10px] select-none">+</span>
        <span class="absolute -bottom-1 -right-1 text-green-400/80 font-mono text-[10px] select-none">+</span>

        <div class="flex flex-col gap-2.5">
          <!-- Header info -->
          <div class="flex items-center justify-between w-full">
            <span class="font-mono text-[11px] tracking-widest uppercase text-gray-500">
              FRAME — {{ String(i + 1).padStart(2, '0') }}
            </span>
            <span class="font-mono text-xs px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 shadow-[0_0_10px_rgba(74,222,128,0.15)]">
              {{ project.year }}
            </span>
          </div>

          <!-- Title -->
          <h4 class="font-serif font-bold text-2xl leading-snug">
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors group"
            >
              <span class="group-hover:underline underline-offset-4">{{ project.title }}</span>
              <svg class="w-4 h-4 opacity-70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <span v-else class="text-green-400">{{ project.title }}</span>
          </h4>

          <!-- Description -->
          <p class="text-gray-400 text-[15px] leading-relaxed">
            {{ project.description }}
          </p>
        </div>

        <!-- Tech Tags -->
        <div class="flex flex-wrap gap-2 pt-2 border-t border-gray-800/80 mt-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="font-mono text-xs text-gray-400 bg-gray-900/60 border border-gray-700/60 rounded-md px-2.5 py-1 transition-colors duration-200 hover:border-green-400/50 hover:text-green-300"
          >
            #{{ tag }}
          </span>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    year: "2026",
    title: "Cambodian Craft Beer Crown",
    description:
      "Built the event site for Cambodia's premier craft beer competition, covering 11 breweries, the event timetable, and awards for the 2026 crown.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://cambodian-craft-beer-crown-playgrou-wheat.vercel.app/",
  },
];
</script>

<style scoped>
/* Card Outer Glow & Shadow Effects */
.project-card {
  box-shadow: 0 0 20px -5px rgba(74, 222, 128, 0.15), inset 0 0 15px -5px rgba(74, 222, 128, 0.05);
}

.project-card:hover {
  box-shadow: 0 0 35px 2px rgba(74, 222, 128, 0.35), inset 0 0 20px -2px rgba(74, 222, 128, 0.1);
}
</style>