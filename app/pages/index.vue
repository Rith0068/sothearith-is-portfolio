<template>
    <section class="bg-black w-full pb-40 text-white" style="background-image: url('');">
        <div class="flex justify-between">
            <div class="flex flex-col py-30 w-120">
                <p class="text-green-400 text-lg text-gray-300">
                    ___ FULL STACK DEVELOPMENT
                </p>
                <div class="block py-10 w-70">
                    <div class="flex justify-between w-100">
                        <span class="w-2 h-2 border border-green-400"></span>
                        <span class="w-2 h-2 border border-green-400"></span>
                    </div>
                    <h1 class="font-bold text-7xl font-bold py-2">
                        <span class="text-green-400">Hi I'm</span> 
                        <br>SoTheaRith
                    </h1>
                    <div class="flex justify-between w-100">
                        <span class="w-2 h-2 border border-green-400"></span>
                        <span class="w-2 h-2 border border-green-400"></span>
                    </div>
                </div>
                <p class="text-lg text-gray-300 leading-8">
                    I build complete web applications from front end to back end — creating fast, scalable, and user-focused solutions that balance performance, functionality, and clean design.
                </p>
            </div>
            <img 
                :src="myPhoto" 
                alt="my photo"
                class="photo mt-30 w-100 h-100 border-[5px] border-green-500 shadow-lg shadow-green-500 hover:shadow-xl">
        </div>
        <section>
            <About />
        </section>
    </section>
</template>
<style scoped>

</style>
<script setup>
import About from './about/index.vue'
import myPhoto from "~/assets/my-photo.jpg"
</script>