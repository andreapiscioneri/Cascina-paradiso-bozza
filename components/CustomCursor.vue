<script setup lang="ts">
/**
 * Smooth-follow custom cursor with states: default, hover link, hover image.
 * Hidden on touch devices.
 */
const cursorEl = ref<HTMLElement | null>(null)
const { mode, label } = useCursor()

let rafId = 0
const pos = { x: -100, y: -100 }
const target = { x: -100, y: -100 }
const ease = 0.18

const onMove = (e: MouseEvent) => {
  target.x = e.clientX
  target.y = e.clientY
}

const loop = () => {
  pos.x += (target.x - pos.x) * ease
  pos.y += (target.y - pos.y) * ease
  if (cursorEl.value) {
    cursorEl.value.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`
  }
  rafId = requestAnimationFrame(loop)
}

onMounted(() => {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(pointer: coarse)').matches) return
  window.addEventListener('mousemove', onMove, { passive: true })
  rafId = requestAnimationFrame(loop)
})

onBeforeUnmount(() => {
  if (typeof window === 'undefined') return
  window.removeEventListener('mousemove', onMove)
  cancelAnimationFrame(rafId)
})

const cursorClass = computed(() => ({
  'cp-cursor--hover': mode.value === 'hover',
  'cp-cursor--image': mode.value === 'image',
}))
</script>

<template>
  <div ref="cursorEl" class="cp-cursor" :class="cursorClass" aria-hidden="true">
    <span class="cp-cursor__ring" />
    <span class="cp-cursor__dot" />
    <span class="cp-cursor__label">{{ label }}</span>
  </div>
</template>
