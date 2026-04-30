<script setup lang="ts">
interface Props {
  icon: 'fire' | 'land' | 'family'
  title: string
  description: string
  index?: number
}
const props = withDefaults(defineProps<Props>(), { index: 0 })

const root = ref<HTMLElement | null>(null)
useReveal(root, { stagger: 0.08, delay: props.index * 0.08 })
</script>

<template>
  <article
    ref="root"
    class="group relative p-8 md:p-10 rounded-3xl border border-[color:var(--line)] bg-cream-soft dark:bg-noir-50 transition-all duration-600 ease-expo hover:-translate-y-1 hover:border-wine"
    data-reveal
  >
    <div class="w-14 h-14 mb-6 text-wine">
      <!-- Fire -->
      <svg
        v-if="icon === 'fire'"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path
          d="M32 6c0 10-10 12-10 22a10 10 0 0 0 20 0c0-5-3-7-5-10s0 6-5 6c0-6 5-9 0-18z"
        />
        <path d="M26 40c0 4 3 7 6 7s6-3 6-7" />
      </svg>
      <!-- Land / wheat -->
      <svg
        v-else-if="icon === 'land'"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-linecap="round"
        aria-hidden="true"
      >
        <path d="M32 10v46" />
        <path d="M32 20c-6-2-10 0-12 4 4 2 8 1 12-1" />
        <path d="M32 20c6-2 10 0 12 4-4 2-8 1-12-1" />
        <path d="M32 32c-6-2-10 0-12 4 4 2 8 1 12-1" />
        <path d="M32 32c6-2 10 0 12 4-4 2-8 1-12-1" />
        <path d="M32 44c-6-2-10 0-12 4 4 2 8 1 12-1" />
        <path d="M32 44c6-2 10 0 12 4-4 2-8 1-12-1" />
      </svg>
      <!-- Family / home -->
      <svg
        v-else
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M10 30 32 12l22 18" />
        <path d="M16 28v24h32V28" />
        <path d="M28 52v-12h8v12" />
      </svg>
    </div>

    <h3 class="font-serif text-fluid-2xl mb-3">{{ title }}</h3>
    <p class="text-fluid-sm opacity-80 leading-relaxed max-w-sm">{{ description }}</p>

    <div
      class="absolute inset-x-10 bottom-0 h-px bg-wine scale-x-0 origin-left transition-transform duration-700 ease-expo group-hover:scale-x-100"
    />
  </article>
</template>
