<template>
  <div
    ref="target"
    class="transition-all duration-700 ease-out"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  once: {
    type: Boolean,
    default: false
  }
})

const target = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        if (props.once) observer.unobserve(entry.target)
      } else if (!props.once) {
        isVisible.value = false
      }
    },
    { threshold: 0.15 }
  )
  observer.observe(target.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>