<script setup lang="ts">
const { t, rt, tm } = useI18n()
const localePath = useLocalePath()

// Helper function to split text at first colon and make the label bold when present
const formatItemHtml = (text: string) => {
  const colonIndex = text.indexOf(':')
  if (colonIndex > -1) {
    const label = text.substring(0, colonIndex + 1)
    const rest = text.substring(colonIndex + 1)
    return `<strong>${label}</strong>${rest}`
  }
  return text
}

const keywords = computed(() => {
  const items = tm('posizionamento.keywords') as any[]
  return items.map(item => rt(item))
})

useSeoMeta({
  title: t('posizionamento.seo.title'),
  description: t('posizionamento.seo.description'),
})

const prospettoRows = computed(() => {
  const rows = tm('posizionamento.prospetto.rows') as any[]
  return rows.map(row => ({
    label: rt(row.label),
    base: rt(row.base),
    medium: rt(row.medium),
    premium: rt(row.premium),
  }))
})

const budgetRows = computed(() => {
  const rows = tm('posizionamento.budgetRows') as any[]
  return rows.map(row => ({
    pkg: rt(row.pkg),
    daily: rt(row.daily),
    monthly: rt(row.monthly),
    reach: rt(row.reach),
  }))
})

const heroRoot = ref<HTMLElement | null>(null)
const heroImg = ref<HTMLElement | null>(null)
const heroQuote = ref<HTMLElement | null>(null)
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

  if (heroSub.value) {
    $gsap.from(heroSub.value, {
      y: 30,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: 'expo.out',
    })
  }

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
        <video autoplay muted loop playsinline preload="auto" class="w-full h-full object-cover">
          <source src="/images/12186173_2160_3840_30fps.mp4" type="video/mp4" />
        </video>
        <div
          class="absolute inset-0"
          style="background: linear-gradient(180deg, rgba(15,15,15,0.78) 0%, rgba(15,15,15,0.5) 40%, rgba(15,15,15,0.9) 100%);"
        />
        <div class="absolute inset-0 bg-wine/30 mix-blend-multiply opacity-90" />
      </div>

      <div class="relative z-10 h-full container-x flex flex-col justify-end pb-16 sm:pb-20 md:pb-28">
        <h1
          ref="heroQuote"
          class="font-serif font-light text-fluid-4xl sm:text-fluid-5xl leading-tightest tracking-tightest max-w-[min(96vw,78rem)]"
        >
          <span class="block">{{ $t('posizionamento.hero.titleLine1') }}</span>
          <span class="block">{{ $t('posizionamento.hero.titleLine2') }}</span>
        </h1>
        <p
          ref="heroSub"
          class="mt-6 sm:mt-8 max-w-sm sm:max-w-xl text-fluid-sm sm:text-fluid-base opacity-80 leading-relaxed pr-16 sm:pr-0"
        >
          {{ $t('posizionamento.hero.subtitle') }}
        </p>

        <!-- Su mobile: centrato in basso. Su sm+: assoluto a destra -->
        <button
          type="button"
          class="hidden sm:flex absolute bottom-10 right-[var(--safe-x)] flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
          @click="scrollDown"
        >
          <span class="eyebrow text-xs">{{ $t('posizionamento.hero.scroll') }}</span>
          <span class="block w-px h-12 bg-current animate-pulse" />
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
            class="font-serif font-light text-fluid-xl sm:text-fluid-2xl md:text-fluid-3xl leading-relaxed text-cream/50 max-w-2xl whitespace-pre-line"
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
        <h2 class="font-serif font-light text-fluid-5xl sm:text-fluid-6xl md:text-fluid-7xl leading-tightest tracking-tightest">
          Strumenti
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

          <div data-str-el class="flex items-center gap-4 sm:gap-8 md:gap-10 mb-10 sm:mb-16">
            <span class="font-serif font-light text-[clamp(3.5rem,8vw,9rem)] text-wine leading-none shrink-0">01</span>
            <div>
              <h3 class="font-serif font-light text-fluid-4xl sm:text-fluid-5xl leading-tightest tracking-tightest text-brown dark:text-cream">
                {{ $t('posizionamento.strumenti.s1.title') }}
              </h3>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-20 items-center">
            <div data-str-el>
              <p class="text-fluid-base sm:text-fluid-lg text-brown/80 dark:text-cream/80 leading-relaxed mb-8 sm:mb-10">
                {{ $t('posizionamento.strumenti.s1.desc') }}
              </p>
              <div class="space-y-3">
                <div
                  v-for="item in ['logo', 'palette', 'landing']"
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

            <div data-str-el class="rounded-2xl overflow-hidden">
              <ImageReveal src="/images/brand1.jpg" alt="Branding image" ratio="portrait" :rounded="false" />
            </div>
          </div>
        </div>
      </section>

      <div class="h-px bg-[color:var(--line)]" />

      <!-- S2 — Social Media -->
      <section data-str-block class="relative py-section sm:py-section-lg bg-noir text-cream overflow-hidden">
        <div class="relative z-10 container-x max-w-6xl mx-auto">

          <div data-str-el class="flex items-center gap-4 sm:gap-8 md:gap-10 mb-10 sm:mb-16">
            <span class="font-serif font-light text-[clamp(3.5rem,8vw,9rem)] text-wine leading-none shrink-0">02</span>
            <div>
              <h3 class="font-serif font-light text-fluid-4xl sm:text-fluid-5xl leading-tightest tracking-tightest text-cream">
                {{ $t('posizionamento.strumenti.s2.title') }}
              </h3>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-20 items-center">
            <div data-str-el class="rounded-2xl overflow-hidden">
              <ImageReveal src="/images/social1.jpg" alt="Social content" ratio="portrait" :rounded="false" />
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

          <div data-str-el class="flex items-center gap-4 sm:gap-8 md:gap-10 mb-10 sm:mb-16">
            <span class="font-serif font-light text-[clamp(3.5rem,8vw,9rem)] text-wine leading-none shrink-0">03</span>
            <div>
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
            <div data-str-el class="rounded-2xl overflow-hidden">
              <ImageReveal src="/images/sp2.jpg" alt="Sponsorizzazioni" ratio="portrait" :rounded="false" />
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
          <p class="eyebrow text-wine  mb-4 sm:mb-6 font-sans font-semibold text-fluid-base sm:text-fluid-lg tracking-tight leading-tight">{{ $t('posizionamento.pacchetti.eyebrow') }}</p>
          <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
            <h2 class="font-serif font-light text-fluid-5xl sm:text-fluid-6xl leading-tightest tracking-tightest text-brown dark:text-cream">
              {{ $t('posizionamento.pacchetti.title') }}
            </h2>
          </div>
        </div>

        <!-- Cards grid — stack su mobile, 3 col su desktop -->
        <div ref="packagesRoot" class="flex flex-col md:grid md:grid-cols-3 gap-4 sm:gap-5">

          <!-- Base — Radici -->
          <div
            data-pk-card
            class="group flex flex-col rounded-2xl border border-[color:var(--line)] dark:border-white/[0.10] hover:border-wine/30 dark:hover:border-wine/40 dark:bg-white/[0.03] transition-colors duration-500 overflow-hidden"
          >
            <div class="px-7 sm:px-8 pt-7 sm:pt-8 pb-5 sm:pb-6 border-b border-[color:var(--line)] dark:border-white/[0.08]">
              <div class="flex items-center justify-between mb-5">
                <span class="eyebrow text-[10px] text-wine bg-wine/[0.08] px-2.5 py-1 rounded-full">
                  {{ $t('posizionamento.pacchetti.base.tag') }}
                </span>
              </div>
              <h3 class="font-serif font-light text-fluid-3xl sm:text-fluid-4xl text-brown dark:text-cream leading-none mb-3">
                {{ $t('posizionamento.pacchetti.base.name') }}
              </h3>

            </div>
            <div class="px-7 sm:px-8 py-6 sm:py-7 flex-1">
              <ul class="space-y-3 sm:space-y-4">
                <li
                  v-for="item in ($tm('posizionamento.pacchetti.base.items') as any[])"
                  :key="$rt(item)"
                  class="flex items-start gap-3 text-fluid-xs sm:text-fluid-sm text-brown/70 dark:text-cream/70 leading-relaxed"
                >
                  <span class="text-wine/60 shrink-0 mt-px text-sm leading-none select-none">—</span>
                  <span v-html="formatItemHtml($rt(item))"></span>
                </li>
              </ul>
            </div>
            <div class="px-7 sm:px-8 py-5 sm:py-6 border-t border-[color:var(--line)] dark:border-white/[0.08] bg-brown/[0.02] dark:bg-cream/[0.02]">
              <div class="flex items-baseline gap-2">
                <p class="font-serif font-light text-[clamp(1.45rem,4.6vw,2.4rem)] text-brown dark:text-cream leading-none whitespace-nowrap shrink-0">
                  {{ $t('posizionamento.pacchetti.base.price') }}
                </p>
                <span class="text-fluid-xs text-brown/40 dark:text-cream/40">
                  {{ $t('posizionamento.pacchetti.pricePerMonth') }}
                </span>
              </div>
              <p class="eyebrow text-[10px] text-brown/35 dark:text-cream/35 mt-1">
                {{ $t('posizionamento.pacchetti.ivaNote') }}
              </p>
            </div>
          </div>

          <!-- Pro — Equilibrio (featured) -->
          <div
            data-pk-card
            class="group flex flex-col rounded-2xl bg-wine text-cream relative overflow-hidden shadow-2xl shadow-wine/25 ring-1 ring-cream/15 md:scale-[1.02] md:-translate-y-1"
          >
            <div class="absolute top-0 left-0 right-0 h-[4px] bg-cream/50" />

            <div class="px-7 sm:px-8 pt-8 sm:pt-9 pb-5 sm:pb-6 border-b border-cream/10">
              <div class="flex items-center justify-between mb-5">
                <span class="eyebrow text-[10px] sm:text-xs tracking-[0.22em] text-cream bg-cream/20 px-3 py-1.5 rounded-full ring-1 ring-cream/15">
                  {{ $t('posizionamento.pacchetti.pro.badge') }}
                </span>
              </div>
              <h3 class="font-serif font-medium text-fluid-3xl sm:text-fluid-4xl text-cream leading-none mb-3 drop-shadow-[0_0_12px_rgba(255,255,255,0.05)]">
                {{ $t('posizionamento.pacchetti.pro.name') }}
              </h3>

            </div>
            <div class="px-7 sm:px-8 py-6 sm:py-7 flex-1">
              <ul class="space-y-3 sm:space-y-4">
                <li
                  v-for="item in ($tm('posizionamento.pacchetti.pro.items') as any[])"
                  :key="$rt(item)"
                  class="flex items-start gap-3 text-fluid-xs sm:text-fluid-sm text-cream/85 leading-relaxed"
                >
                  <span class="text-cream/50 shrink-0 mt-px text-sm leading-none select-none">—</span>
                  <span v-html="formatItemHtml($rt(item))"></span>
                </li>
              </ul>
            </div>
            <div class="px-7 sm:px-8 py-5 sm:py-6 border-t border-cream/10 bg-black/10">
              <div class="flex items-baseline gap-2">
                <p class="font-serif font-medium text-[clamp(1.55rem,4.8vw,2.55rem)] text-cream leading-none whitespace-nowrap shrink-0 drop-shadow-[0_0_10px_rgba(255,255,255,0.08)]">
                  {{ $t('posizionamento.pacchetti.pro.price') }}
                </p>
                <span class="text-fluid-xs text-cream/50">
                  {{ $t('posizionamento.pacchetti.pricePerMonth') }}
                </span>
              </div>
              <p class="eyebrow text-[10px] text-cream/40 mt-1">
                {{ $t('posizionamento.pacchetti.ivaNote') }}
              </p>
            </div>
          </div>

          <!-- Full — Eccellenza -->
          <div
            data-pk-card
            class="group flex flex-col rounded-2xl border border-[color:var(--line)] dark:border-white/[0.10] hover:border-wine/30 dark:hover:border-wine/40 dark:bg-white/[0.03] transition-colors duration-500 overflow-hidden"
          >
            <div class="px-7 sm:px-8 pt-7 sm:pt-8 pb-5 sm:pb-6 border-b border-[color:var(--line)] dark:border-white/[0.08]">
              <div class="flex items-center justify-between mb-5">
                <span class="eyebrow text-[10px] text-wine bg-wine/[0.08] px-2.5 py-1 rounded-full">
                  {{ $t('posizionamento.pacchetti.full.tag') }}
                </span>
              </div>
              <h3 class="font-serif font-light text-fluid-3xl sm:text-fluid-4xl text-brown dark:text-cream leading-none mb-3">
                {{ $t('posizionamento.pacchetti.full.name') }}
              </h3>

            </div>
            <div class="px-7 sm:px-8 py-6 sm:py-7 flex-1">
              <ul class="space-y-3 sm:space-y-4">
                <li
                  v-for="item in ($tm('posizionamento.pacchetti.full.items') as any[])"
                  :key="$rt(item)"
                  class="flex items-start gap-3 text-fluid-xs sm:text-fluid-sm text-brown/70 dark:text-cream/70 leading-relaxed"
                >
                  <span class="text-wine/60 shrink-0 mt-px text-sm leading-none select-none">—</span>
                  <span v-html="formatItemHtml($rt(item))"></span>
                </li>
              </ul>
            </div>
            <div class="px-7 sm:px-8 py-5 sm:py-6 border-t border-[color:var(--line)] dark:border-white/[0.08] bg-brown/[0.02] dark:bg-cream/[0.02]">
              <div class="flex items-baseline gap-2">
                <p class="font-serif font-light text-[clamp(1.45rem,4.6vw,2.4rem)] text-brown dark:text-cream leading-none whitespace-nowrap shrink-0">
                  {{ $t('posizionamento.pacchetti.full.price') }}
                </p>
                <span class="text-fluid-xs text-brown/40 dark:text-cream/40">
                  {{ $t('posizionamento.pacchetti.pricePerMonth') }}
                </span>
              </div>
              <p class="eyebrow text-[10px] text-brown/35 dark:text-cream/35 mt-1">
                {{ $t('posizionamento.pacchetti.ivaNote') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Note sconto + budget -->
        <div class="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 px-1">
          <p class="eyebrow text-wine font-sans font-semibold text-fluid-base sm:text-fluid-lg tracking-tight leading-tight">
            {{ $t('posizionamento.pacchetti.scontoNote') }}
          </p>
          <div class="max-w-sm sm:max-w-xs border-l-2 border-wine pl-4 py-2 bg-wine/5 dark:bg-wine/3 rounded-r-lg">
            <p class="text-fluid-xs sm:text-fluid-sm leading-relaxed text-brown dark:text-cream sm:text-right">
              <span class="block mb-1 text-[11px] uppercase tracking-[0.24em] font-semibold text-wine">Nota</span>
              <span class="text-brown/80 dark:text-cream/85">{{ $t('posizionamento.pacchetti.budgetAside') }}</span>
            </p>
          </div>
        </div>
      </div>
    </section>


    <!-- ══════════════════════════════════════════
         BUDGET SPONSORIZZAZIONI
    ══════════════════════════════════════════ -->
    <section class="relative py-section sm:py-section-lg bg-cream dark:bg-noir overflow-hidden">
      <div class="container-x max-w-6xl mx-auto">

        <div class="mb-10 sm:mb-14">
          <p class="eyebrow text-wine mb-4 sm:mb-6">{{ $t('posizionamento.budget.eyebrow') }}</p>
          <h2 class="font-serif font-light text-fluid-4xl sm:text-fluid-5xl leading-tightest tracking-tightest text-brown dark:text-cream">
            {{ $t('posizionamento.budget.title') }}
          </h2>
        </div>

        <div class="divide-y divide-[color:var(--line)] mb-10 sm:mb-14">
          <div
            v-for="(row, i) in budgetRows"
            :key="i"
            class="group py-8 sm:py-10 md:py-12"
          >
            <!-- Nome pacchetto -->
            <div class="flex items-baseline gap-3 sm:gap-4 mb-6 sm:mb-8">
              <span class="font-serif font-light text-[clamp(2rem,4vw,3rem)] text-wine/25 dark:text-wine/35 leading-none shrink-0 select-none group-hover:text-wine/60 transition-colors duration-500 tabular-nums">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <p class="font-serif font-light text-fluid-lg sm:text-fluid-xl text-brown dark:text-cream leading-snug whitespace-pre-line">{{ row.pkg }}</p>
            </div>

            <!-- Metriche in riga -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 md:gap-12 pl-[calc(clamp(2rem,4vw,3rem)+0.75rem)] sm:pl-[calc(clamp(2rem,4vw,3rem)+1rem)]">
              <div>
                <p class="eyebrow text-[10px] sm:text-[11px] text-brown/40 dark:text-cream/35 mb-2 sm:mb-3">{{ $t('posizionamento.budget.col2') }}</p>
                <p class="font-serif font-light text-[clamp(1.4rem,3.5vw,2rem)] text-brown/80 dark:text-cream/80 leading-none tabular-nums">{{ row.daily }}</p>
              </div>
              <div>
                <p class="eyebrow text-[10px] sm:text-[11px] text-brown/40 dark:text-cream/35 mb-2 sm:mb-3">{{ $t('posizionamento.budget.col3') }}</p>
                <div class="inline-block px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-wine">
                  <p class="font-serif font-semibold text-[clamp(1.55rem,4vw,2.3rem)] leading-none tabular-nums text-white">{{ row.monthly }}</p>
                </div>
              </div>
              <div>
                <p class="eyebrow text-[10px] sm:text-[11px] text-brown/40 dark:text-cream/35 mb-2 sm:mb-3">{{ $t('posizionamento.budget.col4') }}</p>
                <p class="font-serif italic text-fluid-base sm:text-fluid-lg text-brown/70 dark:text-cream/75 leading-snug">{{ row.reach }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="border-l-2 border-wine pl-5 sm:pl-6 max-w-4xl">
          <p class="text-fluid-sm sm:text-fluid-base md:text-fluid-lg text-brown/60 dark:text-cream/60 leading-relaxed">
            {{ $t('posizionamento.budget.note') }}
          </p>
        </div>

      </div>
    </section>


    <!-- ══════════════════════════════════════════
         I NOSTRI LAVORI
    ══════════════════════════════════════════ -->
    <section class="relative py-section sm:py-section-lg bg-cream dark:bg-noir overflow-hidden">
      <div class="container-x max-w-6xl mx-auto">

        <div class="mb-10 sm:mb-16 md:mb-20 border-b border-[color:var(--line)] pb-6 sm:pb-8">
          <p class="eyebrow text-wine mb-4 sm:mb-5">Portfolio</p>
          <h2 class="font-serif font-light text-fluid-5xl sm:text-fluid-6xl leading-tightest tracking-tightest text-brown dark:text-cream">
            I nostri lavori
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          <a href="https://www.youtube.com/watch?v=Q0QfrvUWmdA" target="_blank" rel="noopener">
            <ImageReveal src="https://img.youtube.com/vi/Q0QfrvUWmdA/hqdefault.jpg" alt="YouTube video Q0QfrvUWmdA" ratio="square" rounded :hover-label="$t('posizionamento.hoverLabel')" />
          </a>
          <a href="https://www.youtube.com/watch?v=oeSr3wXENQM" target="_blank" rel="noopener">
            <ImageReveal src="https://img.youtube.com/vi/oeSr3wXENQM/hqdefault.jpg" alt="YouTube video oeSr3wXENQM" ratio="square" rounded :hover-label="$t('posizionamento.hoverLabel')" />
          </a>
          <a href="https://denani.it/2021/04/21/hotel-ristorante-camoretti/" target="_blank" rel="noopener">
            <ImageReveal src="/images/CAMORETTI-scaled-e1709716201950.webp" alt="Hotel Ristorante Camoretti" ratio="square" rounded :hover-label="$t('posizionamento.hoverLabel')" />
          </a>
          <a href="https://denani.it/2021/04/21/portfolio-fabrizio-crippa/" target="_blank" rel="noopener">
            <ImageReveal src="/images/FABRIZIO-CRIPPA-scaled-e1709716167674.webp" alt="Fabrizio Crippa" ratio="square" rounded :hover-label="$t('posizionamento.hoverLabel')" />
          </a>
          <a href="https://denani.it/2021/09/30/pasticceria-florian/" target="_blank" rel="noopener">
            <ImageReveal src="/images/FLORIAN-scaled-e1709716143700.webp" alt="Pasticceria Florian" ratio="square" rounded :hover-label="$t('posizionamento.hoverLabel')" />
          </a>
          <a href="https://www.instagram.com/farmacia.di.gorle/" target="_blank" rel="noopener">
            <div class="aspect-square rounded-xl overflow-hidden bg-cream dark:bg-white/[0.08] flex items-center justify-center p-6 sm:p-8">
              <img src="/images/farmacia.png" alt="Farmacia di Gorle" class="w-auto h-auto max-w-[200px] max-h-[200px] object-contain" />
            </div>
          </a>
          <a href="https://www.instagram.com/mediline_torino/" target="_blank" rel="noopener" class="col-span-2 md:col-span-1">
            <div class="aspect-square rounded-xl overflow-hidden bg-cream dark:bg-white/[0.08] flex items-center justify-center p-6 sm:p-8">
              <img src="/images/mediline.png" alt="Mediline" class="w-auto h-auto max-w-[200px] max-h-[200px] object-contain" />
            </div>
          </a>
          <a href="https://denani.it/portfolio/kraken-factory/" target="_blank" rel="noopener">
            <ImageReveal src="/images/KRAKEN-FACTORY-scaled-e1709716112360.webp" alt="Kraken Factory" ratio="square" rounded :hover-label="$t('posizionamento.hoverLabel')" />
          </a>
          <a href="https://denani.it/2024/03/25/zestloungebar/" target="_blank" rel="noopener">
            <ImageReveal src="/images/ZEST-LOUNGE-BAR.webp" alt="Zest Lounge Bar" ratio="square" rounded :hover-label="$t('posizionamento.hoverLabel')" />
          </a>
        </div>

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
              href="/PDF/Denani Cascina Paradiso.pdf"
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
    <section class="relative bg-wine text-cream py-section sm:py-section-lg overflow-hidden grain flex items-center">
      <div
        class="absolute inset-0 pointer-events-none"
        style="background-image: linear-gradient(rgba(245,241,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,241,232,0.04) 1px, transparent 1px); background-size: 80px 80px;"
      />
      <div class="relative z-10 container-x text-center max-w-4xl mx-auto flex flex-col items-center justify-center px-4 sm:px-0">
        <AnimatedText
          as="h2"
          class="block mx-auto font-serif font-light text-fluid-4xl sm:text-fluid-6xl leading-tightest tracking-tightest mb-5 sm:mb-8 text-center max-w-[12ch] sm:max-w-none"
        >
          {{ $t('posizionamento.cta.title') }}
        </AnimatedText>
        <p class="text-fluid-sm sm:text-fluid-base opacity-80 mb-10 sm:mb-14 max-w-[28ch] sm:max-w-none leading-relaxed text-center">
          {{ $t('posizionamento.cta.desc') }}
        </p>
      </div>
    </section>

  </div>
</template>
