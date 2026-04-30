
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  AnimatedText: typeof import("../../components/AnimatedText.vue")['default']
  AppButton: typeof import("../../components/AppButton.vue")['default']
  CustomCursor: typeof import("../../components/CustomCursor.vue")['default']
  ImageReveal: typeof import("../../components/ImageReveal.vue")['default']
  LangToggle: typeof import("../../components/LangToggle.vue")['default']
  Marquee: typeof import("../../components/Marquee.vue")['default']
  MenuItem: typeof import("../../components/MenuItem.vue")['default']
  SectionWrapper: typeof import("../../components/SectionWrapper.vue")['default']
  SiteFooter: typeof import("../../components/SiteFooter.vue")['default']
  SiteLoader: typeof import("../../components/SiteLoader.vue")['default']
  SiteNavbar: typeof import("../../components/SiteNavbar.vue")['default']
  ThemeToggle: typeof import("../../components/ThemeToggle.vue")['default']
  TimelineItem: typeof import("../../components/TimelineItem.vue")['default']
  ValueCard: typeof import("../../components/ValueCard.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
  NuxtPicture: typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
  ColorScheme: typeof import("../../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
  NuxtLinkLocale: typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
  SwitchLocalePathLink: typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  OgImage: typeof import("../../node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImage")['default']
  OgImageScreenshot: typeof import("../../node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImageScreenshot")['default']
  SchemaOrgArticle: typeof import("@unhead/schema-org/vue")['SchemaOrgArticle']
  SchemaOrgBreadcrumb: typeof import("@unhead/schema-org/vue")['SchemaOrgBreadcrumb']
  SchemaOrgComment: typeof import("@unhead/schema-org/vue")['SchemaOrgComment']
  SchemaOrgEvent: typeof import("@unhead/schema-org/vue")['SchemaOrgEvent']
  SchemaOrgFoodEstablishment: typeof import("@unhead/schema-org/vue")['SchemaOrgFoodEstablishment']
  SchemaOrgHowTo: typeof import("@unhead/schema-org/vue")['SchemaOrgHowTo']
  SchemaOrgImage: typeof import("@unhead/schema-org/vue")['SchemaOrgImage']
  SchemaOrgJobPosting: typeof import("@unhead/schema-org/vue")['SchemaOrgJobPosting']
  SchemaOrgLocalBusiness: typeof import("@unhead/schema-org/vue")['SchemaOrgLocalBusiness']
  SchemaOrgOrganization: typeof import("@unhead/schema-org/vue")['SchemaOrgOrganization']
  SchemaOrgPerson: typeof import("@unhead/schema-org/vue")['SchemaOrgPerson']
  SchemaOrgProduct: typeof import("@unhead/schema-org/vue")['SchemaOrgProduct']
  SchemaOrgQuestion: typeof import("@unhead/schema-org/vue")['SchemaOrgQuestion']
  SchemaOrgRecipe: typeof import("@unhead/schema-org/vue")['SchemaOrgRecipe']
  SchemaOrgReview: typeof import("@unhead/schema-org/vue")['SchemaOrgReview']
  SchemaOrgVideo: typeof import("@unhead/schema-org/vue")['SchemaOrgVideo']
  SchemaOrgWebPage: typeof import("@unhead/schema-org/vue")['SchemaOrgWebPage']
  SchemaOrgWebSite: typeof import("@unhead/schema-org/vue")['SchemaOrgWebSite']
  SchemaOrgMovie: typeof import("@unhead/schema-org/vue")['SchemaOrgMovie']
  SchemaOrgCourse: typeof import("@unhead/schema-org/vue")['SchemaOrgCourse']
  SchemaOrgItemList: typeof import("@unhead/schema-org/vue")['SchemaOrgItemList']
  SchemaOrgBook: typeof import("@unhead/schema-org/vue")['SchemaOrgBook']
  SchemaOrgSoftwareApp: typeof import("@unhead/schema-org/vue")['SchemaOrgSoftwareApp']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAnimatedText: LazyComponent<typeof import("../../components/AnimatedText.vue")['default']>
  LazyAppButton: LazyComponent<typeof import("../../components/AppButton.vue")['default']>
  LazyCustomCursor: LazyComponent<typeof import("../../components/CustomCursor.vue")['default']>
  LazyImageReveal: LazyComponent<typeof import("../../components/ImageReveal.vue")['default']>
  LazyLangToggle: LazyComponent<typeof import("../../components/LangToggle.vue")['default']>
  LazyMarquee: LazyComponent<typeof import("../../components/Marquee.vue")['default']>
  LazyMenuItem: LazyComponent<typeof import("../../components/MenuItem.vue")['default']>
  LazySectionWrapper: LazyComponent<typeof import("../../components/SectionWrapper.vue")['default']>
  LazySiteFooter: LazyComponent<typeof import("../../components/SiteFooter.vue")['default']>
  LazySiteLoader: LazyComponent<typeof import("../../components/SiteLoader.vue")['default']>
  LazySiteNavbar: LazyComponent<typeof import("../../components/SiteNavbar.vue")['default']>
  LazyThemeToggle: LazyComponent<typeof import("../../components/ThemeToggle.vue")['default']>
  LazyTimelineItem: LazyComponent<typeof import("../../components/TimelineItem.vue")['default']>
  LazyValueCard: LazyComponent<typeof import("../../components/ValueCard.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
  LazyColorScheme: LazyComponent<typeof import("../../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
  LazyNuxtLinkLocale: LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
  LazySwitchLocalePathLink: LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyOgImage: LazyComponent<typeof import("../../node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImage")['default']>
  LazyOgImageScreenshot: LazyComponent<typeof import("../../node_modules/nuxt-og-image/dist/runtime/app/components/OgImage/OgImageScreenshot")['default']>
  LazySchemaOrgArticle: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgArticle']>
  LazySchemaOrgBreadcrumb: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgBreadcrumb']>
  LazySchemaOrgComment: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgComment']>
  LazySchemaOrgEvent: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgEvent']>
  LazySchemaOrgFoodEstablishment: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgFoodEstablishment']>
  LazySchemaOrgHowTo: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgHowTo']>
  LazySchemaOrgImage: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgImage']>
  LazySchemaOrgJobPosting: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgJobPosting']>
  LazySchemaOrgLocalBusiness: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgLocalBusiness']>
  LazySchemaOrgOrganization: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgOrganization']>
  LazySchemaOrgPerson: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgPerson']>
  LazySchemaOrgProduct: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgProduct']>
  LazySchemaOrgQuestion: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgQuestion']>
  LazySchemaOrgRecipe: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgRecipe']>
  LazySchemaOrgReview: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgReview']>
  LazySchemaOrgVideo: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgVideo']>
  LazySchemaOrgWebPage: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgWebPage']>
  LazySchemaOrgWebSite: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgWebSite']>
  LazySchemaOrgMovie: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgMovie']>
  LazySchemaOrgCourse: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgCourse']>
  LazySchemaOrgItemList: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgItemList']>
  LazySchemaOrgBook: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgBook']>
  LazySchemaOrgSoftwareApp: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgSoftwareApp']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
