<template>
  <div class="flex flex-col px-4 sm:px-0">
    <h3 class="font-bold text-2xl sm:text-[28px] md:text-[32px]">
      <span class="text-green-400">2</span> How I Work
    </h3>

    <div class="flex flex-col sm:flex-row justify-between py-10 text-gray-500 font-bold gap-8 sm:gap-6 md:gap-10">
      <div
        class="flex flex-col border-t"
        v-for="processs in process"
        :key="processs.step"
      >
        <p class="py-5 text-sm text-green-500">
          {{ processs.step }}
        </p>
        <h6 class="text-lg text-white">
          {{ processs.title }}
        </h6>
        <p class="text-sm py-2">
          {{ processs.text }}
        </p>
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