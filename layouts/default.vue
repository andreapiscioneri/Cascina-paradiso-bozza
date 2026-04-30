<script setup lang="ts">
// Default layout — loader + cursor + nav + main + footer
</script>

<template>
  <div class="grain min-h-screen">
    <ClientOnly>
      <SiteLoader />
      <CustomCursor />
    </ClientOnly>

    <SiteNavbar />

    <main>
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>
