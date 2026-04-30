/**
 * Generic fade-up reveal using GSAP + ScrollTrigger.
 * Applies to a single element or all [data-reveal] children.
 */
export const useReveal = (
  target: Ref<HTMLElement | null>,
  options: { stagger?: number; y?: number; delay?: number } = {},
) => {
  const { $gsap } = useNuxtApp() as any
  if (!$gsap) return

  const { stagger = 0.1, y = 60, delay = 0 } = options

  onMounted(() => {
    nextTick(() => {
      if (!target.value) return
      const root = target.value
      const items =
        root.querySelectorAll<HTMLElement>('[data-reveal]').length > 0
          ? root.querySelectorAll<HTMLElement>('[data-reveal]')
          : [root]

      $gsap.fromTo(
        items,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          stagger,
          delay,
          scrollTrigger: {
            trigger: root,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        },
      )
    })
  })
}
