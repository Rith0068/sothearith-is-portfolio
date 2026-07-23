<template>
    <div class="flex justify-between">
        <div class="flex flex-col">
            <h1 class="font-bold text-7xl pb-10">
                <span class="">Have a project</span> 
                <br>in mind? Let's talk.
            </h1>
            <Information class="mb-10"/>
        </div>
        <div class="flex flex-col">
            <p class="py-2 text-gray-500" v-for="infos in info" :key="infos">
                {{ infos.contact }}
            </p>
        </div>
    </div>
</template>
<script setup>
import Information from '~/components/Information.vue';

const info = [
    {
        contact : 'sothearithkoem@gmail.com'
    },
    {
        contact : '068 617 960'
    },
    {
        contact : 'https://github.com/Rith0068'
    },

]
</script>
