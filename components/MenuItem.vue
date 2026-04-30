<script setup lang="ts">
interface Props {
  name: string
  desc: string
  price: string
}
defineProps<Props>()
</script>

<template>
  <article
    data-reveal
    class="group flex items-start justify-between gap-6 py-6 border-b border-[color:var(--line)] last:border-0"
  >
    <div class="flex-1">
      <h4 class="font-serif text-fluid-xl mb-1 transition-colors duration-400 group-hover:text-wine">
        {{ name }}
      </h4>
      <p class="text-fluid-sm opacity-70 max-w-prose leading-relaxed">{{ desc }}</p>
    </div>
    <span
      class="font-serif text-fluid-xl shrink-0 tabular-nums after:content-['€'] after:text-fluid-base after:opacity-60 after:ml-0.5"
    >
      {{ price }}
    </span>
  </article>
</template>
