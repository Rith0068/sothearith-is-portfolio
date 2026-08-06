<template>
  <div class="flex flex-col gap-8 px-4 sm:px-0">
    <!-- Header -->
    <h3 class="font-bold text-2xl sm:text-[28px] md:text-[32px] text-gray-200">
      <span class="text-green-400">3</span> How I Work
    </h3>

    <!-- Process Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(item, i) in process"
        :key="item.step"
        class="process-card relative flex flex-col justify-between gap-4 rounded-xl border border-dashed border-green-500/40 bg-[#0d1117]/80 backdrop-blur-sm p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-green-400 group"
      >
        <!-- Decorative Corner Crosses -->
        <span class="absolute -top-1 -left-1 text-green-400/80 font-mono text-[10px] select-none">+</span>
        <span class="absolute -top-1 -right-1 text-green-400/80 font-mono text-[10px] select-none">+</span>
        <span class="absolute -bottom-1 -left-1 text-green-400/80 font-mono text-[10px] select-none">+</span>
        <span class="absolute -bottom-1 -right-1 text-green-400/80 font-mono text-[10px] select-none">+</span>

        <div class="flex flex-col gap-3">
          <!-- Step Badge Header -->
          <div class="flex items-center justify-between w-full">
            <span class="font-mono text-xs px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-semibold shadow-[0_0_10px_rgba(74,222,128,0.15)]">
              // {{ item.step }}
            </span>
            <span class="font-mono text-[11px] tracking-widest text-gray-500 uppercase">
              PROC — {{ String(i + 1).padStart(2, '0') }}
            </span>
          </div>

          <!-- Title -->
          <h4 class="text-xl font-bold text-gray-100 group-hover:text-green-400 transition-colors duration-200 mt-2">
            {{ item.title }}
          </h4>

          <!-- Description -->
          <p class="text-sm sm:text-base text-gray-400 font-normal leading-relaxed">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const process = [
  {
    step: "01 / Design",
    title: "Plan before building",
    text: "I start every project by understanding its goals and designing the user experience before writing code. Careful planning helps me create applications that are intuitive, maintainable, and aligned with users' needs."
  },
  {
    step: "02 / Develop",
    title: "Build scalable solutions",
    text: "I enjoy developing both frontend and backend systems, with a strong interest in business logic and database design. I focus on building responsive, secure, and scalable web applications using modern technologies and development practices."
  },
  {
    step: "03 / Grow",
    title: "Learn without limits",
    text: "I continuously challenge myself to learn new frameworks, mobile development, and cybersecurity concepts. I believe that learning from experienced developers is one of the best ways to grow and become a better Full Stack Developer every day."
  }
];
</script>

<style scoped>
/* Card Scoped Glow & Shadow Effects */
.process-card {
  box-shadow: 0 0 20px -5px rgba(74, 222, 128, 0.15), inset 0 0 15px -5px rgba(74, 222, 128, 0.05);
}

.process-card:hover {
  box-shadow: 0 0 35px 2px rgba(74, 222, 128, 0.35), inset 0 0 20px -2px rgba(74, 222, 128, 0.1);
}
</style>