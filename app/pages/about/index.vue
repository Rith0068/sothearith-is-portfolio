<template>
    <div class="flex justify-between">
        <div class="flex flex-col">
            <h3 class="font-bold text-[32px]">
                <span class="text-green-400">1</span> About
            </h3>
            <div class="flex flex-col w-150 mt-10" v-for="me in aboutMe" :key="me">
                <p class="text-lg text-gray-300">
                    {{ me.text }}
                </p>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="flex justify-between mt-10 w-120 pl-10 text-lg text-gray-300" v-for="contact in contactMe" :key="contact">
                <span class="">
                    {{ contact.tittle }}
                </span>
                <span>
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
        tittle : "Years of Learning",
        contact : " 2+"
    },
    {
        tittle : "Project",
        contact : " 13+"
    },
    {
        tittle : "Specialties",
        contact : "Full Stack, Web Development"
    },
    {
        tittle : "Based In",
        contact : "Phnom Penh, Cambodia"
    },
    {
        tittle : "Currently",
        contact : "Open to Internship Opportunities"
    },
]
</script>