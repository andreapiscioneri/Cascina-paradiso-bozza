<script setup lang="ts">
/**
 * Initial page loader — logo reveal + progress bar + fade-out.
 * Blocks scroll via body.is-loading until complete.
 */
const isVisible = ref(true)
const progress = ref(0)
const root = ref<HTMLElement | null>(null)
const logo = ref<HTMLElement | null>(null)

onMounted(() => {
  if (typeof window === 'undefined') return

  document.body.classList.add('is-loading')

  const { $gsap } = useNuxtApp() as any

  // Animate progress → 100% over ~1.6s
  const tl = $gsap.timeline()
  tl.to(progress, {
    value: 100,
    duration: 1.6,
    ease: 'power2.inOut',
    onUpdate() {
      progress.value = Math.round(this.targets()[0].value)
    },
  })

  // Logo entrance
  $gsap.from(logo.value, {
    y: 30,
    opacity: 0,
    duration: 1.2,
    ease: 'expo.out',
  })

  // Fade out
  tl.to(root.value, {
    opacity: 0,
    duration: 0.6,
    delay: 0.1,
    ease: 'expo.out',
    onComplete: () => {
      isVisible.value = false
      document.body.classList.remove('is-loading')
      window.dispatchEvent(new CustomEvent('loader:done'))
    },
  })
})
</script>

<template>
  <div v-if="isVisible" ref="root" class="cp-loader">
    <div ref="logo" class="flex flex-col items-center gap-3 px-6 w-full max-w-xs sm:max-w-sm mx-auto">
      <span class="font-serif text-fluid-xl sm:text-fluid-2xl tracking-tight text-center">Cascina Paradiso</span>
      <span class="eyebrow text-[10px] sm:text-xs opacity-60">{{ $t('loader.since') }}</span>
    </div>
    <div class="cp-loader__bar">
      <span class="cp-loader__fill" :style="{ width: progress + '%' }"></span>
    </div>
  </div>
</template>
