<template>
  <span class="type-words" :class="{ 'is-visible': show }">
    <span class="sr-only">{{ text }}</span>
    <span aria-hidden="true">
      <span
        v-for="(word, i) in words"
        :key="`${word}-${i}`"
        class="type-mask"
      >
        <span class="type-line" :class="wordClass" :style="{ '--type-i': i }">{{ word }}</span>
      </span>
    </span>
  </span>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  show: {
    type: Boolean,
    default: true,
  },
  wordClass: {
    type: String,
    default: '',
  },
})

const words = computed(() => props.text.split(/\s+/).filter(Boolean))
</script>
