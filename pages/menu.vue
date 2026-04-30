<script setup lang="ts">
const { t, tm, rt } = useI18n()

useSeoMeta({
  title: () => `${t('menu.hero.title')} — ${t('brand.name')}`,
  description: () => t('menu.intro'),
})

interface MenuEntry {
  name: string
  desc: string
  price: string
}

const categories = [
  {
    key: 'antipasti',
    image:
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=85',
  },
  {
    key: 'primi',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=85',
  },
  {
    key: 'brace',
    image:
      'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=85',
  },
  {
    key: 'contorni',
    image:
      'https://images.unsplash.com/photo-1518291344630-4857135fb581?auto=format&fit=crop&w=1200&q=85',
  },
  {
    key: 'dolci',
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=85',
  },
]

const getItems = (key: string): MenuEntry[] => {
  const items = tm(`menu.items.${key}`) as any[]
  return Array.isArray(items) ? items.map(item => ({
    name: rt(item.name),
    desc: rt(item.desc),
    price: rt(item.price),
  })) : []
}
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir text-cream">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2400&q=85"
          alt="Carne alla brace — Menu Cascina Paradiso"
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
          {{ $t('menu.hero.eyebrow') }}
        </div>
        <h1
          class="font-serif font-light text-fluid-7xl leading-tightest tracking-tightest max-w-5xl text-balance text-cream"
        >
          {{ $t('menu.hero.title') }}
        </h1>
        <p class="mt-8 max-w-xl text-fluid-lg opacity-90 leading-relaxed">
          {{ $t('menu.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Category blocks -->
    <div class="container-x space-y-section-lg pb-section-lg">
      <section
        v-for="(cat, i) in categories"
        :key="cat.key"
        class="grid lg:grid-cols-[1fr_1.3fr] gap-10 md:gap-20 items-start"
      >
        <div
          class="lg:sticky lg:top-[calc(var(--nav-h)+3rem)]"
          :class="i % 2 === 1 ? 'lg:order-2' : ''"
        >
          <ImageReveal
            :src="cat.image"
            :alt="$t(`menu.categories.${cat.key}`)"
            :ratio="i % 2 === 0 ? 'portrait' : 'landscape'"
            rounded
          />
          <span class="eyebrow text-wine mt-6 block">0{{ i + 1 }} — {{ $t(`menu.categories.${cat.key}`) }}</span>
        </div>

        <div :class="i % 2 === 1 ? 'lg:order-1' : ''">
          <AnimatedText
            as="h2"
            class="font-serif text-fluid-5xl leading-tightest tracking-tightest mb-10"
          >
            {{ $t(`menu.categories.${cat.key}`) }}
          </AnimatedText>

          <div>
            <MenuItem
              v-for="(item, idx) in getItems(cat.key)"
              :key="`${cat.key}-${idx}`"
              :name="item.name"
              :desc="item.desc"
              :price="item.price"
            />
          </div>
        </div>
      </section>
    </div>

    <!-- Note -->
    <section class="container-x pb-section">
      <div class="max-w-3xl mx-auto text-center border-t border-[color:var(--line)] pt-14">
        <p class="eyebrow text-wine mb-4">* Nota</p>
        <p class="text-fluid-base opacity-70 leading-relaxed">{{ $t('menu.note') }}</p>
      </div>
    </section>
  </div>
</template>
