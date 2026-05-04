import { _ as _sfc_main$2 } from "./Marquee-CC4pc3MQ.js";
import { _ as _sfc_main$3 } from "./SectionWrapper-tC4CnWE5.js";
import { _ as _sfc_main$4 } from "./AnimatedText-B0reH5hT.js";
import { defineComponent, ref, mergeProps, useSSRContext, toValue, withCtx, createTextVNode, toDisplayString, createVNode, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { u as useReveal } from "./useReveal-BtUQoMKJ.js";
import { _ as _sfc_main$5 } from "./ImageReveal-DAJIIrzh.js";
import { _ as _sfc_main$6 } from "./AppButton-DNzz4bE5.js";
import { b as useNuxtApp, d as useRoute, e as useOgImageRuntimeConfig, s as setHeadOgImagePrebuilt, g as getOgImagePath, f as useRequestEvent, h as createOgImageMeta, u as useI18n, j as useLocalePath, a as useHead } from "../server.mjs";
import { appendHeader } from "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/h3/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/klona/dist/index.mjs";
import "#internal/nuxt/paths";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/defu/dist/defu.mjs";
import { u as useSplitReveal } from "./useSplitReveal-BZWnnGc4.js";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/hookable/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/ufo/dist/index.mjs";
import "./nuxt-link-Bzlihrby.js";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/ofetch/dist/node.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/@unhead/vue/dist/index.mjs";
import "@unhead/addons";
import "unhead/plugins";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/scule/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/cookie-es/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/destr/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/ohash/dist/index.mjs";
import "@unhead/schema-org/vue";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/devalue/index.js";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/radix3/dist/index.mjs";
import "@vue/devtools-api";
import "split-type";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ValueCard",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    description: {},
    index: { default: 0 }
  },
  setup(__props) {
    const props = __props;
    const root = ref(null);
    useReveal(root, { stagger: 0.08, delay: props.index * 0.08 });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        ref_key: "root",
        ref: root,
        class: "group relative p-8 md:p-10 rounded-3xl border border-[color:var(--line)] bg-cream-soft dark:bg-noir-50 transition-all duration-600 ease-expo hover:-translate-y-1 hover:border-wine",
        "data-reveal": ""
      }, _attrs))}><div class="w-14 h-14 mb-6 text-wine">`);
      if (__props.icon === "fire") {
        _push(`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M32 6c0 10-10 12-10 22a10 10 0 0 0 20 0c0-5-3-7-5-10s0 6-5 6c0-6 5-9 0-18z"></path><path d="M26 40c0 4 3 7 6 7s6-3 6-7"></path></svg>`);
      } else if (__props.icon === "land") {
        _push(`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" aria-hidden="true"><path d="M32 10v46"></path><path d="M32 20c-6-2-10 0-12 4 4 2 8 1 12-1"></path><path d="M32 20c6-2 10 0 12 4-4 2-8 1-12-1"></path><path d="M32 32c-6-2-10 0-12 4 4 2 8 1 12-1"></path><path d="M32 32c6-2 10 0 12 4-4 2-8 1-12-1"></path><path d="M32 44c-6-2-10 0-12 4 4 2 8 1 12-1"></path><path d="M32 44c6-2 10 0 12 4-4 2-8 1-12-1"></path></svg>`);
      } else {
        _push(`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 30 32 12l22 18"></path><path d="M16 28v24h32V28"></path><path d="M28 52v-12h8v12"></path></svg>`);
      }
      _push(`</div><h3 class="font-serif text-fluid-2xl mb-3">${ssrInterpolate(__props.title)}</h3><p class="text-fluid-sm opacity-80 leading-relaxed max-w-sm">${ssrInterpolate(__props.description)}</p><div class="absolute inset-x-10 bottom-0 h-px bg-wine scale-x-0 origin-left transition-transform duration-700 ease-expo group-hover:scale-x-100"></div></article>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ValueCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function defineOgImage(_options = {}) {
  const nuxtApp = useNuxtApp();
  const route = useRoute();
  const basePath = route.path || "/";
  if (nuxtApp.payload.path === basePath) {
    const state = ref(false);
    state.value = true;
  }
  const { defaults } = useOgImageRuntimeConfig();
  const options = toValue(_options);
  if (options === false) {
    return;
  }
  const validOptions = options;
  for (const key in defaults) {
    if (validOptions[key] === void 0)
      validOptions[key] = defaults[key];
  }
  if (route.query)
    validOptions._query = route.query;
  if (validOptions.url) {
    setHeadOgImagePrebuilt(validOptions);
    return;
  }
  const path = getOgImagePath(basePath, validOptions);
  if (import.meta.prerender) {
    appendHeader(useRequestEvent(nuxtApp), "x-nitro-prerender", path);
  }
  createOgImageMeta(path, validOptions, nuxtApp.ssrContext);
}
function defineOgImageComponent(component, props = {}, options = {}) {
  return defineOgImage({
    ...options,
    component,
    props
  });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const localePath = useLocalePath();
    useHead({
      title: () => `${t("brand.name")} — ${t("brand.tagline")}`,
      meta: [
        { name: "description", content: () => t("home.hero.subtitle") + " — Via Guglielmo Ghilardi 20, Alzano Lombardo (BG)." },
        { property: "og:title", content: () => `${t("brand.name")} — ${t("brand.since")}` },
        { property: "og:description", content: () => t("home.hero.subtitle") },
        { property: "og:image", content: "/images/og-home.jpg" },
        { name: "twitter:card", content: "summary_large_image" }
      ]
    });
    defineOgImageComponent("OgImageTemplate", {
      title: "Cascina Paradiso",
      subtitle: "Dal 1972 — Alzano Lombardo"
    });
    ref(null);
    ref(null);
    const heroTitle = ref(null);
    ref(null);
    const heroSub = ref(null);
    ref(null);
    useSplitReveal(heroTitle, { type: "words", stagger: 0.08, duration: 1.2, start: "top 95%" });
    useSplitReveal(heroSub, { type: "words", stagger: 0.02, delay: 0.6, start: "top 95%" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Marquee = _sfc_main$2;
      const _component_SectionWrapper = _sfc_main$3;
      const _component_AnimatedText = _sfc_main$4;
      const _component_ValueCard = _sfc_main$1;
      const _component_ImageReveal = _sfc_main$5;
      const _component_AppButton = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir text-cream"><div class="absolute inset-0 will-change-transform"><img src="https://images.unsplash.com/photo-1514516345957-556ca7d90a29?auto=format&amp;fit=crop&amp;w=2400&amp;q=85" alt="Carne alla brace, fuoco acceso — Cascina Paradiso" class="w-full h-full object-cover" fetchpriority="high"><div class="absolute inset-0" style="${ssrRenderStyle({ "background": "linear-gradient(180deg, rgba(15,15,15,0.9) 0%, rgba(15,15,15,0.82) 40%, rgba(15,15,15,0.995) 100%)" })}"></div></div><div class="relative z-10 h-full container-x flex flex-col justify-end pb-20 md:pb-28"><div class="eyebrow mb-6 text-cream/80"><span class="inline-block w-8 h-px bg-cream/60 mr-3 align-middle"></span> ${ssrInterpolate(_ctx.$t("home.hero.eyebrow"))}</div><h1 class="font-serif font-light text-fluid-7xl leading-tightest tracking-tightest max-w-5xl text-balance">${ssrInterpolate(_ctx.$t("home.hero.title"))}</h1><p class="mt-8 max-w-xl text-fluid-lg opacity-90 leading-relaxed">${ssrInterpolate(_ctx.$t("home.hero.subtitle"))}</p><button type="button" class="absolute bottom-10 right-[var(--safe-x)] flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"><span class="eyebrow">${ssrInterpolate(_ctx.$t("home.hero.scroll"))}</span><span class="block w-px h-12 bg-current animate-pulse"></span></button></div></section><section id="storytelling" class="relative py-section-lg bg-cream dark:bg-noir text-brown dark:text-cream overflow-hidden"><div class="container-x max-w-5xl mx-auto"><p data-story-line class="eyebrow text-wine mb-10">${ssrInterpolate(_ctx.$t("home.storytelling.eyebrow"))}</p><div class="font-serif font-light text-fluid-5xl md:text-fluid-6xl leading-[1.05] tracking-tightest space-y-2 md:space-y-4"><p data-story-line>${ssrInterpolate(_ctx.$t("home.storytelling.line1"))}</p><p data-story-line class="italic text-wine font-normal text-fluid-6xl md:text-fluid-7xl">${ssrInterpolate(_ctx.$t("home.storytelling.line2"))}</p><p data-story-line>${ssrInterpolate(_ctx.$t("home.storytelling.line3"))}</p><p data-story-line class="opacity-70 text-fluid-3xl md:text-fluid-4xl mt-6">${ssrInterpolate(_ctx.$t("home.storytelling.line4"))}</p><p data-story-line class="opacity-70 text-fluid-3xl md:text-fluid-4xl">${ssrInterpolate(_ctx.$t("home.storytelling.line5"))} <span class="italic">${ssrInterpolate(_ctx.$t("home.storytelling.line6"))}</span></p><p data-story-line class="opacity-70 text-fluid-3xl md:text-fluid-4xl">${ssrInterpolate(_ctx.$t("home.storytelling.line7"))}</p><p data-story-line class="font-normal"><span class="italic">${ssrInterpolate(_ctx.$t("home.storytelling.line8"))}</span></p></div></div></section><section class="py-10 border-y border-[color:var(--line)] overflow-hidden">`);
      _push(ssrRenderComponent(_component_Marquee, {
        items: ["Dal 1972", "Carne alla brace", "Prodotti nostrani", "Cucina bergamasca", "Tradizione familiare"],
        italic: ""
      }, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_SectionWrapper, {
        tone: "cream",
        padding: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid lg:grid-cols-[1fr_1.5fr] gap-16 mb-20 items-end"${_scopeId}><div${_scopeId}><span class="eyebrow text-wine"${_scopeId}>${ssrInterpolate(_ctx.$t("home.values.eyebrow"))}</span>`);
            _push2(ssrRenderComponent(_component_AnimatedText, {
              as: "h2",
              split: "words",
              stagger: 0.06,
              class: "font-serif text-fluid-5xl leading-tightest tracking-tightest mt-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("home.values.title"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("home.values.title")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="grid md:grid-cols-3 gap-6 md:gap-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ValueCard, {
              icon: "fire",
              index: 0,
              title: _ctx.$t("home.values.items.fire.title"),
              description: _ctx.$t("home.values.items.fire.description")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ValueCard, {
              icon: "land",
              index: 1,
              title: _ctx.$t("home.values.items.land.title"),
              description: _ctx.$t("home.values.items.land.description")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ValueCard, {
              icon: "family",
              index: 2,
              title: _ctx.$t("home.values.items.family.title"),
              description: _ctx.$t("home.values.items.family.description")
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid lg:grid-cols-[1fr_1.5fr] gap-16 mb-20 items-end" }, [
                createVNode("div", null, [
                  createVNode("span", { class: "eyebrow text-wine" }, toDisplayString(_ctx.$t("home.values.eyebrow")), 1),
                  createVNode(_component_AnimatedText, {
                    as: "h2",
                    split: "words",
                    stagger: 0.06,
                    class: "font-serif text-fluid-5xl leading-tightest tracking-tightest mt-4"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("home.values.title")), 1)
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "grid md:grid-cols-3 gap-6 md:gap-8" }, [
                createVNode(_component_ValueCard, {
                  icon: "fire",
                  index: 0,
                  title: _ctx.$t("home.values.items.fire.title"),
                  description: _ctx.$t("home.values.items.fire.description")
                }, null, 8, ["title", "description"]),
                createVNode(_component_ValueCard, {
                  icon: "land",
                  index: 1,
                  title: _ctx.$t("home.values.items.land.title"),
                  description: _ctx.$t("home.values.items.land.description")
                }, null, 8, ["title", "description"]),
                createVNode(_component_ValueCard, {
                  icon: "family",
                  index: 2,
                  title: _ctx.$t("home.values.items.family.title"),
                  description: _ctx.$t("home.values.items.family.description")
                }, null, 8, ["title", "description"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_SectionWrapper, {
        tone: "transparent",
        padding: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid lg:grid-cols-2 gap-12 md:gap-20 items-center"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ImageReveal, {
              src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85",
              alt: "Tagliata di manzo alla brace con rucola",
              ratio: "portrait",
              rounded: "",
              "hover-label": "Menu"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><span class="eyebrow text-wine"${_scopeId}>${ssrInterpolate(_ctx.$t("home.menuTeaser.eyebrow"))}</span>`);
            _push2(ssrRenderComponent(_component_AnimatedText, {
              as: "h2",
              class: "font-serif text-fluid-5xl leading-tightest tracking-tightest mt-4 mb-6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("home.menuTeaser.title"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("home.menuTeaser.title")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-fluid-lg opacity-80 leading-relaxed mb-10 max-w-md"${_scopeId}>${ssrInterpolate(_ctx.$t("home.menuTeaser.description"))}</p>`);
            _push2(ssrRenderComponent(_component_AppButton, {
              to: unref(localePath)("/menu"),
              variant: "solid",
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("cta.viewMenu"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("cta.viewMenu")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid lg:grid-cols-2 gap-12 md:gap-20 items-center" }, [
                createVNode("div", null, [
                  createVNode(_component_ImageReveal, {
                    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85",
                    alt: "Tagliata di manzo alla brace con rucola",
                    ratio: "portrait",
                    rounded: "",
                    "hover-label": "Menu"
                  })
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "eyebrow text-wine" }, toDisplayString(_ctx.$t("home.menuTeaser.eyebrow")), 1),
                  createVNode(_component_AnimatedText, {
                    as: "h2",
                    class: "font-serif text-fluid-5xl leading-tightest tracking-tightest mt-4 mb-6"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("home.menuTeaser.title")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "text-fluid-lg opacity-80 leading-relaxed mb-10 max-w-md" }, toDisplayString(_ctx.$t("home.menuTeaser.description")), 1),
                  createVNode(_component_AppButton, {
                    to: unref(localePath)("/menu"),
                    variant: "solid",
                    size: "lg"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("cta.viewMenu")), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_SectionWrapper, {
        tone: "transparent",
        padding: "default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-12 gap-4 md:gap-6"${_scopeId}><div class="col-span-12 md:col-span-5 md:row-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ImageReveal, {
              src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85",
              alt: "Ambiente interno della trattoria",
              ratio: "portrait",
              rounded: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 md:col-span-7"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ImageReveal, {
              src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1600&q=85",
              alt: "Fuoco acceso nel camino",
              ratio: "landscape",
              rounded: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 md:col-span-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ImageReveal, {
              src: "https://images.unsplash.com/photo-1534938665420-4193effeacc4?auto=format&fit=crop&w=900&q=85",
              alt: "Formaggi artigianali",
              ratio: "square",
              rounded: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12 md:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ImageReveal, {
              src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=85",
              alt: "Casoncelli alla bergamasca",
              ratio: "landscape",
              rounded: ""
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-12 gap-4 md:gap-6" }, [
                createVNode("div", { class: "col-span-12 md:col-span-5 md:row-span-2" }, [
                  createVNode(_component_ImageReveal, {
                    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85",
                    alt: "Ambiente interno della trattoria",
                    ratio: "portrait",
                    rounded: ""
                  })
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-7" }, [
                  createVNode(_component_ImageReveal, {
                    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1600&q=85",
                    alt: "Fuoco acceso nel camino",
                    ratio: "landscape",
                    rounded: ""
                  })
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-3" }, [
                  createVNode(_component_ImageReveal, {
                    src: "https://images.unsplash.com/photo-1534938665420-4193effeacc4?auto=format&fit=crop&w=900&q=85",
                    alt: "Formaggi artigianali",
                    ratio: "square",
                    rounded: ""
                  })
                ]),
                createVNode("div", { class: "col-span-12 md:col-span-4" }, [
                  createVNode(_component_ImageReveal, {
                    src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=85",
                    alt: "Casoncelli alla bergamasca",
                    ratio: "landscape",
                    rounded: ""
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="relative bg-wine text-cream py-section-lg overflow-hidden grain"><div class="container-x text-center max-w-4xl mx-auto">`);
      _push(ssrRenderComponent(_component_AnimatedText, {
        as: "h2",
        class: "font-serif font-light text-fluid-6xl leading-tightest tracking-tightest mb-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home.cta.title"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home.cta.title")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-fluid-lg opacity-90 mb-12 max-w-lg mx-auto">${ssrInterpolate(_ctx.$t("home.cta.description"))}</p>`);
      _push(ssrRenderComponent(_component_AppButton, {
        to: unref(localePath)("/prenotazioni"),
        variant: "outline",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home.cta.book"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home.cta.book")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BUHrlKO2.js.map
