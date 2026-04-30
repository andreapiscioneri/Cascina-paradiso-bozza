<script setup lang="ts">
const { t } = useI18n()

const whatsappNumber = '393519152082'
const whatsappMessage = encodeURIComponent('Ciao Cascina Paradiso, vorrei prenotare un tavolo.')
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

useSeoMeta({
  title: () => `${t('prenotazioni.hero.title')} — ${t('brand.name')}`,
  description: () => t('prenotazioni.intro'),
})
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir text-cream">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2400&q=85"
          alt="Prenotazioni tavolo da Cascina Paradiso"
          class="w-full h-full object-cover"
          fetchpriority="high"
        />
        <div
          class="absolute inset-0"
          style="background: linear-gradient(180deg, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.82) 40%, rgba(15,15,15,0.995) 100%);"
        />
      </div>
      <div class="relative z-10 h-full container-x flex flex-col justify-end pb-20 md:pb-28">
        <div class="eyebrow mb-6 text-cream/80">
          <span class="inline-block w-8 h-px bg-cream/60 mr-3 align-middle" />
          {{ $t('prenotazioni.hero.eyebrow') }}
        </div>
        <h1 class="font-serif font-light text-fluid-7xl leading-tightest tracking-tightest max-w-5xl text-balance text-cream">
          {{ $t('prenotazioni.hero.title') }}
        </h1>
        <p class="mt-8 max-w-xl text-fluid-lg opacity-90 leading-relaxed">
          {{ $t('prenotazioni.hero.subtitle') }}
        </p>
      </div>
    </section>

    <SectionWrapper tone="transparent" padding="default">
      <div class="grid lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-start">
        <div>
          <p class="text-fluid-lg opacity-85 leading-relaxed max-w-2xl">
            {{ $t('prenotazioni.intro') }}
          </p>

          <div class="mt-10 p-8 rounded-3xl border border-[color:var(--line)] bg-cream-soft dark:bg-noir-50">
            <p class="eyebrow text-wine mb-4">{{ $t('prenotazioni.steps.title') }}</p>
            <ol class="space-y-4 text-fluid-base opacity-85 leading-relaxed list-decimal pl-5">
              <li>{{ $t('prenotazioni.steps.one') }}</li>
              <li>{{ $t('prenotazioni.steps.two') }}</li>
              <li>{{ $t('prenotazioni.steps.three') }}</li>
            </ol>
            <p class="mt-6 text-fluid-sm opacity-70">{{ $t('prenotazioni.note') }}</p>
          </div>
        </div>

        <div class="lg:sticky lg:top-[calc(var(--nav-h)+2rem)] p-8 rounded-3xl border border-[color:var(--line)] bg-noir text-cream grain">
          <p class="eyebrow text-cream/70 mb-4">WhatsApp</p>
          <p class="font-serif text-fluid-3xl leading-tightest mb-2">351 915 2082</p>
          <p class="text-fluid-sm opacity-75 mb-8">Risposta rapida in orario di servizio.</p>
          <AppButton :href="whatsappUrl" external variant="outline" size="lg" class="w-full">
            {{ $t('cta.bookWhatsapp') }}
          </AppButton>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>
