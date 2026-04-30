<script setup lang="ts">
const colorMode = useColorMode()

const cycle = () => {
  const order = ['light', 'dark', 'system']
  const current = colorMode.preference
  const next = order[(order.indexOf(current) + 1) % order.length]
  colorMode.preference = next
}

const icon = computed(() => {
  if (colorMode.preference === 'system') return 'system'
  return colorMode.value === 'dark' ? 'dark' : 'light'
})

const label = computed(() => {
  if (colorMode.preference === 'system') return 'Auto'
  return colorMode.preference === 'dark' ? 'Dark' : 'Light'
})
</script>

<template>
  <button
    type="button"
    class="w-10 h-10 rounded-full border border-[color:var(--line)] inline-flex items-center justify-center leading-none transition-colors duration-400 ease-expo hover:bg-brown hover:text-cream dark:hover:bg-cream dark:hover:text-brown"
    :aria-label="`Theme: ${label}`"
    :title="`Theme: ${label}`"
    @click="cycle"
  >
    <!-- Sun -->
    <svg
      v-if="icon === 'light'"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      class="block"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 3v2M12 19v2M3 12h2M19 12h2M5.64 5.64l1.41 1.41M16.95 16.95l1.41 1.41M5.64 18.36l1.41-1.41M16.95 7.05l1.41-1.41"
      />
    </svg>
    <!-- Moon -->
    <svg
      v-else-if="icon === 'dark'"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      class="block"
      aria-hidden="true"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
    <!-- System -->
    <svg
      v-else
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      class="block"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 21h8M12 18v3" />
    </svg>
  </button>
</template>
