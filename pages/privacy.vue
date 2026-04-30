<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => `${t('legal.privacy.seoTitle')} — ${t('brand.name')}`,
  description: () => t('legal.privacy.seoDescription'),
})
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir text-cream">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=2400&q=85"
          alt="Cascina Paradiso"
          class="w-full h-full object-cover opacity-42"
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
          {{ $t('legal.privacy.heroTitle') }}
        </h1>
        <p class="mt-8 max-w-xl text-fluid-lg opacity-90 leading-relaxed">
          {{ $t('legal.privacy.heroSubtitle') }}
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="container-x py-section max-w-3xl mx-auto">
      <div class="prose-legal">
        <p class="text-fluid-sm opacity-60 mb-12">{{ $t('legal.lastUpdate') }}</p>

        <h2>{{ $t('legal.privacy.ownerTitle') }}</h2>
        <p>
          {{ $t('legal.privacy.ownerLine1') }}<br />
          <strong>{{ $t('legal.privacy.ownerLine2') }}</strong><br />
          {{ $t('legal.privacy.ownerLine3') }}<br />
          E-mail: <a href="mailto:info@cascinaparadiso.it">info@cascinaparadiso.it</a><br />
          Tel: <a href="tel:+393519152082">+39 351 915 2082</a>
        </p>

        <h2>{{ $t('legal.privacy.collectedTitle') }}</h2>
        <p>{{ $t('legal.privacy.collectedIntro') }}</p>
        <ul>
          <li>
            {{ $t('legal.privacy.collectedNav') }}
          </li>
          <li>
            {{ $t('legal.privacy.collectedDirect') }}
          </li>
        </ul>
        <p>{{ $t('legal.privacy.collectedNote') }}</p>

        <h2>{{ $t('legal.privacy.legalBasisTitle') }}</h2>
        <p>{{ $t('legal.privacy.legalBasisBody') }}</p>

        <h2>{{ $t('legal.privacy.storageTitle') }}</h2>
        <p>{{ $t('legal.privacy.storageBody') }}</p>

        <h2>{{ $t('legal.privacy.rightsTitle') }}</h2>
        <p>
          {{ $t('legal.privacy.rightsBody') }}
          <a href="mailto:info@cascinaparadiso.it">info@cascinaparadiso.it</a>.
        </p>
        <p>
          {{ $t('legal.privacy.rightsAuthority') }}
          (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">www.garanteprivacy.it</a>).
        </p>

        <h2>{{ $t('legal.privacy.thirdPartyTitle') }}</h2>
        <p>{{ $t('legal.privacy.thirdPartyBody') }}</p>

        <h2>{{ $t('legal.privacy.cookieTitle') }}</h2>
        <p>
          {{ $t('legal.privacy.cookieBody') }}
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
