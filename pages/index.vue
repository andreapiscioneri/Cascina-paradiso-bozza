<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => `${t('brand.name')} — ${t('brand.tagline')}`,
  description: () =>
    t('home.hero.subtitle') +
    ' — Via Guglielmo Ghilardi 20, Alzano Lombardo (BG).',
  ogTitle: () => `${t('brand.name')} — ${t('brand.since')}`,
  ogDescription: () => t('home.hero.subtitle'),
  ogImage: '/images/og-home.jpg',
  twitterCard: 'summary_large_image',
})

defineOgImageComponent('OgImageTemplate', {
  title: 'Cascina Paradiso',
  subtitle: 'Dal 1972 — Alzano Lombardo',
})

// Hero refs
const heroRoot = ref<HTMLElement | null>(null)
const heroImg = ref<HTMLElement | null>(null)
const heroTitle = ref<HTMLElement | null>(null)
const heroEyebrow = ref<HTMLElement | null>(null)
const heroSub = ref<HTMLElement | null>(null)

// Storytelling refs
const storyRoot = ref<HTMLElement | null>(null)

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

  // Storytelling sequence — progressive reveal pinned
  nextTick(() => {
    const lines = storyRoot.value?.querySelectorAll<HTMLElement>('[data-story-line]')
    if (!lines) return

    $gsap.set(lines, { opacity: 0.12, yPercent: 10 })

    lines.forEach((line, i) => {
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
  })
})

const scrollDown = () => {
  const next = document.querySelector('#storytelling')
  if (next) {
    const { $lenis } = useNuxtApp() as any
    if ($lenis) $lenis.scrollTo(next as HTMLElement)
    else next.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div>
    <!-- HERO FULLSCREEN -->
    <section
      ref="heroRoot"
      class="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir text-cream"
    >
      <!-- Background image -->
      <div ref="heroImg" class="absolute inset-0 will-change-transform">
        <img
          src="https://images.unsplash.com/photo-1514516345957-556ca7d90a29?auto=format&fit=crop&w=2400&q=85"
          alt="Carne alla brace, fuoco acceso — Cascina Paradiso"
          class="w-full h-full object-cover"
          fetchpriority="high"
        />
        <div
          class="absolute inset-0"
          style="background: linear-gradient(180deg, rgba(15,15,15,0.9) 0%, rgba(15,15,15,0.82) 40%, rgba(15,15,15,0.995) 100%);"
        />
      </div>

      <!-- Hero copy -->
      <div class="relative z-10 h-full container-x flex flex-col justify-end pb-20 md:pb-28">
        <div ref="heroEyebrow" class="eyebrow mb-6 text-cream/80">
          <span class="inline-block w-8 h-px bg-cream/60 mr-3 align-middle" />
          {{ $t('home.hero.eyebrow') }}
        </div>
        <h1
          ref="heroTitle"
          class="font-serif font-light text-fluid-7xl leading-tightest tracking-tightest max-w-5xl text-balance"
        >
          {{ $t('home.hero.title') }}
        </h1>
        <p
          ref="heroSub"
          class="mt-8 max-w-xl text-fluid-lg opacity-90 leading-relaxed"
        >
          {{ $t('home.hero.subtitle') }}
        </p>

        <!-- Scroll hint -->
        <button
          type="button"
          class="absolute bottom-10 right-[var(--safe-x)] flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
          @click="scrollDown"
        >
          <span class="eyebrow">{{ $t('home.hero.scroll') }}</span>
          <span class="block w-px h-12 bg-current animate-pulse" />
        </button>
      </div>
    </section>

    <!-- STORYTELLING — progressive text reveal -->
    <section
      id="storytelling"
      ref="storyRoot"
      class="relative py-section-lg bg-cream dark:bg-noir text-brown dark:text-cream overflow-hidden"
    >
      <div class="container-x max-w-5xl mx-auto">
        <p data-story-line class="eyebrow text-wine mb-10">
          {{ $t('home.storytelling.eyebrow') }}
        </p>

        <div class="font-serif font-light text-fluid-5xl md:text-fluid-6xl leading-[1.05] tracking-tightest space-y-2 md:space-y-4">
          <p data-story-line>{{ $t('home.storytelling.line1') }}</p>
          <p
            data-story-line
            class="italic text-wine font-normal text-fluid-6xl md:text-fluid-7xl"
          >
            {{ $t('home.storytelling.line2') }}
          </p>
          <p data-story-line>{{ $t('home.storytelling.line3') }}</p>
          <p data-story-line class="opacity-70 text-fluid-3xl md:text-fluid-4xl mt-6">
            {{ $t('home.storytelling.line4') }}
          </p>
          <p data-story-line class="opacity-70 text-fluid-3xl md:text-fluid-4xl">
            {{ $t('home.storytelling.line5') }}
            <span class="italic">{{ $t('home.storytelling.line6') }}</span>
          </p>
          <p data-story-line class="opacity-70 text-fluid-3xl md:text-fluid-4xl">
            {{ $t('home.storytelling.line7') }}
          </p>
          <p data-story-line class="font-normal">
            <span class="italic">{{ $t('home.storytelling.line8') }}</span>
          </p>
        </div>
      </div>
    </section>

    <!-- MARQUEE -->
    <section class="py-10 border-y border-[color:var(--line)] overflow-hidden">
      <Marquee
        :items="['Dal 1972', 'Carne alla brace', 'Prodotti nostrani', 'Cucina bergamasca', 'Tradizione familiare']"
        italic
      />
    </section>

    <!-- VALUES — 3 columns -->
    <SectionWrapper tone="cream" padding="lg">
      <div class="grid lg:grid-cols-[1fr_1.5fr] gap-16 mb-20 items-end">
        <div>
          <span class="eyebrow text-wine">{{ $t('home.values.eyebrow') }}</span>
          <AnimatedText
            as="h2"
            split="words"
            :stagger="0.06"
            class="font-serif text-fluid-5xl leading-tightest tracking-tightest mt-4"
          >
            {{ $t('home.values.title') }}
          </AnimatedText>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-6 md:gap-8">
        <ValueCard
          icon="fire"
          :index="0"
          :title="$t('home.values.items.fire.title')"
          :description="$t('home.values.items.fire.description')"
        />
        <ValueCard
          icon="land"
          :index="1"
          :title="$t('home.values.items.land.title')"
          :description="$t('home.values.items.land.description')"
        />
        <ValueCard
          icon="family"
          :index="2"
          :title="$t('home.values.items.family.title')"
          :description="$t('home.values.items.family.description')"
        />
      </div>
    </SectionWrapper>

    <!-- MENU TEASER — split image/text -->
    <SectionWrapper tone="transparent" padding="lg">
      <div class="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <ImageReveal
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85"
            alt="Tagliata di manzo alla brace con rucola"
            ratio="portrait"
            rounded
            hover-label="Menu"
          />
        </div>
        <div>
          <span class="eyebrow text-wine">{{ $t('home.menuTeaser.eyebrow') }}</span>
          <AnimatedText
            as="h2"
            class="font-serif text-fluid-5xl leading-tightest tracking-tightest mt-4 mb-6"
          >
            {{ $t('home.menuTeaser.title') }}
          </AnimatedText>
          <p class="text-fluid-lg opacity-80 leading-relaxed mb-10 max-w-md">
            {{ $t('home.menuTeaser.description') }}
          </p>
          <AppButton :to="localePath('/menu')" variant="solid" size="lg">
            {{ $t('cta.viewMenu') }}
          </AppButton>
        </div>
      </div>
    </SectionWrapper>

    <!-- GALLERY — editorial grid -->
    <SectionWrapper tone="transparent" padding="default">
      <div class="grid grid-cols-12 gap-4 md:gap-6">
        <div class="col-span-12 md:col-span-5 md:row-span-2">
          <ImageReveal
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85"
            alt="Ambiente interno della trattoria"
            ratio="portrait"
            rounded
          />
        </div>
        <div class="col-span-6 md:col-span-7">
          <ImageReveal
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1600&q=85"
            alt="Fuoco acceso nel camino"
            ratio="landscape"
            rounded
          />
        </div>
        <div class="col-span-6 md:col-span-3">
          <ImageReveal
            src="https://images.unsplash.com/photo-1534938665420-4193effeacc4?auto=format&fit=crop&w=900&q=85"
            alt="Formaggi artigianali"
            ratio="square"
            rounded
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <ImageReveal
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=85"
            alt="Casoncelli alla bergamasca"
            ratio="landscape"
            rounded
          />
        </div>
      </div>
    </SectionWrapper>

    <!-- FINAL CTA -->
    <section class="relative bg-wine text-cream py-section-lg overflow-hidden grain">
      <div class="container-x text-center max-w-4xl mx-auto">
        <AnimatedText
          as="h2"
          class="font-serif font-light text-fluid-6xl leading-tightest tracking-tightest mb-8"
        >
          {{ $t('home.cta.title') }}
        </AnimatedText>
        <p class="text-fluid-lg opacity-90 mb-12 max-w-lg mx-auto">
          {{ $t('home.cta.description') }}
        </p>
        <AppButton :to="localePath('/prenotazioni')" variant="outline" size="lg">
          {{ $t('home.cta.book') }}
        </AppButton>
      </div>
    </section>
  </div>
</template>
