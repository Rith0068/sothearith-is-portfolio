<template>
    <div class="flex flex-col font-bold">
        <h3 class="font-bold text-[32px]">
            <span class="text-green-400">2</span> How I Work
        </h3>
        <div class="flex justify-between pt-5" v-for="experiencess in experiences" :key="experiencess">
            <p class="text-sm text-green-500 text-lg">
                {{ experiencess.year }}
            </p>
            <div class="flex flex-col w-210">
                <p class="text-lg">
                    {{ experiencess.title }}
                </p>
                <p class="text-sm text-gray-500">
                    {{ experiencess.description }}
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