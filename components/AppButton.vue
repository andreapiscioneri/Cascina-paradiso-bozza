<script setup lang="ts">
interface Props {
  to?: string
  href?: string
  variant?: 'solid' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'solid',
  size: 'md',
  external: false,
  type: 'button',
})

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-400 ease-expo rounded-full whitespace-nowrap select-none will-change-transform group'

const variants = {
  solid:
    'bg-brown text-cream hover:bg-wine dark:bg-cream dark:text-brown dark:hover:bg-wine dark:hover:text-cream',
  outline:
    'border border-current text-current hover:bg-brown hover:text-cream dark:hover:bg-cream dark:hover:text-brown',
  ghost: 'text-current hover:opacity-70',
}

const sizes = {
  sm: 'px-5 py-2 text-xs uppercase tracking-eyebrow',
  md: 'px-7 py-3.5 text-sm uppercase tracking-eyebrow',
  lg: 'px-9 py-4 text-sm uppercase tracking-eyebrow',
}

const classes = computed(() => [base, variants[props.variant], sizes[props.size]])

const tag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const bindings = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href)
    return {
      href: props.href,
      ...(props.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
    }
  return { type: props.type }
})
</script>

<template>
  <component :is="tag" v-bind="bindings" :class="classes">
    <slot />
    <span
      class="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1"
      aria-hidden="true"
    >
      →
    </span>
  </component>
</template>
