<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => `${t('legal.data.seoTitle')} — ${t('brand.name')}`,
  description: () => t('legal.data.seoDescription'),
})
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir text-cream">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2400&q=85"
          alt="Trattamento dati — Cascina Paradiso"
          class="w-full h-full object-cover opacity-46"
          fetchpriority="high"
        />
        <div
          class="absolute inset-0"
          style="background: linear-gradient(180deg, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.995) 100%);"
        />
      </div>
      <div class="relative z-10 h-full container-x flex flex-col justify-end pb-20 md:pb-28">
        <div class="eyebrow mb-6 text-cream/80">
          <span class="inline-block w-8 h-px bg-cream/60 mr-3 align-middle" />
          {{ $t('legal.eyebrow') }}
        </div>
        <h1 class="font-serif font-light text-fluid-7xl leading-tightest tracking-tightest max-w-5xl text-balance text-cream">
          {{ $t('legal.data.heroTitle') }}
        </h1>
        <p class="mt-8 max-w-xl text-fluid-lg opacity-90 leading-relaxed">
          {{ $t('legal.data.heroSubtitle') }}
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="container-x py-section max-w-3xl mx-auto">
      <div class="prose-legal">
        <p class="text-fluid-sm opacity-60 mb-12">{{ $t('legal.lastUpdate') }}</p>

        <h2>{{ $t('legal.data.purposeTitle') }}</h2>
        <p>{{ $t('legal.data.purposeBody') }}</p>

        <h2>{{ $t('legal.data.typesTitle') }}</h2>
        <ul>
          <li>{{ $t('legal.data.typesOne') }}</li>
          <li>{{ $t('legal.data.typesTwo') }}</li>
          <li>{{ $t('legal.data.typesThree') }}</li>
        </ul>

        <h2>{{ $t('legal.data.methodsTitle') }}</h2>
        <p>{{ $t('legal.data.methodsBody') }}</p>

        <h2>{{ $t('legal.data.retentionTitle') }}</h2>
        <p>{{ $t('legal.data.retentionBody') }}</p>

        <h2>{{ $t('legal.data.sharingTitle') }}</h2>
        <p>{{ $t('legal.data.sharingBody') }}</p>

        <h2>{{ $t('legal.data.rightsTitle') }}</h2>
        <p>
          {{ $t('legal.data.rightsBody') }}
          <a href="mailto:info@cascinaparadiso.it">info@cascinaparadiso.it</a>.
        </p>

        <h2>{{ $t('legal.data.referencesTitle') }}</h2>
        <p>
          {{ $t('legal.data.referencesBody') }}
          {{ ' ' }}
          <NuxtLink to="/privacy" class="underline underline-offset-4">Privacy Policy</NuxtLink>
          {{ ' ' }}{{ $t('legal.data.and') }}{{ ' ' }}
          <NuxtLink to="/cookie" class="underline underline-offset-4">Cookie Policy</NuxtLink>.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.prose-legal h2 {
  font-family: var(--font-serif);
  font-size: var(--text-fluid-2xl);
  font-weight: 300;
  margin-top: 3rem;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}
.prose-legal p,
.prose-legal ul {
  font-size: var(--text-fluid-base);
  line-height: 1.75;
  opacity: 0.8;
  margin-bottom: 1.25rem;
}
.prose-legal ul {
  padding-left: 1.5rem;
  list-style: disc;
}
.prose-legal li {
  margin-bottom: 0.5rem;
}
.prose-legal a {
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
