<script setup lang="ts">
const { locale, setLocale } = useI18n()

const switchLang = () => {
  const next = locale.value === 'it' ? 'en' : 'it'
  setLocale(next as any)
}
</script>

<template>
  <button
    type="button"
    class="w-10 h-10 rounded-full border border-[color:var(--line)] inline-flex items-center justify-center transition-colors duration-400 ease-expo hover:bg-brown hover:text-cream dark:hover:bg-cream dark:hover:text-brown"
    :aria-label="`Language: ${locale}`"
    :title="`Language: ${locale === 'it' ? 'Italiano' : 'English'}`"
    @click="switchLang"
  >
    <svg
      v-if="locale === 'it'"
      viewBox="0 0 3 2"
      class="h-3.5 w-5 rounded-[2px] shadow-[0_0_0_1px_rgba(255,255,255,0.25)]"
      aria-hidden="true"
    >
      <rect width="3" height="2" fill="#012169" />
      <path d="M0 0l3 2M3 0L0 2" stroke="#FFFFFF" stroke-width="0.4" />
      <path d="M0 0l3 2M3 0L0 2" stroke="#C8102E" stroke-width="0.18" />
      <rect x="1.2" y="0" width="0.6" height="2" fill="#FFFFFF" />
      <rect x="0" y="0.7" width="3" height="0.6" fill="#FFFFFF" />
      <rect x="1.32" y="0" width="0.36" height="2" fill="#C8102E" />
      <rect x="0" y="0.82" width="3" height="0.36" fill="#C8102E" />
    </svg>

    <svg
      v-else
      viewBox="0 0 3 2"
      class="h-3.5 w-5 rounded-[2px] shadow-[0_0_0_1px_rgba(255,255,255,0.25)]"
      aria-hidden="true"
    >
      <rect width="1" height="2" x="0" fill="#009246" />
      <rect width="1" height="2" x="1" fill="#FFFFFF" />
      <rect width="1" height="2" x="2" fill="#CE2B37" />
    </svg>
  </button>
</template>
