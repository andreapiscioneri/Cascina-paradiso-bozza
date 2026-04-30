<script setup lang="ts">
interface Props {
  items: string[]
  speed?: number
  italic?: boolean
}
withDefaults(defineProps<Props>(), { speed: 40, italic: false })
</script>

<template>
  <div class="marquee select-none py-6">
    <div class="marquee__track" :style="{ animationDuration: `${speed}s` }">
      <span
        v-for="(item, i) in [...items, ...items]"
        :key="i"
        class="font-serif text-fluid-5xl flex items-center gap-10"
        :class="italic ? 'italic' : ''"
      >
        {{ item }}
        <span class="inline-block w-2 h-2 rounded-full bg-wine" />
      </span>
    </div>
  </div>
</template>
