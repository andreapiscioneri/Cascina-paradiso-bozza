<script setup lang="ts">
interface Props {
  as?: string
  tone?: 'cream' | 'noir' | 'wine' | 'transparent'
  padding?: 'default' | 'lg' | 'none'
  id?: string
}
const props = withDefaults(defineProps<Props>(), {
  as: 'section',
  tone: 'transparent',
  padding: 'default',
})

const toneClass = {
  cream: 'bg-cream text-brown dark:bg-noir dark:text-cream',
  noir: 'bg-noir text-cream',
  wine: 'bg-wine text-cream',
  transparent: '',
}

const padClass = {
  default: 'py-section',
  lg: 'py-section-lg',
  none: '',
}
</script>

<template>
  <component
    :is="as"
    :id="id"
    class="relative container-x"
    :class="[toneClass[tone], padClass[padding]]"
  >
    <slot />
  </component>
</template>
