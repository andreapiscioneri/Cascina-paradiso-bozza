/**
 * Subtle parallax: translate an element on scroll.
 * Works with Lenis + ScrollTrigger.
 */
export const useParallax = (
  target: Ref<HTMLElement | null>,
  speed = 0.25,
) => {
  const { $gsap, $ScrollTrigger } = useNuxtApp() as any
  if (!$gsap) return

  onMounted(() => {
    nextTick(() => {
      if (!target.value) return
      const el = target.value

      $gsap.fromTo(
        el,
        { yPercent: -speed * 50 },
        {
          yPercent: speed * 50,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
    })
  })
}
