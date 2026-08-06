<template>
  <div>
    <div class="cursor-dot" ref="dotRef"></div>
    <div class="cursor-glow" ref="glowRef"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const dotRef = ref(null)
const glowRef = ref(null)
let trails = []
let animationFrame = null

onMounted(() => {
  const trailCount = 8
  for (let i = 0; i < trailCount; i++) {
    const el = document.createElement('div')
    el.className = 'trail-particle'
    document.body.appendChild(el)
    trails.push({ el, x: 0, y: 0 })
  }

  let mouseX = 0, mouseY = 0
  let glowX = 0, glowY = 0

  const handleMouseMove = (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    if (dotRef.value) {
      dotRef.value.style.left = mouseX + 'px'
      dotRef.value.style.top = mouseY + 'px'
    }
  }
  window.addEventListener('mousemove', handleMouseMove)

  const animate = () => {
    glowX += (mouseX - glowX) * 0.15
    glowY += (mouseY - glowY) * 0.15
    if (glowRef.value) {
      glowRef.value.style.left = glowX + 'px'
      glowRef.value.style.top = glowY + 'px'
    }

    let prevX = mouseX, prevY = mouseY
    trails.forEach((t, i) => {
      t.x += (prevX - t.x) * 0.3
      t.y += (prevY - t.y) * 0.3
      t.el.style.left = t.x + 'px'
      t.el.style.top = t.y + 'px'
      t.el.style.opacity = 1 - i / trailCount
      prevX = t.x
      prevY = t.y
    })

    animationFrame = requestAnimationFrame(animate)
  }
  animate()

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    cancelAnimationFrame(animationFrame)
    trails.forEach(t => t.el.remove())
  })
})
</script>

<style scoped>
:global(*) {
  cursor: none;
}

.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  background: #4ade80;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  box-shadow: 0 0 10px 2px rgba(74, 222, 128, 0.8);
  transform: translate(-50%, -50%);
}

.cursor-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, rgba(74, 222, 128, 0.4) 0%, rgba(74, 222, 128, 0) 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: transform 0.15s ease-out;
}

:global(.trail-particle) {
  position: fixed;
  top: 0;
  left: 0;
  width: 6px;
  height: 6px;
  background: rgba(74, 222, 128, 0.6);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9997;
  filter: blur(2px);
}
</style>