<template>
  <section class="bg-black w-full text-white relative overflow-x-hidden">
    <div
      class="fixed top-0 left-0 w-full h-screen z-0 bg-black"
      style="background-image: linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px); background-size: 40px 40px;"
    ></div>

    <div class="relative z-10">
      <section class="pb-12 sm:pb-16 md:pb-25" id="home">
        <FadeInSection direction="scale">
          <HeroSechtion />
        </FadeInSection>
      </section>

      <section class="py-12 sm:py-16 md:py-25" id="about">
        <FadeInSection direction="left">
          <About />
        </FadeInSection>
      </section>

      <section class="py-16 sm:py-24 md:py-40 lg:py-60" id="prosecss">
        <FadeInSection direction="up">
          <Prosecss />
        </FadeInSection>
      </section>

      <section class="py-16 sm:py-24 md:py-32 lg:py-50" id="experiences">
        <FadeInSection direction="right">
          <Experiences />
        </FadeInSection>
      </section>

      <section class="pt-16 sm:pt-24 md:pt-32 lg:pt-50 pb-12 sm:pb-16 md:pb-20" id="contact">
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
</script>