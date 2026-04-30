import { defineStore } from 'pinia'

/**
 * Lightweight UI store — loader + overlay flags.
 * Extend with menu open state, filters, etc.
 */
export const useUiStore = defineStore('ui', () => {
  const isLoaded = ref(false)
  const isMenuOpen = ref(false)

  const markLoaded = () => (isLoaded.value = true)
  const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
  const closeMenu = () => (isMenuOpen.value = false)

  return { isLoaded, isMenuOpen, markLoaded, toggleMenu, closeMenu }
})
