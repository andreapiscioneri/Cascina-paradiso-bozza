<script setup lang="ts">
/**
 * Navbar — fixed, transparent at top, condensed on scroll.
 * Desktop: horizontal links. Mobile: hamburger → full-screen overlay.
 */
const { t } = useI18n()
const localePath = useLocalePath()

const isScrolled = ref(false)
const isOpen = ref(false)

const onScroll = () => {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

watch(isOpen, (v) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = v ? 'hidden' : ''
})

const links = computed(() => [
  { to: localePath('/storia'), label: t('nav.storia') },
  { to: localePath('/menu'), label: t('nav.menu') },
  { to: localePath('/contatti'), label: t('nav.contatti') },
  { to: localePath('/posizionamento'), label: t('nav.posizionamento') },
])
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-[50] transition-all duration-500 ease-expo"
    :class="[
      isScrolled || isOpen
        ? 'backdrop-blur-xl bg-cream/80 dark:bg-noir/80 border-b border-[color:var(--line)]'
        : 'bg-transparent',
    ]"
  >
    <div class="container-x flex items-center justify-between h-[var(--nav-h)]">
      <!-- Logo -->
      <NuxtLink
        :to="localePath('/')"
        class="flex items-center gap-3 group"
        @click="isOpen = false"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 72 72"
          fill="none"
          class="transition-transform duration-600 ease-expo group-hover:rotate-[8deg]"
          aria-hidden="true"
        >
          <circle cx="36" cy="36" r="34" stroke="currentColor" stroke-width="1.5" />
          <path
            d="M22 44c4-10 10-14 14-14s10 4 14 14"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <circle cx="36" cy="28" r="2.5" fill="currentColor" />
        </svg>
        <span class="flex flex-col leading-none">
          <span class="font-serif text-fluid-lg">Cascina Paradiso</span>
          <span class="eyebrow opacity-60 hidden sm:inline">{{ $t('brand.since') }}</span>
        </span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden lg:flex items-center gap-10">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-fluid-sm line-hover"
          active-class="opacity-100"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Right cluster -->
      <div class="flex items-center gap-4">
        <ThemeToggle class="hidden sm:flex" />
        <LangToggle class="hidden sm:flex" />
        <AppButton
          :to="localePath('/prenotazioni')"
          variant="solid"
          size="sm"
          class="hidden md:inline-flex"
        >
          {{ $t('nav.prenota') }}
        </AppButton>

        <!-- Hamburger -->
        <button
          type="button"
          class="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          :aria-expanded="isOpen"
          aria-label="Menu"
          @click="isOpen = !isOpen"
        >
          <span
            class="block w-6 h-px bg-current transition-transform duration-400 ease-expo"
            :class="isOpen ? 'translate-y-[6px] rotate-45' : ''"
          />
          <span
            class="block w-6 h-px bg-current transition-opacity duration-200"
            :class="isOpen ? 'opacity-0' : ''"
          />
          <span
            class="block w-6 h-px bg-current transition-transform duration-400 ease-expo"
            :class="isOpen ? '-translate-y-[6px] -rotate-45' : ''"
          />
        </button>
      </div>
    </div>

    <!-- Mobile overlay -->
    <Transition
      enter-active-class="transition-all duration-500 ease-expo"
      leave-active-class="transition-all duration-400 ease-expo"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 top-[var(--nav-h)] z-[40] bg-cream dark:bg-noir grain lg:hidden"
      >
        <div class="container-x py-12 flex flex-col h-full">
          <nav class="flex flex-col gap-6">
            <NuxtLink
              v-for="(link, i) in links"
              :key="link.to"
              :to="link.to"
              class="font-serif text-fluid-4xl"
              :style="{ transitionDelay: `${i * 60 + 100}ms` }"
              @click="isOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
          <div class="mt-auto py-8 flex flex-col gap-4">
            <div class="flex gap-4">
              <ThemeToggle />
              <LangToggle />
            </div>
            <AppButton :to="localePath('/prenotazioni')" variant="solid" @click="isOpen = false">
              {{ $t('nav.prenota') }}
            </AppButton>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
