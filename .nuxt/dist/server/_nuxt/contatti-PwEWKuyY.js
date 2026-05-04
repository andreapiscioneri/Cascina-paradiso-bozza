import { _ as _sfc_main$1 } from "./SectionWrapper-tC4CnWE5.js";
import { _ as _sfc_main$2 } from "./AnimatedText-B0reH5hT.js";
import { _ as _sfc_main$3 } from "./AppButton-DNzz4bE5.js";
import { defineComponent, withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { u as useI18n, a as useHead, k as useSchemaOrg } from "../server.mjs";
import { defineLocalBusiness } from "@unhead/schema-org/vue";
import "./useSplitReveal-BZWnnGc4.js";
import "split-type";
import "./nuxt-link-Bzlihrby.js";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/ufo/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/defu/dist/defu.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/hookable/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/unctx/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/h3/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/klona/dist/index.mjs";
import "vue-router";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/@unhead/vue/dist/index.mjs";
import "@unhead/addons";
import "unhead/plugins";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/scule/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/cookie-es/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/destr/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/ohash/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/devalue/index.js";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/radix3/dist/index.mjs";
import "@vue/devtools-api";
const whatsappNumber = "393519152082";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contatti",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: () => `${t("nav.contatti")} — ${t("brand.name")}`,
      meta: [
        { name: "description", content: () => t("contatti.book.description") }
      ]
    });
    useSchemaOrg([
      defineLocalBusiness({
        name: "Cascina Paradiso",
        image: "/images/og-home.jpg",
        telephone: "+39 351 915 2082",
        email: "info@cascinaparadiso.it",
        priceRange: "€€",
        servesCuisine: ["Italian", "Bergamasca", "Grill"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Via Guglielmo Ghilardi, 20",
          addressLocality: "Alzano Lombardo",
          postalCode: "24022",
          addressRegion: "BG",
          addressCountry: "IT"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 45.7295,
          longitude: 9.7258
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "12:00",
            closes: "14:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "19:00",
            closes: "22:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday"],
            opens: "12:00",
            closes: "15:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday"],
            opens: "19:00",
            closes: "23:00"
          }
        ]
      })
    ]);
    const mapQuery = encodeURIComponent("Via Guglielmo Ghilardi 20, 24022 Alzano Lombardo BG");
    const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
    const whatsappMessage = encodeURIComponent("Ciao Cascina Paradiso, vorrei prenotare un tavolo.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionWrapper = _sfc_main$1;
      const _component_AnimatedText = _sfc_main$2;
      const _component_AppButton = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir text-cream"><div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&amp;fit=crop&amp;w=2400&amp;q=85" alt="La cascina — Cascina Paradiso, Alzano Lombardo" class="w-full h-full object-cover" fetchpriority="high"><div class="absolute inset-0" style="${ssrRenderStyle({ "background": "linear-gradient(180deg, rgba(15,15,15,0.9) 0%, rgba(15,15,15,0.8) 40%, rgba(15,15,15,0.995) 100%)" })}"></div></div><div class="relative z-10 h-full container-x flex flex-col justify-end pb-20 md:pb-28"><div class="eyebrow mb-6 text-cream/80"><span class="inline-block w-8 h-px bg-cream/60 mr-3 align-middle"></span> ${ssrInterpolate(_ctx.$t("contatti.hero.eyebrow"))}</div><h1 class="font-serif font-light text-fluid-7xl leading-tightest tracking-tightest max-w-5xl text-balance text-cream">${ssrInterpolate(_ctx.$t("contatti.hero.title"))}</h1><p class="mt-8 max-w-xl text-fluid-lg opacity-90 leading-relaxed">${ssrInterpolate(_ctx.$t("contatti.hero.subtitle"))}</p></div></section>`);
      _push(ssrRenderComponent(_component_SectionWrapper, {
        tone: "transparent",
        padding: "default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6"${_scopeId}><div data-reveal${_scopeId}><p class="eyebrow text-wine mb-4"${_scopeId}>${ssrInterpolate(_ctx.$t("contatti.address.title"))}</p><p class="font-serif text-fluid-xl leading-snug"${_scopeId}>${ssrInterpolate(_ctx.$t("contatti.address.line1"))}<br${_scopeId}> ${ssrInterpolate(_ctx.$t("contatti.address.line2"))}</p><a${ssrRenderAttr("href", `https://www.google.com/maps?q=${unref(mapQuery)}`)} target="_blank" rel="noopener" class="mt-4 inline-block line-hover text-fluid-sm"${_scopeId}>${ssrInterpolate(_ctx.$t("cta.directions"))} → </a></div><div data-reveal${_scopeId}><p class="eyebrow text-wine mb-4"${_scopeId}>${ssrInterpolate(_ctx.$t("contatti.phone.title"))}</p><a href="tel:+393519152082" class="font-serif text-fluid-2xl leading-snug block line-hover"${_scopeId}>${ssrInterpolate(_ctx.$t("contatti.phone.value"))}</a><a href="tel:+393519152082" class="mt-4 inline-block line-hover text-fluid-sm"${_scopeId}>${ssrInterpolate(_ctx.$t("cta.call"))} → </a></div><div data-reveal class="md:col-span-2 lg:col-span-2"${_scopeId}><p class="eyebrow text-wine mb-4"${_scopeId}>${ssrInterpolate(_ctx.$t("contatti.hours.title"))}</p><dl class="space-y-3 font-serif text-fluid-lg"${_scopeId}><div class="flex flex-col md:flex-row md:justify-between gap-1"${_scopeId}><dt class="italic opacity-70"${_scopeId}>${ssrInterpolate(_ctx.$t("contatti.hours.weekdays"))}</dt><dd${_scopeId}>${ssrInterpolate(_ctx.$t("contatti.hours.weekdaysValue"))}</dd></div><div class="flex flex-col md:flex-row md:justify-between gap-1"${_scopeId}><dt class="italic opacity-70"${_scopeId}>${ssrInterpolate(_ctx.$t("contatti.hours.weekend"))}</dt><dd${_scopeId}>${ssrInterpolate(_ctx.$t("contatti.hours.weekendValue"))}</dd></div><div class="pt-2 border-t border-[color:var(--line)] text-fluid-sm opacity-60"${_scopeId}>${ssrInterpolate(_ctx.$t("contatti.hours.closed"))}</div></dl></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6" }, [
                createVNode("div", { "data-reveal": "" }, [
                  createVNode("p", { class: "eyebrow text-wine mb-4" }, toDisplayString(_ctx.$t("contatti.address.title")), 1),
                  createVNode("p", { class: "font-serif text-fluid-xl leading-snug" }, [
                    createTextVNode(toDisplayString(_ctx.$t("contatti.address.line1")), 1),
                    createVNode("br"),
                    createTextVNode(" " + toDisplayString(_ctx.$t("contatti.address.line2")), 1)
                  ]),
                  createVNode("a", {
                    href: `https://www.google.com/maps?q=${unref(mapQuery)}`,
                    target: "_blank",
                    rel: "noopener",
                    class: "mt-4 inline-block line-hover text-fluid-sm"
                  }, toDisplayString(_ctx.$t("cta.directions")) + " → ", 9, ["href"])
                ]),
                createVNode("div", { "data-reveal": "" }, [
                  createVNode("p", { class: "eyebrow text-wine mb-4" }, toDisplayString(_ctx.$t("contatti.phone.title")), 1),
                  createVNode("a", {
                    href: "tel:+393519152082",
                    class: "font-serif text-fluid-2xl leading-snug block line-hover"
                  }, toDisplayString(_ctx.$t("contatti.phone.value")), 1),
                  createVNode("a", {
                    href: "tel:+393519152082",
                    class: "mt-4 inline-block line-hover text-fluid-sm"
                  }, toDisplayString(_ctx.$t("cta.call")) + " → ", 1)
                ]),
                createVNode("div", {
                  "data-reveal": "",
                  class: "md:col-span-2 lg:col-span-2"
                }, [
                  createVNode("p", { class: "eyebrow text-wine mb-4" }, toDisplayString(_ctx.$t("contatti.hours.title")), 1),
                  createVNode("dl", { class: "space-y-3 font-serif text-fluid-lg" }, [
                    createVNode("div", { class: "flex flex-col md:flex-row md:justify-between gap-1" }, [
                      createVNode("dt", { class: "italic opacity-70" }, toDisplayString(_ctx.$t("contatti.hours.weekdays")), 1),
                      createVNode("dd", null, toDisplayString(_ctx.$t("contatti.hours.weekdaysValue")), 1)
                    ]),
                    createVNode("div", { class: "flex flex-col md:flex-row md:justify-between gap-1" }, [
                      createVNode("dt", { class: "italic opacity-70" }, toDisplayString(_ctx.$t("contatti.hours.weekend")), 1),
                      createVNode("dd", null, toDisplayString(_ctx.$t("contatti.hours.weekendValue")), 1)
                    ]),
                    createVNode("div", { class: "pt-2 border-t border-[color:var(--line)] text-fluid-sm opacity-60" }, toDisplayString(_ctx.$t("contatti.hours.closed")), 1)
                  ])
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
            _push2(`<div class="grid md:grid-cols-2 gap-10 items-center p-10 md:p-16 rounded-3xl bg-cream-soft dark:bg-noir-50 border border-[color:var(--line)]"${_scopeId}><div${_scopeId}><p class="eyebrow text-wine mb-4"${_scopeId}>${ssrInterpolate(_ctx.$t("contatti.book.title"))}</p>`);
            _push2(ssrRenderComponent(_component_AnimatedText, {
              as: "h2",
              class: "font-serif text-fluid-4xl leading-tightest"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("contatti.book.description"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("contatti.book.description")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col sm:flex-row gap-4 md:justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AppButton, {
              href: whatsappUrl,
              external: "",
              variant: "solid",
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("cta.bookWhatsapp"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("cta.bookWhatsapp")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_AppButton, {
              href: `https://www.google.com/maps?q=${unref(mapQuery)}`,
              external: "",
              variant: "outline",
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("cta.directions"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("cta.directions")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid md:grid-cols-2 gap-10 items-center p-10 md:p-16 rounded-3xl bg-cream-soft dark:bg-noir-50 border border-[color:var(--line)]" }, [
                createVNode("div", null, [
                  createVNode("p", { class: "eyebrow text-wine mb-4" }, toDisplayString(_ctx.$t("contatti.book.title")), 1),
                  createVNode(_component_AnimatedText, {
                    as: "h2",
                    class: "font-serif text-fluid-4xl leading-tightest"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("contatti.book.description")), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex flex-col sm:flex-row gap-4 md:justify-end" }, [
                  createVNode(_component_AppButton, {
                    href: whatsappUrl,
                    external: "",
                    variant: "solid",
                    size: "lg"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("cta.bookWhatsapp")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_AppButton, {
                    href: `https://www.google.com/maps?q=${unref(mapQuery)}`,
                    external: "",
                    variant: "outline",
                    size: "lg"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("cta.directions")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="w-full h-[60vh] min-h-[480px] bg-cream-200 dark:bg-noir-50 relative overflow-hidden"><iframe${ssrRenderAttr("src", mapSrc)} title="Cascina Paradiso — Google Maps" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="absolute inset-0 w-full h-full border-0" style="${ssrRenderStyle({ "filter": "grayscale(0.2) contrast(1.05)" })}"></iframe></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contatti.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contatti-PwEWKuyY.js.map
