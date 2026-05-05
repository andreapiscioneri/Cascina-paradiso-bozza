<script setup lang="ts">
/**
 * Image with cinematic mask-reveal + subtle parallax zoom.
 * Wrap a NuxtImg inside. Shows "VIEW" cursor on hover.
 */
interface Props {
  src: string
  alt?: string
  ratio?: 'portrait' | 'landscape' | 'square' | 'cinematic'
  parallax?: boolean
  fit?: 'cover' | 'contain'
  sizes?: string
  preload?: boolean
  rounded?: boolean
  hoverLabel?: string
}
const props = withDefaults(defineProps<Props>(), {
  alt: '',
  ratio: 'landscape',
  parallax: true,
  fit: 'cover',
  sizes: 'sm:100vw md:80vw lg:1200px',
  preload: false,
  rounded: false,
  hoverLabel: 'View',
})

const wrapper = ref<HTMLElement | null>(null)
const mask = ref<HTMLElement | null>(null)
const imgWrap = ref<HTMLElement | null>(null)

const { setMode, reset } = useCursor()

const onEnter = () => setMode('image', props.hoverLabel)
const onLeave = () => reset()

onMounted(() => {
  nextTick(() => {
    const { $gsap } = useNuxtApp() as any
    if (!$gsap || !mask.value || !imgWrap.value) return

    // Mask reveal
    $gsap.fromTo(
      mask.value,
      { clipPath: 'inset(100% 0 0 0)' },
      {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.4,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: wrapper.value,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      },
    )

    // Subtle zoom while revealing
    $gsap.fromTo(
      imgWrap.value.querySelectorAll('img'),
      { scale: 1.15 },
      {
        scale: 1,
        duration: 1.6,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: wrapper.value,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      },
    )

    // Parallax on scroll
    if (props.parallax) {
      $gsap.to(imgWrap.value, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper.value,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
  })
})

const ratioClass = computed(() =>
  props.ratio === 'portrait'
    ? 'aspect-portrait'
    : props.ratio === 'square'
    ? 'aspect-square'
    : props.ratio === 'cinematic'
    ? 'aspect-cinematic'
    : 'aspect-landscape',
)

  const fitClass = computed(() => (props.fit === 'contain' ? 'object-contain' : 'object-cover'))
</script>

<template>
  <div
    ref="wrapper"
    class="relative w-full overflow-hidden bg-cream-200 dark:bg-noir-50"
    :class="[ratioClass, rounded ? 'rounded-3xl' : '']"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
  >
    <div ref="mask" class="absolute inset-0">
      <div ref="imgWrap" class="absolute inset-[-10%] will-change-transform">
        <NuxtImg
          :src="src"
          :alt="alt"
          :sizes="sizes"
          :preload="preload"
          loading="lazy"
          class="w-full h-full"
          :class="fitClass"
          format="webp"
        />
      </div>
    </div>
    <div
      class="pointer-events-none absolute inset-0"
      style="background: linear-gradient(to bottom, rgba(15,15,15,0) 0%, rgba(15,15,15,1) 100%)"
    />
  </div>
</template>
