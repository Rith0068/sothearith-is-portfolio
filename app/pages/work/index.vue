<template>
  <div class="flex flex-col w-full gap-8">
    <h3 class="font-bold text-2xl sm:text-[28px] md:text-[32px] text-gray-200">
      <span class="text-green-400">{{ projects.length }}</span> Selected work
    </h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <article
        v-for="(project, i) in projects"
        :key="project.title"
        class="relative flex flex-col gap-2.5 rounded-md border-[1.5px] border-dotted border-green-400 bg-[#0d1117] p-6"
      >
        <span class="font-mono text-[11px] tracking-widest uppercase text-gray-500">
          FRAME — {{ String(i + 1).padStart(2, '0') }}
        </span>

        <p class="font-mono text-sm text-green-400">{{ project.year }}</p>

        <h4 class="font-serif font-bold text-2xl leading-snug">
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-green-400 hover:underline underline-offset-4"
          >
            {{ project.title }}
          </a>
          <span v-else class="text-green-400">{{ project.title }}</span>
        </h4>

        <p class="text-gray-400 text-[15px] leading-relaxed">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-2.5 mt-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="font-mono text-xs text-gray-400 border border-gray-700 rounded px-2.5 py-1.5"
          >
            {{ tag }}
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