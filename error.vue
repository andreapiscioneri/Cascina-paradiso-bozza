<script setup lang="ts">
interface NuxtErrorProps {
  error?: {
    statusCode?: number
    statusMessage?: string
    message?: string
  }
}

const props = defineProps<NuxtErrorProps>()

const { t } = useI18n()
const localePath = useLocalePath()
const handleError = () => clearError({ redirect: localePath('/') })

const statusCode = computed(() => props.error?.statusCode ?? 404)
</script>

<template>
  <div class="relative min-h-[100svh] w-full overflow-hidden bg-noir text-cream flex flex-col">
    <ClientOnly>
      <CustomCursor />
    </ClientOnly>

    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1514516345957-556ca7d90a29?auto=format&fit=crop&w=2400&q=85"
        alt="Fuoco acceso"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0"
        style="background: linear-gradient(180deg, rgba(15,15,15,0.9) 0%, rgba(15,15,15,0.8) 40%, rgba(15,15,15,0.995) 100%);"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10 flex-1 flex flex-col items-center justify-center container-x text-center py-10 md:py-14">
      <p class="eyebrow text-wine mb-6">{{ statusCode }}</p>
      <h1 class="font-serif font-light text-fluid-6xl leading-tightest tracking-tightest mb-4 max-w-3xl text-balance">
        {{ t('errorPage.titleLine1') }}<br />
        <span class="italic text-wine">{{ t('errorPage.titleHighlight') }}</span>
      </h1>
      <p class="text-fluid-base opacity-70 mb-8 max-w-2xl leading-relaxed">
        {{ t('errorPage.descriptionStart') }}
        <span class="md:whitespace-nowrap"> {{ t('errorPage.descriptionCta') }}</span>
      </p>
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-fluid-sm uppercase tracking-eyebrow transition hover:bg-white/10"
        @click="handleError"
      >
        {{ t('errorPage.backHome') }}
      </button>
    </div>

    <!-- Footer mark -->
    <div class="relative z-10 container-x pb-6 md:pb-8 text-center">
      <p class="eyebrow opacity-40">{{ t('errorPage.footerMark') }}</p>
    </div>
  </div>
</template>
