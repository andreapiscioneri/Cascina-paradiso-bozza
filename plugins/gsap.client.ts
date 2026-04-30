import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger)

  // Default ease for all animations — cinematic expo
  gsap.defaults({
    ease: 'expo.out',
    duration: 1.1,
  })

  // Respect user reduced-motion preference
  if (typeof window !== 'undefined') {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      gsap.globalTimeline.timeScale(10)
    }
  }

  return {
    provide: {
      gsap,
      ScrollTrigger,
    },
  }
})
