const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const isCoarsePointer = () =>
  window.matchMedia('(hover: none), (pointer: coarse)').matches

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('tilt', {
    mounted(el, binding) {
      if (prefersReducedMotion() || isCoarsePointer()) return

      const {
        max = 8,
        scale = 1.015,
        lift = 4,
        perspective = 900
      } = binding.value || {}

      let raf = null
      let rx = 0
      let ry = 0
      let active = false

      const render = () => {
        raf = null
        const s = active ? scale : 1
        const y = active ? -lift : 0
        el.style.transform =
          `perspective(${perspective}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${s}) translateY(${y}px)`
      }

      const schedule = () => {
        if (!raf) raf = requestAnimationFrame(render)
      }

      const onEnter = () => {
        active = true
        el.style.transition = 'transform 0.12s linear'
        schedule()
      }

      const onMove = (event) => {
        const rect = el.getBoundingClientRect()
        const px = (event.clientX - rect.left) / rect.width - 0.5
        const py = (event.clientY - rect.top) / rect.height - 0.5
        ry = px * max * 2
        rx = -py * max * 2
        schedule()
      }

      const onLeave = () => {
        active = false
        el.style.transition = 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)'
        rx = 0
        ry = 0
        schedule()
      }

      el.style.transformStyle = 'preserve-3d'
      el.style.willChange = 'transform'

      el.addEventListener('pointerenter', onEnter)
      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerleave', onLeave)

      el._tiltCleanup = () => {
        el.removeEventListener('pointerenter', onEnter)
        el.removeEventListener('pointermove', onMove)
        el.removeEventListener('pointerleave', onLeave)
        if (raf) cancelAnimationFrame(raf)
      }
    },
    unmounted(el) {
      el._tiltCleanup?.()
    }
  })

  nuxtApp.vueApp.directive('scroll-parallax', {
    mounted(el, binding) {
      if (prefersReducedMotion()) return

      const { speed = 0.1 } = binding.value || {}
      let raf = null

      const render = () => {
        raf = null
        el.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`
      }

      const onScroll = () => {
        if (!raf) raf = requestAnimationFrame(render)
      }

      el.style.willChange = 'transform'
      render()
      window.addEventListener('scroll', onScroll, { passive: true })

      el._scrollCleanup = () => {
        window.removeEventListener('scroll', onScroll)
        if (raf) cancelAnimationFrame(raf)
      }
    },
    unmounted(el) {
      el._scrollCleanup?.()
    }
  })

  nuxtApp.vueApp.directive('mouse-parallax', {
    mounted(el, binding) {
      if (prefersReducedMotion() || isCoarsePointer()) return

      const { strength = 24 } = binding.value || {}
      let raf = null
      let tx = 0
      let ty = 0

      const render = () => {
        raf = null
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
      }

      const onMove = (event) => {
        tx = (event.clientX / window.innerWidth - 0.5) * strength * 2
        ty = (event.clientY / window.innerHeight - 0.5) * strength * 2
        if (!raf) raf = requestAnimationFrame(render)
      }

      el.style.willChange = 'transform'
      window.addEventListener('pointermove', onMove, { passive: true })

      el._mouseCleanup = () => {
        window.removeEventListener('pointermove', onMove)
        if (raf) cancelAnimationFrame(raf)
      }
    },
    unmounted(el) {
      el._mouseCleanup?.()
    }
  })
})
