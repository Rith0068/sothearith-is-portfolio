<template>
    <section class="bg-black w-full text-white relative">
        <div 
            class="fixed top-0 left-0 w-full h-screen z-0 bg-black"
            style="background-image: linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px); background-size: 40px 40px;"
        ></div>

        <div class="relative z-10">
            <section class="pb-25">
                <HeroSechtion />
            </section>
            <section class="py-25" id="about">
                <About/>
            </section>
        </div>
    </section>
</template>

<script setup>
import HeroSechtion from './hero-sechtion/index.vue'
import About from './about/index.vue'
</script>