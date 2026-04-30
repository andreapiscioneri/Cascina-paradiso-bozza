<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => `${t('storia.hero.title')} — ${t('brand.name')}`,
  description: () => t('storia.intro'),
})

const timelineEntries = [
  {
    key: 'y1972',
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=85',
    alt: 'Bottiglie e cantina antica',
  },
  {
    key: 'y1985',
    image:
      'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=1200&q=85',
    alt: 'Camino a legna acceso',
  },
  {
    key: 'y2005',
    image:
      'https://images.unsplash.com/photo-1555992336-fb0d29498b13?auto=format&fit=crop&w=1200&q=85',
    alt: 'Sala della trattoria',
  },
  {
    key: 'y2024',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85',
    alt: 'Ingresso della cascina oggi',
  },
]

const quoteRef = ref<HTMLElement | null>(null)
useSplitReveal(quoteRef, { type: 'words', stagger: 0.06, start: 'top 80%' })
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir text-cream">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2400&q=85"
          alt="Cantina storica — Cascina Paradiso"
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
          {{ $t('storia.hero.eyebrow') }}
        </div>
        <h1
          class="font-serif font-light text-fluid-7xl leading-tightest tracking-tightest max-w-5xl text-balance text-cream"
        >
          {{ $t('storia.hero.title') }}
        </h1>
        <p class="mt-8 max-w-xl text-fluid-lg opacity-90 leading-relaxed">
          {{ $t('storia.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- INTRO -->
    <SectionWrapper tone="transparent" padding="default">
      <div class="grid lg:grid-cols-[1fr_2fr] gap-12">
        <span class="eyebrow opacity-60">{{ $t('brand.since') }}</span>
        <p class="font-serif text-fluid-3xl leading-[1.25] max-w-3xl">
          {{ $t('storia.intro') }}
        </p>
      </div>
    </SectionWrapper>

    <!-- TIMELINE -->
    <SectionWrapper tone="transparent" padding="none" class="pb-section-lg">
      <TimelineItem
        v-for="(entry, i) in timelineEntries"
        :key="entry.key"
        :year="$t(`storia.timeline.${entry.key}.year`)"
        :title="$t(`storia.timeline.${entry.key}.title`)"
        :body="$t(`storia.timeline.${entry.key}.body`)"
        :image="entry.image"
        :image-alt="entry.alt"
        :align="i % 2 === 0 ? 'left' : 'right'"
      />
    </SectionWrapper>

    <!-- QUOTE -->
    <section class="relative bg-noir text-cream py-section-lg overflow-hidden grain">
      <div class="container-x max-w-5xl mx-auto text-center">
        <span class="font-serif text-fluid-7xl text-wine/60 leading-none block mb-4">"</span>
        <blockquote
          ref="quoteRef"
          class="font-serif italic text-fluid-5xl leading-[1.15] tracking-tightest"
        >
          {{ $t('storia.quote') }}
        </blockquote>
        <p class="eyebrow mt-10 opacity-60">{{ $t('storia.quoteAuthor') }}</p>
      </div>
    </section>
  </div>
</template>
