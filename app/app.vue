<script setup>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
</script>
<template>
  <Header />
  <div class="scroll-smooth px-50">
    <NuxtPage />
  </div>
  <Footer />
</template>
<style>
@import "~/assets/css/main.css";
</style>