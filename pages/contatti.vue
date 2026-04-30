<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => `${t('nav.contatti')} — ${t('brand.name')}`,
  description: () => t('contatti.book.description'),
})

// Structured data — LocalBusiness / Restaurant
useSchemaOrg([
  defineLocalBusiness({
    name: 'Cascina Paradiso',
    image: '/images/og-home.jpg',
    telephone: '+39 351 915 2082',
    email: 'info@cascinaparadiso.it',
    priceRange: '€€',
    servesCuisine: ['Italian', 'Bergamasca', 'Grill'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Guglielmo Ghilardi, 20',
      addressLocality: 'Alzano Lombardo',
      postalCode: '24022',
      addressRegion: 'BG',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.7295,
      longitude: 9.7258,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '12:00',
        closes: '14:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '19:00',
        closes: '22:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '12:00',
        closes: '15:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '19:00',
        closes: '23:00',
      },
    ],
  }),
])

const mapQuery = encodeURIComponent('Via Guglielmo Ghilardi 20, 24022 Alzano Lombardo BG')
const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`
const whatsappNumber = '393519152082'
const whatsappMessage = encodeURIComponent('Ciao Cascina Paradiso, vorrei prenotare un tavolo.')
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir text-cream">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2400&q=85"
          alt="La cascina — Cascina Paradiso, Alzano Lombardo"
          class="w-full h-full object-cover"
          fetchpriority="high"
        />
        <div
          class="absolute inset-0"
          style="background: linear-gradient(180deg, rgba(15,15,15,0.9) 0%, rgba(15,15,15,0.8) 40%, rgba(15,15,15,0.995) 100%);"
        />
      </div>
      <div class="relative z-10 h-full container-x flex flex-col justify-end pb-20 md:pb-28">
        <div class="eyebrow mb-6 text-cream/80">
          <span class="inline-block w-8 h-px bg-cream/60 mr-3 align-middle" />
          {{ $t('contatti.hero.eyebrow') }}
        </div>
        <h1
          class="font-serif font-light text-fluid-7xl leading-tightest tracking-tightest max-w-5xl text-balance text-cream"
        >
          {{ $t('contatti.hero.title') }}
        </h1>
        <p class="mt-8 max-w-xl text-fluid-lg opacity-90 leading-relaxed">
          {{ $t('contatti.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Info grid -->
    <SectionWrapper tone="transparent" padding="default">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
        <!-- Address -->
        <div data-reveal>
          <p class="eyebrow text-wine mb-4">{{ $t('contatti.address.title') }}</p>
          <p class="font-serif text-fluid-xl leading-snug">
            {{ $t('contatti.address.line1') }}<br />
            {{ $t('contatti.address.line2') }}
          </p>
          <a
            :href="`https://www.google.com/maps?q=${mapQuery}`"
            target="_blank"
            rel="noopener"
            class="mt-4 inline-block line-hover text-fluid-sm"
          >
            {{ $t('cta.directions') }} →
          </a>
        </div>

        <!-- Phone -->
        <div data-reveal>
          <p class="eyebrow text-wine mb-4">{{ $t('contatti.phone.title') }}</p>
          <a
            href="tel:+393519152082"
            class="font-serif text-fluid-2xl leading-snug block line-hover"
          >
            {{ $t('contatti.phone.value') }}
          </a>
          <a
            href="tel:+393519152082"
            class="mt-4 inline-block line-hover text-fluid-sm"
          >
            {{ $t('cta.call') }} →
          </a>
        </div>

        <!-- Hours -->
        <div data-reveal class="md:col-span-2 lg:col-span-2">
          <p class="eyebrow text-wine mb-4">{{ $t('contatti.hours.title') }}</p>
          <dl class="space-y-3 font-serif text-fluid-lg">
            <div class="flex flex-col md:flex-row md:justify-between gap-1">
              <dt class="italic opacity-70">{{ $t('contatti.hours.weekdays') }}</dt>
              <dd>{{ $t('contatti.hours.weekdaysValue') }}</dd>
            </div>
            <div class="flex flex-col md:flex-row md:justify-between gap-1">
              <dt class="italic opacity-70">{{ $t('contatti.hours.weekend') }}</dt>
              <dd>{{ $t('contatti.hours.weekendValue') }}</dd>
            </div>
            <div class="pt-2 border-t border-[color:var(--line)] text-fluid-sm opacity-60">
              {{ $t('contatti.hours.closed') }}
            </div>
          </dl>
        </div>
      </div>
    </SectionWrapper>

    <!-- Book CTA -->
    <SectionWrapper tone="transparent" padding="default">
      <div
        class="grid md:grid-cols-2 gap-10 items-center p-10 md:p-16 rounded-3xl bg-cream-soft dark:bg-noir-50 border border-[color:var(--line)]"
      >
        <div>
          <p class="eyebrow text-wine mb-4">{{ $t('contatti.book.title') }}</p>
          <AnimatedText as="h2" class="font-serif text-fluid-4xl leading-tightest">
            {{ $t('contatti.book.description') }}
          </AnimatedText>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 md:justify-end">
          <AppButton :href="whatsappUrl" external variant="solid" size="lg">
            {{ $t('cta.bookWhatsapp') }}
          </AppButton>
          <AppButton
            :href="`https://www.google.com/maps?q=${mapQuery}`"
            external
            variant="outline"
            size="lg"
          >
            {{ $t('cta.directions') }}
          </AppButton>
        </div>
      </div>
    </SectionWrapper>

    <!-- Map -->
    <section class="w-full h-[60vh] min-h-[480px] bg-cream-200 dark:bg-noir-50 relative overflow-hidden">
      <iframe
        :src="mapSrc"
        title="Cascina Paradiso — Google Maps"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="absolute inset-0 w-full h-full border-0"
        style="filter: grayscale(0.2) contrast(1.05);"
      />
    </section>
  </div>
</template>
