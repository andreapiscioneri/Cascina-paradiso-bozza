<script setup lang="ts">
const localePath = useLocalePath()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-noir text-cream grain mt-32">
    <!-- Oversized wordmark -->
    <div class="container-x pt-24 pb-10 border-b border-white/10">
      <p class="eyebrow opacity-50 mb-6">{{ $t('footer.built') }}</p>
      <h2
        class="font-serif font-light text-fluid-6xl md:text-fluid-7xl leading-tightest tracking-tightest whitespace-nowrap"
      >
        Cascina <span class="italic">Paradiso.</span>
      </h2>
    </div>

    <div class="container-x grid md:grid-cols-[1fr_auto_auto] gap-12 py-14">
      <!-- Tagline + address -->
      <div class="max-w-md">
        <p class="font-serif text-fluid-xl mb-4 whitespace-pre-line">{{ $t('footer.tagline') }}</p>
        <p class="text-fluid-sm opacity-70">{{ $t('footer.address') }}</p>
      </div>

      <!-- Navigation -->
      <div class="flex flex-col gap-3">
        <span class="eyebrow opacity-50">Nav</span>
        <NuxtLink :to="localePath('/')" class="line-hover text-fluid-sm">
          {{ $t('nav.home') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/storia')" class="line-hover text-fluid-sm">
          {{ $t('nav.storia') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/menu')" class="line-hover text-fluid-sm">
          {{ $t('nav.menu') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/contatti')" class="line-hover text-fluid-sm">
          {{ $t('nav.contatti') }}
        </NuxtLink>
      </div>

      <!-- Contact -->
      <div class="flex flex-col gap-3">
        <span class="eyebrow opacity-50">Contatti</span>
        <a href="tel:+393519152082" class="line-hover text-fluid-sm">351 915 2082</a>
        <a
          href="https://www.google.com/maps?q=Via+Guglielmo+Ghilardi+20+Alzano+Lombardo"
          target="_blank"
          rel="noopener"
          class="line-hover text-fluid-sm"
        >
          {{ $t('cta.directions') }}
        </a>
        <div class="flex items-center gap-3 pt-1">
          <a
            href="https://www.instagram.com/ristorantecascinaparadiso/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            class="inline-flex h-9 w-9 items-center justify-center rounded-full text-cream transition-all duration-300 hover:bg-white/12 hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" class="h-4.5 w-4.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://wa.me/393519152082"
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp"
            class="inline-flex h-9 w-9 items-center justify-center rounded-full text-cream transition-all duration-300 hover:bg-white/12 hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" class="h-4.5 w-4.5" fill="currentColor" aria-hidden="true">
              <path d="M12 2.1A9.9 9.9 0 0 0 3.6 17.2L2.3 21.7l4.6-1.2A9.9 9.9 0 1 0 12 2.1Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.7.7.7-2.7-.2-.3A8 8 0 1 1 12 20.1Zm4.4-6.1c-.2-.1-1.2-.6-1.4-.6-.2-.1-.3-.1-.5.1l-.4.6c-.1.1-.2.2-.4.1a6.5 6.5 0 0 1-3.2-2.8c-.1-.2 0-.3.1-.4l.3-.4c.1-.1.1-.3.2-.4 0-.1 0-.3-.1-.4l-.6-1.4c-.1-.3-.3-.2-.4-.2h-.4c-.1 0-.4 0-.6.2-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.8 3.5.5.2 1 .4 1.3.5.5.1 1 .1 1.4.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.4-.3Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div
      class="container-x flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-6 border-t border-white/10 text-xs opacity-50"
    >
      <span>© {{ year }} Cascina Paradiso — {{ $t('footer.rights') }}</span>
      <div class="flex gap-6">
        <NuxtLink :to="localePath('/privacy')" class="hover:opacity-100 transition-opacity">Privacy Policy</NuxtLink>
        <NuxtLink :to="localePath('/trattamento-dati')" class="hover:opacity-100 transition-opacity">Trattamento Dati</NuxtLink>
        <NuxtLink :to="localePath('/cookie')" class="hover:opacity-100 transition-opacity">Cookie Policy</NuxtLink>
        <span>P.IVA — Cascina Paradiso di Roberta</span>
      </div>
    </div>
  </footer>
</template>
