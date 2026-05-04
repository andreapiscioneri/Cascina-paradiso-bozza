import { _ as _sfc_main$1 } from "./SectionWrapper-tC4CnWE5.js";
import { _ as _sfc_main$2 } from "./AppButton-DNzz4bE5.js";
import { defineComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useI18n, a as useHead } from "../server.mjs";
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
import "@unhead/schema-org/vue";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/devalue/index.js";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/radix3/dist/index.mjs";
import "@vue/devtools-api";
const whatsappNumber = "393519152082";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "prenotazioni",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const whatsappMessage = encodeURIComponent("Ciao Cascina Paradiso, vorrei prenotare un tavolo.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    useHead({
      title: () => `${t("prenotazioni.hero.title")} — ${t("brand.name")}`,
      meta: [
        { name: "description", content: () => t("prenotazioni.intro") }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionWrapper = _sfc_main$1;
      const _component_AppButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir text-cream"><div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&amp;fit=crop&amp;w=2400&amp;q=85" alt="Prenotazioni tavolo da Cascina Paradiso" class="w-full h-full object-cover" fetchpriority="high"><div class="absolute inset-0" style="${ssrRenderStyle({ "background": "linear-gradient(180deg, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.82) 40%, rgba(15,15,15,0.995) 100%)" })}"></div></div><div class="relative z-10 h-full container-x flex flex-col justify-end pb-20 md:pb-28"><div class="eyebrow mb-6 text-cream/80"><span class="inline-block w-8 h-px bg-cream/60 mr-3 align-middle"></span> ${ssrInterpolate(_ctx.$t("prenotazioni.hero.eyebrow"))}</div><h1 class="font-serif font-light text-fluid-7xl leading-tightest tracking-tightest max-w-5xl text-balance text-cream">${ssrInterpolate(_ctx.$t("prenotazioni.hero.title"))}</h1><p class="mt-8 max-w-xl text-fluid-lg opacity-90 leading-relaxed">${ssrInterpolate(_ctx.$t("prenotazioni.hero.subtitle"))}</p></div></section>`);
      _push(ssrRenderComponent(_component_SectionWrapper, {
        tone: "transparent",
        padding: "default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-start"${_scopeId}><div${_scopeId}><p class="text-fluid-lg opacity-85 leading-relaxed max-w-2xl"${_scopeId}>${ssrInterpolate(_ctx.$t("prenotazioni.intro"))}</p><div class="mt-10 p-8 rounded-3xl border border-[color:var(--line)] bg-cream-soft dark:bg-noir-50"${_scopeId}><p class="eyebrow text-wine mb-4"${_scopeId}>${ssrInterpolate(_ctx.$t("prenotazioni.steps.title"))}</p><ol class="space-y-4 text-fluid-base opacity-85 leading-relaxed list-decimal pl-5"${_scopeId}><li${_scopeId}>${ssrInterpolate(_ctx.$t("prenotazioni.steps.one"))}</li><li${_scopeId}>${ssrInterpolate(_ctx.$t("prenotazioni.steps.two"))}</li><li${_scopeId}>${ssrInterpolate(_ctx.$t("prenotazioni.steps.three"))}</li></ol><p class="mt-6 text-fluid-sm opacity-70"${_scopeId}>${ssrInterpolate(_ctx.$t("prenotazioni.note"))}</p></div></div><div class="lg:sticky lg:top-[calc(var(--nav-h)+2rem)] p-8 rounded-3xl border border-[color:var(--line)] bg-noir text-cream grain"${_scopeId}><p class="eyebrow text-cream/70 mb-4"${_scopeId}>WhatsApp</p><p class="font-serif text-fluid-3xl leading-tightest mb-2"${_scopeId}>351 915 2082</p><p class="text-fluid-sm opacity-75 mb-8"${_scopeId}>Risposta rapida in orario di servizio.</p>`);
            _push2(ssrRenderComponent(_component_AppButton, {
              href: whatsappUrl,
              external: "",
              variant: "outline",
              size: "lg",
              class: "w-full"
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
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-start" }, [
                createVNode("div", null, [
                  createVNode("p", { class: "text-fluid-lg opacity-85 leading-relaxed max-w-2xl" }, toDisplayString(_ctx.$t("prenotazioni.intro")), 1),
                  createVNode("div", { class: "mt-10 p-8 rounded-3xl border border-[color:var(--line)] bg-cream-soft dark:bg-noir-50" }, [
                    createVNode("p", { class: "eyebrow text-wine mb-4" }, toDisplayString(_ctx.$t("prenotazioni.steps.title")), 1),
                    createVNode("ol", { class: "space-y-4 text-fluid-base opacity-85 leading-relaxed list-decimal pl-5" }, [
                      createVNode("li", null, toDisplayString(_ctx.$t("prenotazioni.steps.one")), 1),
                      createVNode("li", null, toDisplayString(_ctx.$t("prenotazioni.steps.two")), 1),
                      createVNode("li", null, toDisplayString(_ctx.$t("prenotazioni.steps.three")), 1)
                    ]),
                    createVNode("p", { class: "mt-6 text-fluid-sm opacity-70" }, toDisplayString(_ctx.$t("prenotazioni.note")), 1)
                  ])
                ]),
                createVNode("div", { class: "lg:sticky lg:top-[calc(var(--nav-h)+2rem)] p-8 rounded-3xl border border-[color:var(--line)] bg-noir text-cream grain" }, [
                  createVNode("p", { class: "eyebrow text-cream/70 mb-4" }, "WhatsApp"),
                  createVNode("p", { class: "font-serif text-fluid-3xl leading-tightest mb-2" }, "351 915 2082"),
                  createVNode("p", { class: "text-fluid-sm opacity-75 mb-8" }, "Risposta rapida in orario di servizio."),
                  createVNode(_component_AppButton, {
                    href: whatsappUrl,
                    external: "",
                    variant: "outline",
                    size: "lg",
                    class: "w-full"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("cta.bookWhatsapp")), 1)
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/prenotazioni.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=prenotazioni-DraRtMg4.js.map
