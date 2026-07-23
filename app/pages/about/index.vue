<template>
  <div class="flex flex-col lg:flex-row justify-between gap-10 px-4 sm:px-0">
    
    <div class="flex flex-col w-full lg:w-auto">
      <h3 class="font-bold text-2xl sm:text-[28px] lg:text-[32px]">
        <span class="text-green-400">1</span> About
      </h3>

      <div
        class="flex flex-col w-full lg:w-150 mt-6 lg:mt-10"
        v-for="me in aboutMe"
        :key="me.text"
      >
        <p class="text-base sm:text-lg text-gray-400">
          {{ me.text }}
        </p>
      </div>
    </div>

    <div class="flex flex-col w-full lg:w-auto">
      <div
        class="flex flex-col sm:flex-row sm:justify-between mt-6 lg:mt-10 w-full lg:w-120 lg:pl-10 text-base sm:text-lg text-gray-300 gap-1 sm:gap-0"
        v-for="contact in contactMe"
        :key="contact.tittle"
      >
        <span class="font-medium sm:font-normal text-gray-400 sm:text-gray-300">
          {{ contact.tittle }}
        </span>
        <span class="sm:text-right">
          {{ contact.contact }}
        </span>
      </div>
    </div>

  </div>
</template>

<script setup>
const aboutMe = [
  {
    text: "I'm a passionate Full Stack Developer who enjoys building modern, responsive, and user-friendly web applications. I work across both frontend and backend technologies to create scalable, efficient, and meaningful digital solutions that provide great user experiences."
  },
  {
    text: "My journey into web development began with a curiosity about how websites and applications are built. Since then, I've been continuously learning and developing projects using technologies such as HTML, CSS, JavaScript, Tailwind CSS, Vue.js, Nuxt.js, Laravel, PHP, and MySQL. Every project has helped me strengthen my problem-solving skills and deepen my understanding of modern development practices."
  },
  {
    text: "I enjoy working on every stage of application development—from designing clean and intuitive user interfaces to building secure, maintainable, and efficient backend systems. I'm passionate about writing clean code, optimizing performance, and transforming ideas into real-world applications that solve practical problems."
  },
  {
    text: "Beyond coding, I love exploring new technologies, experimenting with frameworks and tools, and contributing to personal projects that challenge me to grow as a developer. I'm currently seeking internship and collaborative opportunities where I can continue learning, contribute to meaningful projects, and develop my skills as a Full Stack Developer."
  }
];

const contactMe = [
  {
    tittle: "Years of Learning",
    contact: " 2+"
  },
  {
    tittle: "Project",
    contact: " 13+"
  },
  {
    tittle: "Specialties",
    contact: "Full Stack, Web Development"
  },
  {
    tittle: "Based In",
    contact: "Phnom Penh, Cambodia"
  },
  {
    tittle: "Currently",
    contact: "Open to Internship Opportunities"
  },
]
</script>