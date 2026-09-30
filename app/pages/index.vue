<template>
  <main class="bg-black w-full text-white relative overflow-x-hidden min-h-screen">
    <!-- GPU-Accelerated Background Grid -->
    <div
      class="fixed inset-0 z-0 bg-black pointer-events-none transform-gpu"
      style="background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 40px 40px;"
    ></div>

    <!-- Main Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto">
      <section class="pb-4 sm:pb-6 md:pb-8" id="home">
        <HeroSection />
      </section>

      <section class="py-6 sm:py-8 md:py-12" id="about">
        <AboutSection />
      </section>

      <section class="py-6 sm:py-8 md:py-12" id="process">
        <ProcessSection />
      </section>

      <section class="py-6 sm:py-8 md:py-12" id="work">
        <WorkSection />
      </section>

      <section class="py-6 sm:py-8 md:py-12" id="journey">
        <JourneySection />
      </section>

      <section class="py-6 sm:py-8 md:py-12" id="contact">
        <ContactSection />
      </section>
    </div>
  </main>
</template>

<script setup>
import HeroSection from '~/components/sections/HeroSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import ProcessSection from '~/components/sections/ProcessSection.vue'
import JourneySection from '~/components/sections/JourneySection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import WorkSection from '~/components/sections/WorkSection.vue'
</script>