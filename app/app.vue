<script setup>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import ClientOnly from './components/CursorTrail.vue';
</script>
<template>
  <Header />
  <div class="scroll-smooth px-4 sm:px-8 md:px-16 lg:px-32 xl:px-50">
    <NuxtPage />
  </div>
  <Footer />
  <ClientOnly>
      <CursorTrail />
  </ClientOnly>
</template>
<style>
@import "~/assets/css/main.css";
</style>