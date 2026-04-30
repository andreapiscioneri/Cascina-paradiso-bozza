/**
 * Split + reveal headlines word-by-word with stagger.
 * Triggers when the element enters the viewport.
 */
import SplitType from 'split-type'

interface Options {
  type?: 'chars' | 'words' | 'lines' | 'words, chars'
  stagger?: number
  duration?: number
  y?: number
  delay?: number
  once?: boolean
  start?: string
}

export const useSplitReveal = (
  target: Ref<HTMLElement | null> | string,
  options: Options = {},
) => {
  const { $gsap, $ScrollTrigger } = useNuxtApp() as any
  if (!$gsap) return

  const {
    type = 'words',
    stagger = 0.04,
    duration = 1,
    y = 120,
    delay = 0,
    once = true,
    start = 'top 85%',
  } = options

  onMounted(() => {
    nextTick(() => {
      const el =
        typeof target === 'string'
          ? (document.querySelector(target) as HTMLElement | null)
          : target.value
      if (!el) return

      // Accessibility — keep readable text for screen readers
      el.setAttribute('aria-label', el.textContent || '')

      const split = new SplitType(el, { types: type as any })
      const targets =
        type === 'chars'
          ? split.chars
          : type === 'lines'
          ? split.lines
          : split.words

      if (!targets || targets.length === 0) return

      $gsap.set(targets, { yPercent: 110, opacity: 0 })

      $gsap.to(targets, {
        yPercent: 0,
        opacity: 1,
        duration,
        stagger,
        delay,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once ? 'play none none none' : 'play none none reverse',
        },
      })
    })
  })
}
