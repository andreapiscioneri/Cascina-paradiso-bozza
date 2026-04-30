<script setup lang="ts">
/**
 * Split + reveal headlines. Pass `as` to change the tag,
 * and `split` to pick words / chars / lines.
 */
interface Props {
  as?: string
  split?: 'words' | 'chars' | 'lines'
  stagger?: number
  delay?: number
  start?: string
}
const props = withDefaults(defineProps<Props>(), {
  as: 'h2',
  split: 'words',
  stagger: 0.05,
  delay: 0,
  start: 'top 85%',
})

const root = ref<HTMLElement | null>(null)

useSplitReveal(root, {
  type: props.split,
  stagger: props.stagger,
  delay: props.delay,
  start: props.start,
})
</script>

<template>
  <component :is="as" ref="root" class="overflow-hidden inline-block">
    <slot />
  </component>
</template>
