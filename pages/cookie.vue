<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => `${t('legal.cookie.seoTitle')} — ${t('brand.name')}`,
  description: () => t('legal.cookie.seoDescription'),
})
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir text-cream">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1495195134817-aeb325a55b65?auto=format&fit=crop&w=2400&q=85"
          alt="Cascina Paradiso"
          class="w-full h-full object-cover opacity-48"
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
          {{ $t('legal.cookie.heroTitle') }}
        </h1>
        <p class="mt-8 max-w-xl text-fluid-lg opacity-90 leading-relaxed">
          {{ $t('legal.cookie.heroSubtitle') }}
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="container-x py-section max-w-3xl mx-auto">
      <div class="prose-legal">
        <p class="text-fluid-sm opacity-60 mb-12">{{ $t('legal.lastUpdate') }}</p>

        <h2>{{ $t('legal.cookie.whatTitle') }}</h2>
        <p>{{ $t('legal.cookie.whatBody') }}</p>

        <h2>{{ $t('legal.cookie.usedTitle') }}</h2>
        <p>{{ $t('legal.cookie.usedIntro') }}</p>
        <ul>
          <li>{{ $t('legal.cookie.usedOne') }}</li>
          <li>{{ $t('legal.cookie.usedTwo') }}</li>
          <li>{{ $t('legal.cookie.usedThree') }}</li>
        </ul>
        <p>{{ $t('legal.cookie.usedNote') }}</p>

        <h2>{{ $t('legal.cookie.thirdTitle') }}</h2>
        <p>
          {{ $t('legal.cookie.thirdBody') }}
          {{ ' ' }}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Privacy Policy di Google</a>.
        </p>

        <h2>{{ $t('legal.cookie.manageTitle') }}</h2>
        <p>{{ $t('legal.cookie.manageBody') }}</p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Chrome</a></li>
          <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener">Firefox</a></li>
          <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Safari</a></li>
        </ul>

        <h2>{{ $t('legal.cookie.contactsTitle') }}</h2>
        <p>
          {{ $t('legal.cookie.contactsBody') }}
          <a href="mailto:info@cascinaparadiso.it">info@cascinaparadiso.it</a>
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
