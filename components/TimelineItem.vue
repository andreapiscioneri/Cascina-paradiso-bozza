<script setup lang="ts">
interface Props {
  year: string
  title: string
  body: string
  image?: string
  imageAlt?: string
  align?: 'left' | 'right'
}
withDefaults(defineProps<Props>(), { align: 'left' })

const root = ref<HTMLElement | null>(null)
useReveal(root, { stagger: 0.1 })
</script>

<template>
  <article
    ref="root"
    class="grid md:grid-cols-2 gap-10 md:gap-20 items-center py-20 border-t border-[color:var(--line)]"
  >
    <div data-reveal :class="align === 'right' ? 'md:order-2' : ''">
      <span class="eyebrow text-wine">{{ year }}</span>
      <h3 class="font-serif text-fluid-4xl mt-4 mb-6 leading-tightest">{{ title }}</h3>
      <p class="text-fluid-base opacity-80 leading-relaxed max-w-prose">{{ body }}</p>
    </div>
    <div v-if="image" data-reveal :class="align === 'right' ? 'md:order-1' : ''">
      <ImageReveal :src="image" :alt="imageAlt || title" ratio="portrait" rounded />
    </div>
  </article>
</template>
