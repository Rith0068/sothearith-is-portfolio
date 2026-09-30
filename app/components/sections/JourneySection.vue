<template>
  <div ref="journeyRef" class="flex flex-col gap-8">
    <!-- Left: Heading (Slides Left to Right) -->
    <Transition name="slide-left-to-right">
      <h2
        v-show="isVisible"
        class="font-bold text-2xl sm:text-[28px] lg:text-[32px] text-gray-200"
      >
        <span class="text-green-400">4</span> Journey
      </h2>
    </Transition>

    <!-- Right: Timeline (Slides Right to Left) -->
    <Transition name="slide-right-to-left">
      <div
        v-show="isVisible"
        class="relative flex flex-col gap-6 pl-6 sm:pl-8 border-l border-dashed border-green-500/30 ml-2 sm:ml-4"
      >
        <div
          v-for="(step, i) in journey"
          :key="step.title"
          class="journey-card relative flex flex-col gap-3 rounded-xl border border-dashed border-green-500/40 bg-[#0d1117]/80 backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-400 group"
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
              // {{ step.year }}
            </span>
            <span class="font-mono text-[11px] tracking-widest text-gray-500 uppercase">
              STEP — {{ String(i + 1).padStart(2, '0') }}
            </span>
          </div>

          <!-- Title -->
          <h3 class="text-lg sm:text-xl font-bold text-gray-100 group-hover:text-green-400 transition-colors duration-200">
            {{ step.title }}
          </h3>

          <!-- Description -->
          <p class="text-sm sm:text-base text-gray-400 font-normal leading-relaxed">
            {{ step.description }}
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const { target: journeyRef, isVisible } = useReveal()

const journey = [
  {
    year: "2025",
    title: "Started Learning Full Stack Development",
    description:
      "Began with HTML, CSS and JavaScript, then moved into Vue.js and Nuxt.js for the frontend before picking up Laravel, PHP and MySQL to understand the backend properly.",
  },
  {
    year: "2025",
    title: "Turned Coursework Into Real Products",
    description:
      "Stopped stopping at tutorials and started shipping — responsive frontends, admin dashboards and CRUD systems backed by real databases, schemas and migrations.",
  },
  {
    year: "2026",
    title: "Going Deeper Into the Backend",
    description:
      "Focused on business logic, database design and authentication — building role-based systems like the Smart Locker platform in Laravel with Blade and Tailwind CSS.",
  },
  {
    year: "Present",
    title: "Looking for an Internship",
    description:
      "Actively seeking an internship to work alongside experienced developers, get my code reviewed, and keep shipping work that real people use.",
  },
];
</script>
