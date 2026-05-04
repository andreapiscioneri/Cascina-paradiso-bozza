<script setup lang="ts">
const { t, rt, tm } = useI18n()
const localePath = useLocalePath()

const keywords = computed(() => {
  const items = tm('posizionamento.keywords') as any[]
  return items.map(item => rt(item))
})

useSeoMeta({
  title: t('posizionamento.seo.title'),
  description: t('posizionamento.seo.description'),
})

const heroRoot = ref<HTMLElement | null>(null)
const heroImg = ref<HTMLElement | null>(null)
const heroQuote = ref<HTMLElement | null>(null)
const heroEyebrow = ref<HTMLElement | null>(null)
const heroSub = ref<HTMLElement | null>(null)

const manifestoRoot = ref<HTMLElement | null>(null)
const obiettiviRoot = ref<HTMLElement | null>(null)
const strumentiContainer = ref<HTMLElement | null>(null)
const packagesRoot = ref<HTMLElement | null>(null)

useSplitReveal(heroQuote, { type: 'chars', stagger: 0.012, duration: 1.4, start: 'top 95%' })

const scrollDown = () => {
  const next = document.querySelector('#manifesto')
  if (next) {
    const { $lenis } = useNuxtApp() as any
    if ($lenis) $lenis.scrollTo(next as HTMLElement)
    else next.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const { $gsap, $ScrollTrigger } = useNuxtApp() as any
  if (!$gsap || !$ScrollTrigger) return

  $gsap.from([heroEyebrow.value, heroSub.value], {
    y: 30,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15,
    delay: 0.3,
    ease: 'expo.out',
  })

  $gsap.fromTo(
    heroImg.value,
    { scale: 1.1, yPercent: 0 },
    {
      scale: 1,
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRoot.value,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    },
  )

  nextTick(() => {
    // Manifesto word reveal
    const words = manifestoRoot.value?.querySelectorAll<HTMLElement>('[data-manifesto-word]')
    if (words && words.length) {
      $gsap.set(words, { opacity: 0.08 })
      words.forEach((word) => {
        $gsap.to(word, {
          opacity: 1,
          duration: 0.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: word,
            start: 'top 72%',
            end: 'top 28%',
            scrub: 0.4,
          },
        })
      })
    }

    // Obiettivi
    const obItems = obiettiviRoot.value?.querySelectorAll<HTMLElement>('[data-ob-item]')
    if (obItems) {
      obItems.forEach((el, i) => {
        $gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          delay: i * 0.12,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        })
      })
    }

    // Strumenti blocks
    const strBlocks = strumentiContainer.value?.querySelectorAll<HTMLElement>('[data-str-block]')
    if (strBlocks) {
      strBlocks.forEach((block) => {
        const els = block.querySelectorAll<HTMLElement>('[data-str-el]')
        $gsap.from(els, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        })
      })
    }

    // Pacchetti
    const pkCards = packagesRoot.value?.querySelectorAll<HTMLElement>('[data-pk-card]')
    if (pkCards) {
      $gsap.from(pkCards, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: packagesRoot.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }
  })
})
</script>

<template>
  <div class="overflow-x-hidden">

    <!-- ══════════════════════════════════════════
         HERO
    ══════════════════════════════════════════ -->
    <section
      ref="heroRoot"
      class="relative h-[100svh] min-h-[580px] w-full overflow-hidden bg-noir text-cream"
    >
      <div ref="heroImg" class="absolute inset-0 will-change-transform">
        <video autoplay muted loop playsinline class="w-full h-full object-cover">
          <source src="/images/12186173_2160_3840_30fps.mp4" type="video/mp4" />
        </video>
        <div
          class="absolute inset-0"
          style="background: linear-gradient(180deg, rgba(15,15,15,0.78) 0%, rgba(15,15,15,0.5) 40%, rgba(15,15,15,0.9) 100%);"
        />
        <div class="absolute inset-0 bg-wine/30 mix-blend-multiply opacity-90" />
      </div>

      <div class="relative z-10 h-full container-x flex flex-col justify-end pb-16 sm:pb-20 md:pb-28">
        <div ref="heroEyebrow" class="eyebrow mb-4 sm:mb-6 text-cream/80">
          <span class="inline-block w-6 sm:w-8 h-px bg-cream/60 mr-3 align-middle" />
          {{ $t('posizionamento.hero.eyebrow') }}
        </div>
        <h1
          ref="heroQuote"
          class="font-serif font-light text-fluid-5xl sm:text-fluid-6xl leading-tightest tracking-tightest max-w-4xl text-balance"
        >
          {{ $t('posizionamento.hero.title') }}
        </h1>
        <p
          ref="heroSub"
          class="mt-6 sm:mt-8 max-w-sm sm:max-w-xl text-fluid-sm sm:text-fluid-base opacity-80 leading-relaxed"
        >
          {{ $t('posizionamento.hero.subtitle') }}
        </p>

        <button
          type="button"
          class="absolute bottom-8 sm:bottom-10 right-[var(--safe-x)] flex flex-col items-center gap-2 sm:gap-3 opacity-70 hover:opacity-100 transition-opacity"
          @click="scrollDown"
        >
          <span class="eyebrow text-[10px] sm:text-xs">{{ $t('posizionamento.hero.scroll') }}</span>
          <span class="block w-px h-8 sm:h-12 bg-current animate-pulse" />
        </button>
      </div>
    </section>


    <!-- ══════════════════════════════════════════
         MANIFESTO
    ══════════════════════════════════════════ -->
    <section
      id="manifesto"
      ref="manifestoRoot"
      class="relative py-section sm:py-section-lg bg-noir text-cream overflow-hidden"
    >
      <div class="absolute left-[var(--safe-x)] top-0 bottom-0 w-px bg-cream/5 pointer-events-none hidden sm:block" />

      <div class="container-x max-w-6xl mx-auto sm:pl-10 md:pl-16">
        <p data-manifesto-word class="eyebrow text-wine mb-8 sm:mb-12">
          {{ $t('posizionamento.valore.eyebrow') }}
        </p>

        <div class="space-y-3 sm:space-y-5 md:space-y-6">
          <p
            data-manifesto-word
            class="font-serif font-light text-fluid-3xl sm:text-fluid-4xl md:text-fluid-5xl leading-[1.08] tracking-tightest"
          >
            {{ $t('posizionamento.valore.line1') }}
          </p>
          <p
            data-manifesto-word
            class="font-serif italic font-normal text-fluid-5xl sm:text-fluid-6xl md:text-fluid-7xl leading-none tracking-tightest text-wine"
          >
            {{ $t('posizionamento.valore.line2') }}
          </p>
          <p
            data-manifesto-word
            class="font-serif font-light text-fluid-xl sm:text-fluid-2xl md:text-fluid-3xl leading-relaxed text-cream/50 max-w-2xl"
          >
            {{ $t('posizionamento.valore.line3') }}
          </p>
        </div>
      </div>
    </section>


    <!-- MARQUEE -->
    <div class="py-6 sm:py-8 border-y border-white/[0.06] bg-noir overflow-hidden">
      <Marquee :items="keywords" italic />
    </div>


    <!-- ══════════════════════════════════════════
         OBIETTIVI
    ══════════════════════════════════════════ -->
    <section
      ref="obiettiviRoot"
      class="relative py-section sm:py-section-lg bg-cream dark:bg-noir overflow-hidden"
    >
      <div class="container-x max-w-6xl mx-auto">
        <div class="flex items-end justify-between mb-10 sm:mb-16 md:mb-20 border-b border-[color:var(--line)] pb-6 sm:pb-8">
          <p class="eyebrow text-wine">{{ $t('posizionamento.obiettivi.eyebrow') }}</p>
          <span class="font-serif font-light text-[10px] sm:text-xs text-brown/30 dark:text-cream/30 hidden sm:block">03 obiettivi</span>
        </div>

        <div class="divide-y divide-[color:var(--line)]">
          <div
            v-for="(key, i) in ['one', 'two', 'three'] as const"
            :key="key"
            data-ob-item
            class="group grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-4 sm:gap-8 md:gap-12 items-center py-8 sm:py-10 md:py-14 cursor-default"
          >
            <span class="font-serif font-light text-[clamp(3rem,6vw,7rem)] text-wine/60 group-hover:text-wine leading-none transition-colors duration-500 select-none w-16 sm:w-24 md:w-auto">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <div>
              <h4 class="font-serif font-light text-fluid-xl sm:text-fluid-2xl md:text-fluid-3xl text-brown dark:text-cream leading-tight mb-2 sm:mb-3">
                {{ $t(`posizionamento.obiettivi.items.${key}.title`) }}
              </h4>
              <p class="text-fluid-xs sm:text-fluid-sm text-brown/60 dark:text-cream/60 leading-relaxed max-w-xl">
                {{ $t(`posizionamento.obiettivi.items.${key}.desc`) }}
              </p>
            </div>
            <span class="hidden md:block font-serif italic text-fluid-sm text-brown/20 dark:text-cream/20 group-hover:text-wine transition-colors duration-500">→</span>
          </div>
        </div>
      </div>
    </section>


    <!-- ══════════════════════════════════════════
         STRUMENTI intro banner
    ══════════════════════════════════════════ -->
    <section class="relative py-section sm:py-section-lg bg-wine text-cream overflow-hidden grain">
      <div class="relative z-10 container-x max-w-6xl mx-auto">
        <p class="eyebrow text-cream/50 mb-6 sm:mb-8">{{ $t('posizionamento.strumenti.eyebrow') }}</p>
        <h2 class="font-serif font-light text-fluid-5xl sm:text-fluid-6xl md:text-fluid-7xl leading-tightest tracking-tightest max-w-3xl">
          {{ $t('posizionamento.strumenti.titleLine1') }}<br />
          <em>{{ $t('posizionamento.strumenti.titleLine2') }}</em>
        </h2>
      </div>
    </section>


    <!-- ══════════════════════════════════════════
         STRUMENTI — tre pilastri
    ══════════════════════════════════════════ -->
    <div ref="strumentiContainer">

      <!-- S1 — Brand Identity -->
      <section data-str-block class="relative py-section sm:py-section-lg bg-cream dark:bg-noir overflow-hidden">
        <div class="container-x max-w-6xl mx-auto">

          <div data-str-el class="flex items-start gap-4 sm:gap-8 md:gap-10 mb-10 sm:mb-16">
            <span class="font-serif font-light text-[clamp(3.5rem,8vw,9rem)] text-wine leading-none shrink-0">01</span>
            <div class="pt-1 sm:pt-4">
              <p class="eyebrow text-wine mb-2 sm:mb-3">{{ $t('posizionamento.strumenti.s1.eyebrow') }}</p>
              <h3 class="font-serif font-light text-fluid-4xl sm:text-fluid-5xl leading-tightest tracking-tightest text-brown dark:text-cream">
                {{ $t('posizionamento.strumenti.s1.title') }}
              </h3>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-20 items-start">
            <div data-str-el>
              <p class="text-fluid-base sm:text-fluid-lg text-brown/80 dark:text-cream/80 leading-relaxed mb-8 sm:mb-10">
                {{ $t('posizionamento.strumenti.s1.desc') }}
              </p>
              <div class="space-y-3">
                <div
                  v-for="item in ['logo', 'palette', 'landing', 'menu']"
                  :key="item"
                  class="flex items-stretch border border-[color:var(--line)] hover:border-wine/30 transition-colors duration-400 rounded-xl overflow-hidden"
                >
                  <div class="w-1 bg-wine shrink-0" />
                  <div class="p-4 sm:p-6 flex-1">
                    <h4 class="font-serif font-medium text-fluid-base text-brown dark:text-cream mb-1">
                      {{ $t(`posizionamento.strumenti.s1.items.${item}.title`) }}
                    </h4>
                    <p class="text-fluid-xs sm:text-fluid-sm text-brown/60 dark:text-cream/60 leading-relaxed">
                      {{ $t(`posizionamento.strumenti.s1.items.${item}.desc`) }}
                    </p>
                    <template v-if="item === 'landing'">
                      <ul class="mt-2 sm:mt-3 space-y-1.5 text-fluid-xs sm:text-fluid-sm text-brown/60 dark:text-cream/60">
                        <li class="flex items-start gap-2">
                          <span class="text-wine shrink-0 mt-0.5">—</span>
                          {{ $t('posizionamento.strumenti.s1.items.landing.list1') }}
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="text-wine shrink-0 mt-0.5">—</span>
                          {{ $t('posizionamento.strumenti.s1.items.landing.list2') }}
                        </li>
                      </ul>
                    </template>
                  </div>
                </div>
              </div>
            </div>

            <div data-str-el class="grid grid-cols-2 gap-3 sm:gap-4">
              <a href="https://denani.it/2021/04/21/hotel-ristorante-camoretti/" target="_blank" rel="noopener">
                <ImageReveal src="/images/CAMORETTI-scaled-e1709716201950.webp" alt="Hotel Ristorante Camoretti" ratio="square" rounded hover-label="Vedi" />
              </a>
              <a href="https://denani.it/2021/04/21/portfolio-fabrizio-crippa/" target="_blank" rel="noopener">
                <ImageReveal src="/images/FABRIZIO-CRIPPA-scaled-e1709716167674.webp" alt="Fabrizio Crippa" ratio="square" rounded hover-label="Vedi" />
              </a>
              <a href="https://denani.it/2021/09/30/pasticceria-florian/" target="_blank" rel="noopener" class="col-span-2">
                <ImageReveal src="/images/FLORIAN-scaled-e1709716143700.webp" alt="Pasticceria Florian" ratio="landscape" rounded hover-label="Vedi" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="h-px bg-[color:var(--line)]" />

      <!-- S2 — Social Media -->
      <section data-str-block class="relative py-section sm:py-section-lg bg-noir text-cream overflow-hidden">
        <div class="relative z-10 container-x max-w-6xl mx-auto">

          <div data-str-el class="flex items-start gap-4 sm:gap-8 md:gap-10 mb-10 sm:mb-16">
            <span class="font-serif font-light text-[clamp(3.5rem,8vw,9rem)] text-wine leading-none shrink-0">02</span>
            <div class="pt-1 sm:pt-4">
              <p class="eyebrow text-cream/40 mb-2 sm:mb-3">{{ $t('posizionamento.strumenti.s2.eyebrow') }}</p>
              <h3 class="font-serif font-light text-fluid-4xl sm:text-fluid-5xl leading-tightest tracking-tightest text-cream">
                {{ $t('posizionamento.strumenti.s2.title') }}
              </h3>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-20 items-start">
            <div data-str-el class="flex flex-col gap-4 sm:gap-5">
              <a href="https://denani.it/portfolio/kraken-factory/" target="_blank" rel="noopener">
                <ImageReveal src="/images/KRAKEN-FACTORY-scaled-e1709716112360.webp" alt="Kraken Factory" ratio="landscape" rounded hover-label="Vedi" />
              </a>
              <a href="https://denani.it/2024/03/25/zestloungebar/" target="_blank" rel="noopener">
                <ImageReveal src="/images/ZEST-LOUNGE-BAR.webp" alt="Zest Lounge Bar" ratio="landscape" rounded hover-label="Vedi" />
              </a>
            </div>

            <div data-str-el class="flex flex-col gap-4 sm:gap-6">
              <p class="text-fluid-base sm:text-fluid-lg text-cream/80 leading-relaxed">
                {{ $t('posizionamento.strumenti.s2.desc1') }}
              </p>
              <p class="eyebrow text-wine text-[10px] sm:text-xs">{{ $t('posizionamento.strumenti.s2.desc2') }}</p>

              <div class="space-y-2 sm:space-y-3">
                <div
                  v-for="(key, i) in ['mani', 'frammenti', 'atmosfera', 'fornitore']"
                  :key="key"
                  class="group relative flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl border border-white/[0.06] hover:border-white/[0.10] transition-all duration-400"
                >
                  <div class="absolute inset-0 rounded-2xl bg-cream/0 group-hover:bg-cream/3 transition-colors duration-500" />
                  <span class="font-serif font-light text-fluid-base sm:text-fluid-lg text-wine leading-none shrink-0 mt-0.5 relative z-10">
                    {{ String(i + 1).padStart(2, '0') }}
                  </span>
                  <div class="relative z-10">
                    <h4 class="font-serif font-medium text-fluid-sm sm:text-fluid-base text-cream mb-1 sm:mb-1.5">
                      {{ $t(`posizionamento.strumenti.s2.items.${key}.title`) }}
                    </h4>
                    <p class="text-fluid-xs sm:text-fluid-sm text-cream/60 leading-relaxed">
                      {{ $t(`posizionamento.strumenti.s2.items.${key}.desc`) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="h-px bg-cream/5" />

      <!-- S3 — Sponsorizzazioni -->
      <section data-str-block class="relative py-section sm:py-section-lg bg-noir text-cream overflow-hidden">
        <div class="relative z-10 container-x max-w-6xl mx-auto">

          <div data-str-el class="flex items-start gap-4 sm:gap-8 md:gap-10 mb-10 sm:mb-16">
            <span class="font-serif font-light text-[clamp(3.5rem,8vw,9rem)] text-wine leading-none shrink-0">03</span>
            <div class="pt-1 sm:pt-4">
              <p class="eyebrow text-cream/40 mb-2 sm:mb-3">{{ $t('posizionamento.strumenti.s3.eyebrow') }}</p>
              <h3 class="font-serif font-light text-fluid-4xl sm:text-fluid-5xl leading-tightest tracking-tightest text-cream">
                {{ $t('posizionamento.strumenti.s3.title') }}
              </h3>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-20 items-center">
            <div data-str-el>
              <div class="rounded-2xl border border-white/[0.06] p-6 sm:p-8 md:p-10">
                <h4 class="font-serif font-medium text-fluid-lg sm:text-fluid-xl text-cream mb-3 sm:mb-4">
                  {{ $t('posizionamento.strumenti.s3.items.ads.title') }}
                </h4>
                <p class="text-fluid-sm sm:text-fluid-base text-cream/70 leading-relaxed">
                  {{ $t('posizionamento.strumenti.s3.items.ads.desc') }}
                </p>
              </div>
            </div>
            <div data-str-el class="flex flex-col gap-3 sm:gap-4">
              <div class="group/img relative rounded-2xl overflow-hidden ring-1 ring-transparent hover:ring-wine/50 transition-all duration-500">
                <ImageReveal src="/images/farmacia-gorle-instagram-cover.svg" alt="Farmacia di Gorle – Instagram" ratio="landscape" :rounded="false" />
                <div class="absolute inset-0 bg-wine/0 group-hover/img:bg-wine/10 transition-colors duration-500 pointer-events-none" />
              </div>
              <div class="group/img relative rounded-2xl overflow-hidden ring-1 ring-transparent hover:ring-wine/50 transition-all duration-500">
                <ImageReveal src="/images/mediline-instagram-cover.svg" alt="Mediline – Instagram" ratio="landscape" :rounded="false" />
                <div class="absolute inset-0 bg-wine/0 group-hover/img:bg-wine/10 transition-colors duration-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


    <!-- ══════════════════════════════════════════
         PACCHETTI
    ══════════════════════════════════════════ -->
    <section class="relative py-section sm:py-section-lg bg-cream dark:bg-noir overflow-hidden">
      <div class="container-x max-w-6xl mx-auto">

        <div class="mb-12 sm:mb-16 md:mb-20">
          <p class="eyebrow text-wine mb-4 sm:mb-6">{{ $t('posizionamento.pacchetti.eyebrow') }}</p>
          <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
            <h2 class="font-serif font-light text-fluid-5xl sm:text-fluid-6xl leading-tightest tracking-tightest text-brown dark:text-cream">
              {{ $t('posizionamento.pacchetti.title') }}
            </h2>
            <p class="text-fluid-xs sm:text-fluid-sm text-brown/60 dark:text-cream/60 leading-relaxed md:max-w-xs">
              {{ $t('posizionamento.pacchetti.subtitle') }}
            </p>
          </div>
        </div>

        <!-- Cards grid — stack su mobile, 3 col su desktop -->
        <div ref="packagesRoot" class="flex flex-col md:grid md:grid-cols-3 border border-[color:var(--line)] rounded-2xl sm:rounded-3xl overflow-hidden">

          <!-- Base -->
          <div
            data-pk-card
            class="group flex flex-col border-b md:border-b-0 md:border-r border-[color:var(--line)] hover:bg-cream-200 dark:hover:bg-noir-50 transition-colors duration-500"
          >
            <div class="p-6 sm:p-8 md:p-10 flex-1">
              <div class="flex items-start justify-between mb-6 sm:mb-8">
                <p class="eyebrow text-wine text-[10px] sm:text-xs">{{ $t('posizionamento.pacchetti.base.label') }}</p>
                <span class="font-serif font-light text-fluid-2xl sm:text-fluid-3xl text-brown/15 dark:text-cream/15 leading-none">01</span>
              </div>
              <h3 class="font-serif font-light text-fluid-2xl sm:text-fluid-3xl text-brown dark:text-cream leading-tight mb-2 sm:mb-3">
                {{ $t('posizionamento.pacchetti.base.name') }}
              </h3>
              <p class="text-fluid-xs sm:text-fluid-sm text-brown/60 dark:text-cream/60 leading-relaxed mb-6 sm:mb-10">
                {{ $t('posizionamento.pacchetti.base.desc') }}
              </p>
              <ul class="space-y-2 sm:space-y-3">
                <li
                  v-for="item in ($tm('posizionamento.pacchetti.base.items') as any[])"
                  :key="$rt(item)"
                  class="flex items-start gap-2 sm:gap-3 text-fluid-xs sm:text-fluid-sm text-brown/80 dark:text-cream/80"
                >
                  <span class="text-wine mt-1 shrink-0 text-[10px]">✦</span>
                  {{ $rt(item) }}
                </li>
              </ul>
            </div>
            <div class="p-6 sm:p-8 md:p-10 border-t border-[color:var(--line)]">
              <p class="font-serif font-light text-fluid-2xl sm:text-fluid-3xl text-brown dark:text-cream leading-none mb-1">
                {{ $t('posizionamento.pacchetti.base.price') }}
              </p>
              <p class="eyebrow text-[10px] sm:text-xs text-brown/40 dark:text-cream/40">
                {{ $t('posizionamento.pacchetti.priceNote') }}
              </p>
            </div>
          </div>

          <!-- Pro — featured -->
          <div
            data-pk-card
            class="group flex flex-col bg-wine text-cream relative border-b md:border-b-0 md:border-r border-wine/0 md:shadow-2xl md:shadow-wine/20 z-10"
          >
            <div class="absolute -top-px left-1/2 -translate-x-1/2 hidden md:block">
              <span class="eyebrow text-[10px] sm:text-xs bg-wine border border-cream/10 text-cream px-3 sm:px-4 py-1 sm:py-1.5 rounded-b-full block whitespace-nowrap">
                {{ $t('posizionamento.pacchetti.pro.badge') }}
              </span>
            </div>

            <div class="p-6 sm:p-8 md:p-10 flex-1 md:pt-12">
              <div class="flex items-start justify-between mb-6 sm:mb-8">
                <div class="flex items-center gap-3">
                  <p class="eyebrow text-cream/50 text-[10px] sm:text-xs">{{ $t('posizionamento.pacchetti.pro.label') }}</p>
                  <span class="md:hidden eyebrow text-[10px] bg-cream/20 text-cream px-2 py-0.5 rounded-full">{{ $t('posizionamento.pacchetti.pro.badge') }}</span>
                </div>
                <span class="font-serif font-light text-fluid-2xl sm:text-fluid-3xl text-cream/15 leading-none">02</span>
              </div>
              <h3 class="font-serif font-light text-fluid-2xl sm:text-fluid-3xl text-cream leading-tight mb-2 sm:mb-3">
                {{ $t('posizionamento.pacchetti.pro.name') }}
              </h3>
              <p class="text-fluid-xs sm:text-fluid-sm text-cream/70 leading-relaxed mb-6 sm:mb-10">
                {{ $t('posizionamento.pacchetti.pro.desc') }}
              </p>
              <ul class="space-y-2 sm:space-y-3">
                <li
                  v-for="item in ($tm('posizionamento.pacchetti.pro.items') as any[])"
                  :key="$rt(item)"
                  class="flex items-start gap-2 sm:gap-3 text-fluid-xs sm:text-fluid-sm text-cream/90"
                >
                  <span class="text-cream mt-1 shrink-0 text-[10px]">✦</span>
                  {{ $rt(item) }}
                </li>
              </ul>
            </div>
            <div class="p-6 sm:p-8 md:p-10 border-t border-cream/10">
              <p class="font-serif font-light text-fluid-2xl sm:text-fluid-3xl text-cream leading-none mb-1">
                {{ $t('posizionamento.pacchetti.pro.price') }}
              </p>
              <p class="eyebrow text-[10px] sm:text-xs text-cream/40">
                {{ $t('posizionamento.pacchetti.priceNote') }}
              </p>
            </div>
          </div>

          <!-- Full -->
          <div
            data-pk-card
            class="group flex flex-col hover:bg-cream-200 dark:hover:bg-noir-50 transition-colors duration-500"
          >
            <div class="p-6 sm:p-8 md:p-10 flex-1">
              <div class="flex items-start justify-between mb-6 sm:mb-8">
                <p class="eyebrow text-wine text-[10px] sm:text-xs">{{ $t('posizionamento.pacchetti.full.label') }}</p>
                <span class="font-serif font-light text-fluid-2xl sm:text-fluid-3xl text-brown/15 dark:text-cream/15 leading-none">03</span>
              </div>
              <h3 class="font-serif font-light text-fluid-2xl sm:text-fluid-3xl text-brown dark:text-cream leading-tight mb-2 sm:mb-3">
                {{ $t('posizionamento.pacchetti.full.name') }}
              </h3>
              <p class="text-fluid-xs sm:text-fluid-sm text-brown/60 dark:text-cream/60 leading-relaxed mb-6 sm:mb-10">
                {{ $t('posizionamento.pacchetti.full.desc') }}
              </p>
              <ul class="space-y-2 sm:space-y-3">
                <li
                  v-for="item in ($tm('posizionamento.pacchetti.full.items') as any[])"
                  :key="$rt(item)"
                  class="flex items-start gap-2 sm:gap-3 text-fluid-xs sm:text-fluid-sm text-brown/80 dark:text-cream/80"
                >
                  <span class="text-wine mt-1 shrink-0 text-[10px]">✦</span>
                  {{ $rt(item) }}
                </li>
              </ul>
            </div>
            <div class="p-6 sm:p-8 md:p-10 border-t border-[color:var(--line)]">
              <p class="font-serif font-light text-fluid-2xl sm:text-fluid-3xl text-brown dark:text-cream leading-none mb-1">
                {{ $t('posizionamento.pacchetti.full.price') }}
              </p>
              <p class="eyebrow text-[10px] sm:text-xs text-brown/40 dark:text-cream/40">
                {{ $t('posizionamento.pacchetti.priceNote') }}
              </p>
            </div>
          </div>
        </div>

        <p class="mt-4 sm:mt-6 text-center eyebrow text-[10px] sm:text-xs text-brown/30 dark:text-cream/30">
          {{ $t('posizionamento.pacchetti.disclaimer') }}
        </p>
      </div>
    </section>


    <!-- ══════════════════════════════════════════
         SCARICA BROCHURE
    ══════════════════════════════════════════ -->
    <section class="relative py-section sm:py-section-lg bg-noir text-cream overflow-hidden">
      <!-- Sottile griglia decorativa -->
      <div
        class="absolute inset-0 pointer-events-none"
        style="background-image: linear-gradient(rgba(245,241,232,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,241,232,0.03) 1px, transparent 1px); background-size: 60px 60px;"
      />
      <div class="relative z-10 container-x max-w-6xl mx-auto">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 sm:gap-12">
          <div class="max-w-xl">
            <p class="eyebrow text-wine mb-4 sm:mb-6">{{ $t('posizionamento.brochure.eyebrow') }}</p>
            <h2 class="font-serif font-light text-fluid-4xl sm:text-fluid-5xl leading-tightest tracking-tightest text-cream mb-4 sm:mb-6">
              {{ $t('posizionamento.brochure.title') }}
            </h2>
            <p class="text-fluid-sm sm:text-fluid-base text-cream/60 leading-relaxed">
              {{ $t('posizionamento.brochure.desc') }}
            </p>
          </div>

          <div class="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
            <a
              href="/brochure-cascina-paradiso.pdf"
              target="_blank"
              rel="noopener"
              class="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 bg-cream text-brown font-sans font-medium text-sm uppercase tracking-eyebrow rounded-full hover:bg-wine hover:text-cream transition-all duration-400 ease-expo"
            >
              {{ $t('posizionamento.brochure.btnOpen') }}
              <span class="inline-block transition-transform duration-400 group-hover:translate-y-0.5">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>


    <!-- ══════════════════════════════════════════
         CTA FINALE
    ══════════════════════════════════════════ -->
    <section class="relative bg-wine text-cream py-section sm:py-section-lg overflow-hidden grain">
      <div
        class="absolute inset-0 pointer-events-none"
        style="background-image: linear-gradient(rgba(245,241,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,241,232,0.04) 1px, transparent 1px); background-size: 80px 80px;"
      />
      <div class="relative z-10 container-x text-center max-w-4xl mx-auto">
        <AnimatedText
          as="h2"
          class="font-serif font-light text-fluid-5xl sm:text-fluid-6xl leading-tightest tracking-tightest mb-6 sm:mb-8"
        >
          {{ $t('posizionamento.cta.title') }}
        </AnimatedText>
        <p class="text-fluid-base sm:text-fluid-lg opacity-80 mb-10 sm:mb-14 max-w-lg mx-auto leading-relaxed">
          {{ $t('posizionamento.cta.desc') }}
        </p>
      </div>
    </section>

  </div>
</template>
