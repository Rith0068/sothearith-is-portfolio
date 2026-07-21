<template>
    <div class="flex justify-between">
        <div class="flex flex-col py-25 w-120">
            <p class="text-green-400 text-lg text-gray-300">
                ___ FULL STACK DEVELOPMENT
            </p>
            <div class="block py-10 w-70">
                <div class="flex justify-between w-100">
                    <span class="w-2 h-2 border border-green-400"></span>
                    <span class="w-2 h-2 border border-green-400"></span>
                </div>
                <h1 class="font-bold text-7xl py-2">
                    <span class="text-green-400">Hi, I'm</span> 
                    <br>SoTheaRith
                </h1>
                <div class="flex justify-between w-100">
                    <span class="w-2 h-2 border border-green-400"></span>
                    <span class="w-2 h-2 border border-green-400"></span>
                </div>
            </div>
            <p class="text-lg text-gray-300 ">
                I build fast, scalable, and user-friendly web and mobile applications using modern technologies.
            </p>
        </div>
        <img 
            :src="myPhoto" 
            alt="my photo"
            class="photo mt-20 w-100 h-100 rounded-md shadow-xl shadow-green-500 hover:shadow-2xl hover:mt-19 ">
    </div>
    <Role />
</template>
<script setup>
import Role from '../../components/role.vue'
import myPhoto from "~/assets/my-photo.jpg"
</script>