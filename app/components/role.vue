<template>
    <div class="border flex py-2 px-5 w-180 border-dashed border-white/20 rounded-md">
        <div class="flex flex-col px-2"  v-for="role in roles" :key="role">
            <span class="text-gray-400 text-sm">
                {{ role.name }}
            </span>
            <span class="text-white ">
                <p class="text-md">
                    {{ role.role }}
                </p>
            </span>
        </div>
    </div>
</template>
<script setup>
const roles = [
    {
        name : 'ROLE',
        role : 'Full Stack Developer'
    },
    {
        name : 'BASED IN',
        role : 'Phnom Penh, Cambodia'
    },
    {
        name : 'FOCUS',
        role : 'Web & Mobile Development'
    },
    {
        name : 'STATUS',
        role : 'Open to Work'
    },
]
</script>