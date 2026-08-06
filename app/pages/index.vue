<template>
  <main class="bg-black w-full text-white relative overflow-x-hidden min-h-screen">
    <!-- GPU-Accelerated Background Grid -->
    <div
      class="fixed inset-0 z-0 bg-black pointer-events-none transform-gpu"
      style="background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 40px 40px;"
    ></div>

    <!-- Main Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section class="pb-4 sm:pb-6 md:pb-8" id="home">
        <HeroSechtion />
      </section>

      <section class="py-6 sm:py-8 md:py-12" id="about">
        <About />
      </section>

      <section class="py-6 sm:py-8 md:py-12" id="work">
        <Work />
      </section>

      <section class="py-6 sm:py-8 md:py-12" id="process">
        <Prosecss />
      </section>

      <section class="py-6 sm:py-8 md:py-12" id="experiences">
        <Experiences />
      </section>

      <section class="py-6 sm:py-8 md:py-12" id="contact">
        <Contact />
      </section>
    </div>
  </main>
</template>

<script setup>
import HeroSechtion from './hero-sechtion/index.vue'
import About from './about/index.vue'
import Prosecss from './prosecss/index.vue'
import Experiences from './experiences/index.vue'
import Contact from './contact/index.vue'
import Work from './work/index.vue'
</script>

<style scoped>
/* GPU Hardware Layer Promotion to ensure 60fps scrolling */
section {
  will-change: transform, opacity;
  transform: translateZ(0);
}
</style>