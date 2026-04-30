<script setup lang="ts">
const { t, rt, tm } = useI18n()
const localePath = useLocalePath()
// 2. Aggiungi questa riga per creare l'array tipizzato
// 2. Mappa l'array e risolvi le traduzioni in vero testo
const keywords = computed(() => {
  const items = tm('posizionamento.keywords') as any[]
  return items.map(item => rt(item))
})

useSeoMeta({
  title: t('posizionamento.seo.title'),
  description: t('posizionamento.seo.description'),
})

// Hero refs
const heroRoot = ref<HTMLElement | null>(null)
const heroImg = ref<HTMLElement | null>(null)
const heroTitle = ref<HTMLElement | null>(null)
const heroEyebrow = ref<HTMLElement | null>(null)
const heroSub = ref<HTMLElement | null>(null)

// Storytelling refs
const valoreRoot = ref<HTMLElement | null>(null)
const obiettiviRoot = ref<HTMLElement | null>(null)

useSplitReveal(heroTitle, { type: 'words', stagger: 0.08, duration: 1.2, start: 'top 95%' })
useSplitReveal(heroSub, { type: 'words', stagger: 0.02, delay: 0.6, start: 'top 95%' })

onMounted(() => {
  const { $gsap, $ScrollTrigger } = useNuxtApp() as any
  if (!$gsap || !$ScrollTrigger) return

  // Hero eyebrow fade
  $gsap.from(heroEyebrow.value, {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: 'expo.out',
  })

  // Hero image parallax + scale
  $gsap.fromTo(
    heroImg.value,
    { scale: 1.12, yPercent: 0 },
    {
      scale: 1,
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRoot.value,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    },
  )

  // Valore section reveal
  nextTick(() => {
    const valoreLines = valoreRoot.value?.querySelectorAll<HTMLElement>('[data-valore-line]')
    if (valoreLines) {
      $gsap.set(valoreLines, { opacity: 0.12, yPercent: 10 })

      valoreLines.forEach((line) => {
        $gsap.to(line, {
          opacity: 1,
          yPercent: 0,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 75%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    }

    // Obiettivi section reveal
    const obiettiviLines = obiettiviRoot.value?.querySelectorAll<HTMLElement>('[data-obiettivo-line]')
    if (obiettiviLines) {
      $gsap.set(obiettiviLines, { opacity: 0.12, yPercent: 10 })

      obiettiviLines.forEach((line) => {
        $gsap.to(line, {
          opacity: 1,
          yPercent: 0,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 75%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    }
  })
})

const scrollDown = () => {
  const next = document.querySelector('#valore')
  if (next) {
    const { $lenis } = useNuxtApp() as any
    if ($lenis) $lenis.scrollTo(next as HTMLElement)
    else next.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div>
    <section
      ref="heroRoot"
      class="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir text-cream"
    >
      <div ref="heroImg" class="absolute inset-0 will-change-transform">
        <video
          autoplay
          muted
          loop
          playsinline
          class="w-full h-full object-cover"
        >
          <source src="/images/12186173_2160_3840_30fps.mp4" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2400&q=85"
            alt="Cucina - Hero Background"
            class="w-full h-full object-cover"
          />
        </video>
        <div class="absolute inset-0 pointer-events-none">
          <div
            class="absolute inset-0"
            style="background: linear-gradient(180deg, rgba(15,15,15,0.78) 0%, rgba(15,15,15,0.5) 40%, rgba(15,15,15,0.9) 100%);"
          />
          <div class="absolute inset-0 bg-wine/30 mix-blend-multiply opacity-90" />
        </div>
      </div>

      <div class="relative z-10 h-full container-x flex flex-col justify-end pb-20 md:pb-28">
        <div ref="heroEyebrow" class="eyebrow mb-6 text-cream/80">
          <span class="inline-block w-8 h-px bg-cream/60 mr-3 align-middle" />
          {{ $t('posizionamento.hero.eyebrow') }}
        </div>
        <h1
          ref="heroTitle"
          class="font-serif font-light text-fluid-6xl leading-tightest tracking-tightest max-w-5xl text-balance"
        >
          {{ $t('posizionamento.hero.title') }}
        </h1>
        <p
          ref="heroSub"
          class="mt-8 max-w-xl text-fluid-base opacity-90 leading-relaxed"
        >
          {{ $t('posizionamento.hero.subtitle') }}
        </p>

        <button
          type="button"
          class="absolute bottom-10 right-[var(--safe-x)] flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
          @click="scrollDown"
        >
          <span class="eyebrow">{{ $t('posizionamento.hero.scroll') }}</span>
          <span class="block w-px h-12 bg-current animate-pulse" />
        </button>
      </div>
    </section>

    <section
      id="valore"
      ref="valoreRoot"
      class="relative py-section-lg bg-cream dark:bg-noir text-brown dark:text-cream overflow-hidden"
    >
      <div class="container-x max-w-5xl mx-auto">
        <p data-valore-line class="eyebrow text-wine mb-10">
          {{ $t('posizionamento.valore.eyebrow') }}
        </p>

        <div class="font-serif font-light text-fluid-5xl md:text-fluid-6xl leading-[1.05] tracking-tightest space-y-2 md:space-y-4">
          <p data-valore-line>{{ $t('posizionamento.valore.line1') }}</p>
          <p
            data-valore-line
            class="italic text-wine font-normal text-fluid-6xl md:text-fluid-7xl"
          >
            {{ $t('posizionamento.valore.line2') }}
          </p>
          <p data-valore-line class="opacity-70 text-fluid-3xl md:text-fluid-4xl mt-6">
            {{ $t('posizionamento.valore.line3') }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-10 border-y border-[color:var(--line)] bg-cream dark:bg-noir overflow-hidden">
    <Marquee
  :items="keywords"
  italic
/>
    </section>

    <section
      ref="obiettiviRoot"
      class="relative py-section-lg bg-noir text-cream overflow-hidden"
    >
      <div class="container-x max-w-6xl mx-auto">
        <p data-obiettivo-line class="eyebrow text-wine mb-16">
          {{ $t('posizionamento.obiettivi.eyebrow') }}
        </p>

        <div class="grid md:grid-cols-3 gap-8 md:gap-6">
          <div data-obiettivo-line class="bg-wine/10 border border-wine/20 rounded-lg p-8 md:p-6">
            <div class="flex items-start gap-4 mb-4">
              <span class="text-wine font-serif font-light text-fluid-3xl">01</span>
            </div>
            <h4 class="font-serif font-light text-fluid-lg text-cream mb-3 leading-tight">
              {{ $t('posizionamento.obiettivi.items.one.title') }}
            </h4>
            <p class="text-fluid-sm text-cream/80 leading-relaxed">
              {{ $t('posizionamento.obiettivi.items.one.desc') }}
            </p>
          </div>

          <div data-obiettivo-line class="bg-wine/10 border border-wine/20 rounded-lg p-8 md:p-6">
            <div class="flex items-start gap-4 mb-4">
              <span class="text-wine font-serif font-light text-fluid-3xl">02</span>
            </div>
            <h4 class="font-serif font-light text-fluid-lg text-cream mb-3 leading-tight">
              {{ $t('posizionamento.obiettivi.items.two.title') }}
            </h4>
            <p class="text-fluid-sm text-cream/80 leading-relaxed">
              {{ $t('posizionamento.obiettivi.items.two.desc') }}
            </p>
          </div>

          <div data-obiettivo-line class="bg-wine/10 border border-wine/20 rounded-lg p-8 md:p-6">
            <div class="flex items-start gap-4 mb-4">
              <span class="text-wine font-serif font-light text-fluid-3xl">03</span>
            </div>
            <h4 class="font-serif font-light text-fluid-lg text-cream mb-3 leading-tight">
              {{ $t('posizionamento.obiettivi.items.three.title') }}
            </h4>
            <p class="text-fluid-sm text-cream/80 leading-relaxed">
              {{ $t('posizionamento.obiettivi.items.three.desc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <SectionWrapper tone="cream" padding="lg">
      <div class="max-w-6xl mx-auto relative">
        <div class="absolute -bottom-32 -right-20 text-cream font-serif font-light text-9xl leading-none pointer-events-none">
          {{ $t('posizionamento.strumenti.bgText') }}
        </div>
        <div class="relative z-10">
          <p class="eyebrow text-wine mb-6 uppercase tracking-widest text-xs">
            {{ $t('posizionamento.strumenti.eyebrow') }}
          </p>
          <h2 class="font-serif font-light text-fluid-7xl leading-tightest tracking-tightest text-wine">
            {{ $t('posizionamento.strumenti.titleLine1') }} <br class="hidden md:block" />{{ $t('posizionamento.strumenti.titleLine2') }}
          </h2>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper tone="cream" padding="lg">
      <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div class="order-2 md:order-1">
          <div class="flex items-start gap-6 mb-8">
            <span class="font-serif font-light text-7xl md:text-8xl text-wine/90 leading-none">01</span>
            <div class="flex-1">
              <span class="eyebrow text-wine text-xs uppercase tracking-widest">{{ $t('posizionamento.strumenti.s1.eyebrow') }}</span>
              <h3 class="font-serif font-light text-fluid-5xl leading-tightest tracking-tightest text-white mt-2">{{ $t('posizionamento.strumenti.s1.title') }}</h3>
              <p class="mt-4 text-fluid-lg text-cream/90 leading-relaxed max-w-prose">{{ $t('posizionamento.strumenti.s1.desc') }}</p>
            </div>
          </div>

          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-5 rounded-2xl bg-gradient-to-br from-wine/20 to-transparent border border-wine/40">
              <h4 class="font-serif font-medium text-cream mb-2">{{ $t('posizionamento.strumenti.s1.items.logo.title') }}</h4>
              <p class="text-cream text-sm leading-relaxed">{{ $t('posizionamento.strumenti.s1.items.logo.desc') }}</p>
            </div>

            <div class="p-5 rounded-2xl bg-gradient-to-br from-wine/20 to-transparent border border-wine/40">
              <h4 class="font-serif font-medium text-cream mb-2">{{ $t('posizionamento.strumenti.s1.items.palette.title') }}</h4>
              <p class="text-cream text-sm leading-relaxed">{{ $t('posizionamento.strumenti.s1.items.palette.desc') }}</p>
            </div>

            <div class="p-5 rounded-2xl bg-gradient-to-br from-wine/20 to-transparent border border-wine/40 md:col-span-2">
              <h4 class="font-serif font-medium text-cream mb-2">{{ $t('posizionamento.strumenti.s1.items.landing.title') }}</h4>
              <p class="text-cream text-sm leading-relaxed mb-2">{{ $t('posizionamento.strumenti.s1.items.landing.desc') }}</p>
              <ul class="list-disc list-inside space-y-1 text-cream ml-2">
                <li>{{ $t('posizionamento.strumenti.s1.items.landing.list1') }}</li>
                <li>{{ $t('posizionamento.strumenti.s1.items.landing.list2') }}</li>
              </ul>
            </div>

            <div class="p-5 rounded-2xl bg-gradient-to-br from-wine/20 to-transparent border border-wine/40 md:col-span-2">
              <h4 class="font-serif font-medium text-cream mb-2">{{ $t('posizionamento.strumenti.s1.items.menu.title') }}</h4>
              <p class="text-cream text-sm leading-relaxed">{{ $t('posizionamento.strumenti.s1.items.menu.desc') }}</p>
            </div>
          </div>
        </div>
        <div class="order-1 md:order-2">
          <div class="max-w-xl mx-auto">
            <div class="grid grid-cols-2 gap-4 md:gap-6 items-center">
              <a href="https://denani.it/2021/04/21/hotel-ristorante-camoretti/" target="_blank" rel="noopener" class="group block rounded-xl overflow-hidden">
                <ImageReveal
                  src="https://i0.wp.com/denani.it/wp-content/uploads/2022/11/CAMORETTI-scaled-e1709716201950.jpg?fit=1000%2C997&ssl=1"
                  alt="Hotel Ristorante Camoretti - Denani"
                  ratio="square"
                  rounded
                />
              </a>

              <a href="https://denani.it/2021/04/21/portfolio-fabrizio-crippa/" target="_blank" rel="noopener" class="group block rounded-xl overflow-hidden">
                <ImageReveal
                  src="https://i0.wp.com/denani.it/wp-content/uploads/2022/11/FABRIZIO-CRIPPA-scaled-e1709716167674.jpg?fit=1000%2C1000&ssl=1"
                  alt="Fabrizio Crippa - Denani"
                  ratio="square"
                  rounded
                />
              </a>

              <a href="https://denani.it/2021/09/30/pasticceria-florian/" target="_blank" rel="noopener" class="group block col-span-2 rounded-2xl overflow-hidden mt-2 md:mt-4">
                <ImageReveal
                  src="https://i0.wp.com/denani.it/wp-content/uploads/2022/11/FLORIAN-scaled-e1709716143700.jpg?fit=1000%2C1000&ssl=1"
                  alt="Pasticceria Florian - Denani"
                  ratio="landscape"
                  rounded
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>

    

    <SectionWrapper tone="wine" padding="lg">
      <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div>
          <div class="flex items-start gap-6 mb-12">
            <span class="font-serif font-light text-8xl md:text-9xl text-cream/90 leading-none">02</span>
            <div class="flex-1">
              <span class="eyebrow text-cream text-xs uppercase tracking-widest opacity-80">{{ $t('posizionamento.strumenti.s2.eyebrow') }}</span>
              <h3 class="font-serif font-light text-fluid-5xl leading-tightest tracking-tightest text-cream mt-2">
                {{ $t('posizionamento.strumenti.s2.title') }}
              </h3>
            </div>
          </div>
          
          <p class="text-fluid-base text-cream leading-relaxed mb-2">
            {{ $t('posizionamento.strumenti.s2.desc1') }}
          </p>
          <p class="text-fluid-sm text-cream/70 leading-relaxed mb-8 font-medium">
            {{ $t('posizionamento.strumenti.s2.desc2') }}
          </p>

          <div class="space-y-4">
            <div class="bg-cream/10 border border-cream/20 rounded-lg p-6">
              <h4 class="font-serif font-medium text-fluid-base text-cream mb-2">
                {{ $t('posizionamento.strumenti.s2.items.mani.title') }}
              </h4>
              <p class="text-fluid-sm text-cream leading-relaxed">
                {{ $t('posizionamento.strumenti.s2.items.mani.desc') }}
              </p>
            </div>

            <div class="bg-cream/10 border border-cream/20 rounded-lg p-6">
              <h4 class="font-serif font-medium text-fluid-base text-cream mb-2">
                {{ $t('posizionamento.strumenti.s2.items.frammenti.title') }}
              </h4>
              <p class="text-fluid-sm text-cream leading-relaxed">
                {{ $t('posizionamento.strumenti.s2.items.frammenti.desc') }}
              </p>
            </div>

            <div class="bg-cream/10 border border-cream/20 rounded-lg p-6">
              <h4 class="font-serif font-medium text-fluid-base text-cream mb-2">
                {{ $t('posizionamento.strumenti.s2.items.atmosfera.title') }}
              </h4>
              <p class="text-fluid-sm text-cream leading-relaxed">
                {{ $t('posizionamento.strumenti.s2.items.atmosfera.desc') }}
              </p>
            </div>

            <div class="bg-cream/10 border border-cream/20 rounded-lg p-6">
              <h4 class="font-serif font-medium text-fluid-base text-cream mb-2">
                {{ $t('posizionamento.strumenti.s2.items.fornitore.title') }}
              </h4>
              <p class="text-fluid-sm text-cream leading-relaxed">
                {{ $t('posizionamento.strumenti.s2.items.fornitore.desc') }}
              </p>
            </div>
          </div>
        </div>

        <div>
          <div class="flex flex-col gap-6 md:gap-8 items-stretch max-w-2xl">
            <a href="https://denani.it/portfolio/kraken-factory/" target="_blank" rel="noopener" class="block">
              <ImageReveal
                src="https://i0.wp.com/denani.it/wp-content/uploads/2022/11/KRAKEN-FACTORY-scaled-e1709716112360.jpg?fit=1000%2C1008&ssl=1"
                alt="Kraken Factory - Denani"
                ratio="landscape"
                rounded
                hover-label="Vedi Progetto"
              />
            </a>

            <a href="https://denani.it/2024/03/25/zestloungebar/" target="_blank" rel="noopener" class="block">
              <ImageReveal
                src="https://i0.wp.com/denani.it/wp-content/uploads/2024/03/ZEST-LOUNGE-BAR.jpg?w=1000&ssl=1"
                alt="Zest Lounge Bar - Denani"
                ratio="landscape"
                rounded
                hover-label="Vedi Progetto"
              />
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper tone="noir" padding="lg">
      <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div class="order-2 md:order-1">
          <div class="flex items-start gap-6 mb-12">
            <span class="font-serif font-light text-8xl md:text-9xl text-cream/90 leading-none">03</span>
            <div class="flex-1">
              <span class="eyebrow text-cream text-xs uppercase tracking-widest opacity-80">{{ $t('posizionamento.strumenti.s3.eyebrow') }}</span>
              <h3 class="font-serif font-light text-fluid-5xl leading-tightest tracking-tightest text-cream mt-2">
                {{ $t('posizionamento.strumenti.s3.title') }}
              </h3>
            </div>
          </div>

          <div class="bg-cream/5 border border-cream/15 rounded-lg p-6">
            <h4 class="font-serif font-medium text-fluid-base text-cream mb-3">
              {{ $t('posizionamento.strumenti.s3.items.ads.title') }}
            </h4>
            <p class="text-fluid-base text-cream leading-relaxed">
              {{ $t('posizionamento.strumenti.s3.items.ads.desc') }}
            </p>
          </div>
        </div>
        <div class="order-1 md:order-2">
          <div class="flex flex-col gap-6 md:gap-8 items-stretch max-w-2xl">
            <a href="https://www.instagram.com/mediline_torino/" target="_blank" rel="noopener" class="block">
              <ImageReveal
                src="/images/logo-instagram_1199-122.png"
                alt="Mediline - Sponsorizzazioni Instagram"
                ratio="landscape"
                rounded
                hover-label="Vedi Instagram"
              />
            </a>

            <a href="https://www.instagram.com/farmacia.di.gorle/" target="_blank" rel="noopener" class="block">
              <ImageReveal
                src="/images/logo-instagram_1199-122.png"
                alt="Farmacia di Gorle - Sponsorizzazioni Instagram"
                ratio="landscape"
                rounded
                hover-label="Vedi Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper tone="wine" padding="lg" class="text-center">
      <div class="max-w-2xl mx-auto">
        <h2 class="font-serif font-light text-fluid-5xl leading-tightest tracking-tightest text-cream mb-8">
          {{ $t('posizionamento.cta.title') }}
        </h2>
        <p class="text-fluid-lg text-cream/90 mb-12">
          {{ $t('posizionamento.cta.desc') }}
        </p>
        <NuxtLink :to="localePath('/')" class="inline-block px-10 py-4 bg-cream text-wine font-medium rounded-full hover:bg-cream/90 transition-all">
          {{ $t('posizionamento.cta.btn') }}
        </NuxtLink>
      </div>
    </SectionWrapper>
  </div>
</template>