<script setup>
import css from "~/assets/img-code/css.png";
import html from "~/assets/img-code/html.png";
import js from "~/assets/img-code/js.png";
import nuxt from "~/assets/img-code/nuxt.png";
import php from "~/assets/img-code/php.png";
import vue from "~/assets/img-code/vue.png";

const myCodeLanguas = [
  { name: "Css", photoCode: css },
  { name: "Html", photoCode: html },
  { name: "Js", photoCode: js },
  { name: "Nuxt", photoCode: nuxt },
  { name: "Php", photoCode: php },
  { name: "Vue", photoCode: vue },
];
</script>

<template>
  <div class="marquee-wrapper">
    <div class="marquee-track">
      <div
        v-for="(code, i) in [...myCodeLanguas, ...myCodeLanguas]"
        :key="i"
        class="chip"
      >
        <img :src="code.photoCode" class="w-[36px] h-[36px] object-contain" alt="code photo" />
        <p class="pl-3 whitespace-nowrap font-medium text-white/90">{{ code.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-wrapper {
  overflow: hidden;
  width: 100%;
  position: relative;
  padding-top: 50px;

  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

.marquee-track {
  display: flex;
  align-items: center;
  width: max-content;
  gap: 20px;
  animation: scroll 28s linear infinite;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}

.chip {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 12px 22px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
}

.chip:hover {
  transform: translateY(-4px);
  background: rgba(74, 222, 128, 0.08);
  border-color: rgba(74, 222, 128, 0.4);
}

@keyframes scroll {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-50%, 0, 0);
  }
}
</style>