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
        text : "I'm a Full Stack Developer who enjoys building modern, responsive, and user-friendly web applications. I work across both frontend and backend technologies to create complete digital solutions that are functional, scalable, and easy to use."
    },
    {
        text : "My journey into development started with a curiosity about how websites work. Since then, I've been learning and building projects using technologies like HTML, CSS, JavaScript, Tailwind CSS, Vue.js, Nuxt.js, Laravel, PHP, and MySQL. I enjoy turning ideas into real applications and continuously improving my skills."
    },
    {
        text : "I love working on both the design and logic of an application—from creating clean user interfaces to developing secure and efficient backend systems. Solving problems and learning new technologies are what keep me motivated as a developer."
    },
    {
        text : "Outside of coding, I enjoy exploring new tools and frameworks, contributing to personal projects, and challenging myself to build better and more efficient solutions. I'm currently seeking opportunities to grow as a Full Stack Developer and collaborate with others on meaningful projects."
    }
]

const contactMe = [
    {
        tittle : "Years of Practice",
        contact : " 2+"
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
        contact : "Open to Internship / Open to Work"
    },
]
</script>