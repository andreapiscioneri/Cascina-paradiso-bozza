<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: 'Posizionamento | Cascina Paradiso',
  description: 'La strategia di posizionamento e obiettivi di Cascina Paradiso',
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
    <!-- HERO FULLSCREEN -->
    <section
      ref="heroRoot"
      class="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir text-cream"
    >
      <!-- Background video -->
      <div ref="heroImg" class="absolute inset-0 will-change-transform">
        <video
          autoplay
          muted
          loop
          playsinline
          class="w-full h-full object-cover"
        >
          <source src="/images/12186173_2160_3840_30fps.mp4" type="video/mp4" />
          <!-- Fallback image -->
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

      <!-- Hero copy -->
      <div class="relative z-10 h-full container-x flex flex-col justify-end pb-20 md:pb-28">
        <div ref="heroEyebrow" class="eyebrow mb-6 text-cream/80">
          <span class="inline-block w-8 h-px bg-cream/60 mr-3 align-middle" />
          Cascina Paradiso – Ristorante dal 1972
        </div>
        <h1
          ref="heroTitle"
          class="font-serif font-light text-fluid-6xl leading-tightest tracking-tightest max-w-5xl text-balance"
        >
          "Non abbiamo reinventato niente. Abbiamo solo ricordato."
        </h1>
        <p
          ref="heroSub"
          class="mt-8 max-w-xl text-fluid-base opacity-90 leading-relaxed"
        >
          Cascina Paradiso non è un'operazione di marketing costruita a tavolino, ma un frammento vivo della storia della Val Seriana. Mentre il mercato oggi "scimmiotta" la tradizione con estetiche rustiche artificiali, noi ripartiamo dalle radici del 1972.
        </p>

        <!-- Scroll hint -->
        <button
          type="button"
          class="absolute bottom-10 right-[var(--safe-x)] flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
          @click="scrollDown"
        >
          <span class="eyebrow">Scorri</span>
          <span class="block w-px h-12 bg-current animate-pulse" />
        </button>
      </div>
    </section>

    <!-- VALORE DIFFERENZIANTE — progressive text reveal -->
    <section
      id="valore"
      ref="valoreRoot"
      class="relative py-section-lg bg-cream dark:bg-noir text-brown dark:text-cream overflow-hidden"
    >
      <div class="container-x max-w-5xl mx-auto">
        <p data-valore-line class="eyebrow text-wine mb-10">
          Posizionamento
        </p>

        <div class="font-serif font-light text-fluid-5xl md:text-fluid-6xl leading-[1.05] tracking-tightest space-y-2 md:space-y-4">
          <p data-valore-line>Il Valore Differenziante:</p>
          <p
            data-valore-line
            class="italic text-wine font-normal text-fluid-6xl md:text-fluid-7xl"
          >
            L'onestà
          </p>
          <p data-valore-line class="opacity-70 text-fluid-3xl md:text-fluid-4xl mt-6">
            Siamo nati così, non abbiamo bisogno di fingere.
          </p>
        </div>
      </div>
    </section>

    <!-- PAROLE CHIAVE — Keywords section -->
    <section class="py-10 border-y border-[color:var(--line)] bg-cream dark:bg-noir overflow-hidden">
      <Marquee
        :items="['Heritage', 'Tradizione', 'Storia', 'Territorialità', 'Autenticità', 'Cucina tipica', 'Genuinità', 'Prodotti freschi', 'Fornitori locali', 'Materie prime']"
        italic
      />
    </section>

    <!-- OBIETTIVI — progressive reveal con cards -->
    <section
      ref="obiettiviRoot"
      class="relative py-section-lg bg-noir text-cream overflow-hidden"
    >
      <div class="container-x max-w-6xl mx-auto">
        <p data-obiettivo-line class="eyebrow text-wine mb-16">
          Strategie e Obiettivi
        </p>

        <div class="grid md:grid-cols-3 gap-8 md:gap-6">
          <div data-obiettivo-line class="bg-wine/10 border border-wine/20 rounded-lg p-8 md:p-6">
            <div class="flex items-start gap-4 mb-4">
              <span class="text-wine font-serif font-light text-fluid-3xl">01</span>
            </div>
            <h4 class="font-serif font-light text-fluid-lg text-cream mb-3 leading-tight">
              Brand Awareness (RI-Conoscere)
            </h4>
            <p class="text-fluid-sm text-cream/80 leading-relaxed">
              Riattivare la memoria storica dei vecchi clienti e posizionarci come "nuova scoperta" per nuovi potenziali clienti.
            </p>
          </div>

          <div data-obiettivo-line class="bg-wine/10 border border-wine/20 rounded-lg p-8 md:p-6">
            <div class="flex items-start gap-4 mb-4">
              <span class="text-wine font-serif font-light text-fluid-3xl">02</span>
            </div>
            <h4 class="font-serif font-light text-fluid-lg text-cream mb-3 leading-tight">
              Conversione
            </h4>
            <p class="text-fluid-sm text-cream/80 leading-relaxed">
              Trasformare l'interesse in prenotazioni dirette attraverso strumenti digitali snelli.
            </p>
          </div>

          <div data-obiettivo-line class="bg-wine/10 border border-wine/20 rounded-lg p-8 md:p-6">
            <div class="flex items-start gap-4 mb-4">
              <span class="text-wine font-serif font-light text-fluid-3xl">03</span>
            </div>
            <h4 class="font-serif font-light text-fluid-lg text-cream mb-3 leading-tight">
              Posizionamento Digitale
            </h4>
            <p class="text-fluid-sm text-cream/80 leading-relaxed">
              Scalare il ranking Google per le ricerche locali ("Ristoranti Val Seriana") e presidiare i social con un'estetica di alto livello.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- STRUMENTI HEADER -->
    <SectionWrapper tone="cream" padding="lg">
      <div class="max-w-6xl mx-auto relative">
        <div class="absolute -bottom-32 -right-20 text-cream font-serif font-light text-9xl leading-none pointer-events-none">
          STRUMENTI
        </div>
        <div class="relative z-10">
          <p class="eyebrow text-wine mb-6 uppercase tracking-widest text-xs">
            Come lo faremo
          </p>
          <h2 class="font-serif font-light text-fluid-7xl leading-tightest tracking-tightest text-wine">
            Tre pilastri <br class="hidden md:block" />per il successo
          </h2>
        </div>
      </div>
    </SectionWrapper>

    <!-- STRUMENTO 1: BRAND IDENTITY — split image/text -->
    <SectionWrapper tone="cream" padding="lg">
      <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div class="order-2 md:order-1">
          <div class="flex items-start gap-6 mb-8">
            <span class="font-serif font-light text-7xl md:text-8xl text-wine/90 leading-none">01</span>
            <div class="flex-1">
              <span class="eyebrow text-wine text-xs uppercase tracking-widest">Strumento 1</span>
              <h3 class="font-serif font-light text-fluid-5xl leading-tightest tracking-tightest text-white mt-2">Brand Identity</h3>
              <p class="mt-4 text-fluid-lg text-cream/90 leading-relaxed max-w-prose">Necessità di creare un'immagine coerente, riconoscibile, ricordabile.</p>
            </div>
          </div>

          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-5 rounded-2xl bg-gradient-to-br from-wine/20 to-transparent border border-wine/40">
              <h4 class="font-serif font-medium text-cream mb-2">Logo & Visual</h4>
              <p class="text-cream text-sm leading-relaxed">No moderno e freddo, ma che richiami l'artigianalità con una pulizia visiva che comunichi qualità.</p>
            </div>

            <div class="p-5 rounded-2xl bg-gradient-to-br from-wine/20 to-transparent border border-wine/40">
              <h4 class="font-serif font-medium text-cream mb-2">Color Palette</h4>
              <p class="text-cream text-sm leading-relaxed">Vino/bordeaux ispirato alle pareti del ristorante.</p>
            </div>

            <div class="p-5 rounded-2xl bg-gradient-to-br from-wine/20 to-transparent border border-wine/40 md:col-span-2">
              <h4 class="font-serif font-medium text-cream mb-2">Landing Page con Menu Dinamico</h4>
              <p class="text-cream text-sm leading-relaxed mb-2">Facilmente aggiornabile (essenziale per chi lavora con prodotti stagionali). Opzionabili:</p>
              <ul class="list-disc list-inside space-y-1 text-cream ml-2">
                <li>Hero Video: 10 secondi emozionali (fuoco che arde, pasta fresca tirata a mano, vista sulla valle)</li>
                <li>Prenotazione Diretta: Fondamentale per convertire l'utente subito, senza passaggi intermedi</li>
              </ul>
            </div>

            <div class="p-5 rounded-2xl bg-gradient-to-br from-wine/20 to-transparent border border-wine/40 md:col-span-2">
              <h4 class="font-serif font-medium text-cream mb-2">Menu Fisico</h4>
              <p class="text-cream text-sm leading-relaxed">Coerente con il resto dell'immagine, il menù è il primo punto di contatto fisico. Deve essere materico (carta di qualità) e raccontare, in una colonna o nel retro, la storia della Cantina Cerea per dare profondità all'esperienza.</p>
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

    

    <!-- STRUMENTO 2: SOCIAL MEDIA & CONTENT — split image/text -->
    <SectionWrapper tone="wine" padding="lg">
      <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div>
          <div class="flex items-start gap-6 mb-12">
            <span class="font-serif font-light text-8xl md:text-9xl text-cream/90 leading-none">02</span>
            <div class="flex-1">
              <span class="eyebrow text-cream text-xs uppercase tracking-widest opacity-80">Strumento 2</span>
              <h3 class="font-serif font-light text-fluid-5xl leading-tightest tracking-tightest text-cream mt-2">
                Social Media & Content
              </h3>
            </div>
          </div>
          
          <p class="text-fluid-base text-cream leading-relaxed mb-2">
            Utilizzare video perché strumento ad alto tasso di diffusione e visibilità.
          </p>
          <p class="text-fluid-sm text-cream/70 leading-relaxed mb-8 font-medium">
            Cosa mostrare:
          </p>

          <div class="space-y-4">
            <div class="bg-cream/10 border border-cream/20 rounded-lg p-6">
              <h4 class="font-serif font-medium text-fluid-base text-cream mb-2">
                "Dalle Mani alla Tavola"
              </h4>
              <p class="text-fluid-sm text-cream leading-relaxed">
                Macro-riprese della preparazione dei piatti tipici. Focus sulla tecnica (il "come una volta") ma con l'estetica moderna (impiattamento curato).
              </p>
            </div>

            <div class="bg-cream/10 border border-cream/20 rounded-lg p-6">
              <h4 class="font-serif font-medium text-fluid-base text-cream mb-2">
                "Frammenti di 1972"
              </h4>
              <p class="text-fluid-sm text-cream leading-relaxed">
                Racconti sulla storia del ristorante, sui personaggi storici che lo hanno visitato, riprese di dettagli che rimandano alla storia (foto, oggetti storici).
              </p>
            </div>

            <div class="bg-cream/10 border border-cream/20 rounded-lg p-6">
              <h4 class="font-serif font-medium text-fluid-base text-cream mb-2">
                "L'Atmosfera"
              </h4>
              <p class="text-fluid-sm text-cream leading-relaxed">
                Video che trasmettano il vibe del locale: il rumore dei calici, il calore del legno, la pace della Val Seriana.
              </p>
            </div>

            <div class="bg-cream/10 border border-cream/20 rounded-lg p-6">
              <h4 class="font-serif font-medium text-fluid-base text-cream mb-2">
                "Il Fornitore del Giorno"
              </h4>
              <p class="text-fluid-sm text-cream leading-relaxed">
                Video in collaborazione con i fornitori locali, o più semplicemente in cui si fa un focus su un prodotto local.
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

    <!-- STRUMENTO 3: SPONSORIZZAZIONI — split image/text -->
    <SectionWrapper tone="noir" padding="lg">
      <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div class="order-2 md:order-1">
          <div class="flex items-start gap-6 mb-12">
            <span class="font-serif font-light text-8xl md:text-9xl text-cream/90 leading-none">03</span>
            <div class="flex-1">
              <span class="eyebrow text-cream text-xs uppercase tracking-widest opacity-80">Strumento 3</span>
              <h3 class="font-serif font-light text-fluid-5xl leading-tightest tracking-tightest text-cream mt-2">
                Sponsorizzazioni
              </h3>
            </div>
          </div>

          <div class="bg-cream/5 border border-cream/15 rounded-lg p-6">
            <h4 class="font-serif font-medium text-fluid-base text-cream mb-3">
              Social Ads Strategiche
            </h4>
            <p class="text-fluid-base text-cream leading-relaxed">
              Campagne geolocalizzate mirate a un pubblico amante del fine-dining e della tradizione, per accelerare la copertura e trasformare i "non so che ha riaperto" in "voglio andare a provare".
            </p>
          </div>
        </div>
        <div class="order-1 md:order-2">
          <div class="flex flex-col gap-6 md:gap-8 items-stretch max-w-2xl">
            <a href="https://www.instagram.com/mediline_torino/" target="_blank" rel="noopener" class="block">
              <ImageReveal
                src="/images/mediline-instagram-cover.svg"
                alt="Mediline - Sponsorizzazioni Instagram"
                ratio="landscape"
                rounded
                hover-label="Vedi Instagram"
              />
            </a>

            <a href="https://www.instagram.com/farmacia.di.gorle/" target="_blank" rel="noopener" class="block">
              <ImageReveal
                src="/images/farmacia-gorle-instagram-cover.svg"
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

    <!-- CTA SECTION -->
    <SectionWrapper tone="wine" padding="lg" class="text-center">
      <div class="max-w-2xl mx-auto">
        <h2 class="font-serif font-light text-fluid-5xl leading-tightest tracking-tightest text-cream mb-8">
          Ripartiamo dalle radici
        </h2>
        <p class="text-fluid-lg text-cream/90 mb-12">
          Ogni scelta comunicativa rimanda a ciò che siamo: uno spaccato di storia bergamasca che vive oggi, autentico come ieri.
        </p>
        <NuxtLink to="/" class="inline-block px-10 py-4 bg-cream text-wine font-medium rounded-full hover:bg-cream/90 transition-all">
          Torna alla Homepage
        </NuxtLink>
      </div>
    </SectionWrapper>
  </div>
</template>
