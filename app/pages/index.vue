<template>
  <section class="bg-black w-full text-white relative overflow-x-hidden">
    <!-- Background Grid -->
    <div
      class="fixed top-0 left-0 w-full h-screen z-0 bg-black pointer-events-none"
      style="background-image: linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px); background-size: 40px 40px;"
    ></div>

    <div class="relative z-10">
      <section class="pb-4 sm:pb-6 md:pb-8" id="home">
        <FadeInSection direction="scale">
          <HeroSechtion />
        </FadeInSection>
      </section>

      <section class="py-4 sm:py-6 md:py-8" id="about">
        <FadeInSection direction="left">
          <About />
        </FadeInSection>
      </section>

      <section class="py-4 sm:py-6 md:py-8" id="work">
        <FadeInSection direction="left">
          <Work />
        </FadeInSection>
      </section>

      <section class="py-4 sm:py-6 md:py-8" id="prosecss">
        <FadeInSection direction="up">
          <Prosecss />
        </FadeInSection>
      </section>

      <section class="py-4 sm:py-6 md:py-8" id="experiences">
        <FadeInSection direction="right">
          <Experiences />
        </FadeInSection>
      </section>

      <section class="py-4 sm:py-6 md:py-8" id="contact">
        <FadeInSection direction="up" :duration="1000">
          <Contact />
        </FadeInSection>
      </section>
    </div>
  </section>
</template>

<script setup>
import HeroSechtion from './hero-sechtion/index.vue'
import About from './about/index.vue'
import Prosecss from './prosecss/index.vue'
import Experiences from './experiences/index.vue'
import Contact from './contact/index.vue'
import Work from './work/index.vue'
</script>