export function useReveal(options = {}) {
  const { threshold = 0.15 } = options
  const target = ref(null)
  const isVisible = ref(false)

  let observer = null

  onMounted(() => {
    if (import.meta.server) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      isVisible.value = true
      return
    }

    if (!target.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.value = entry.isIntersecting
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(target.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { target, isVisible }
}
