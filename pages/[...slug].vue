<script setup lang="ts">
import { setResponseStatus } from 'h3'

const { t } = useI18n()
const localePath = useLocalePath()

const event = useRequestEvent()
if (event) {
  setResponseStatus(event, 404, 'Page not found')
}

useSeoMeta({
  title: () => `${t('errorPage.seoTitle')} — ${t('brand.name')}`,
  robots: 'noindex, nofollow',
})
</script>

<template>
  <div class="relative min-h-[100svh] w-full overflow-hidden bg-noir text-cream">
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1514516345957-556ca7d90a29?auto=format&fit=crop&w=2400&q=85"
        alt="Fuoco acceso"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0"
        style="background: linear-gradient(180deg, rgba(15,15,15,0.9) 0%, rgba(15,15,15,0.82) 40%, rgba(15,15,15,0.995) 100%);"
      />
    </div>

    <section class="relative z-10 min-h-[100svh] container-x flex flex-col items-center justify-center text-center py-20">
      <p class="eyebrow text-wine mb-6">{{ t('errorPage.code') }}</p>
      <h1 class="font-serif font-light text-fluid-6xl leading-tightest tracking-tightest max-w-3xl text-balance">
        {{ t('errorPage.titleLine1') }}<br />
        <span class="italic text-wine">{{ t('errorPage.titleHighlight') }}</span>
      </h1>
      <p class="mt-6 text-fluid-base md:text-fluid-lg opacity-80 max-w-2xl leading-relaxed">
        {{ t('errorPage.descriptionStart') }}
        <span class="md:whitespace-nowrap"> {{ t('errorPage.descriptionCta') }}</span>
      </p>

      <NuxtLink
        :to="localePath('/')"
        class="mt-8 inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-fluid-sm uppercase tracking-eyebrow transition hover:bg-white/10"
      >
        {{ t('errorPage.backHome') }}
      </NuxtLink>
    </section>
  </div>
</template>
