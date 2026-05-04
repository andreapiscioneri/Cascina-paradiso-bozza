import { _ as _sfc_main$3 } from "./SectionWrapper-tC4CnWE5.js";
import { _ as _sfc_main$2 } from "./ImageReveal-DAJIIrzh.js";
import { defineComponent, ref, mergeProps, useSSRContext, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { u as useReveal } from "./useReveal-BtUQoMKJ.js";
import { u as useI18n, a as useHead } from "../server.mjs";
import { u as useSplitReveal } from "./useSplitReveal-BZWnnGc4.js";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/defu/dist/defu.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/ufo/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/h3/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/hookable/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/unctx/dist/index.mjs";
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
import "split-type";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TimelineItem",
  __ssrInlineRender: true,
  props: {
    year: {},
    title: {},
    body: {},
    image: {},
    imageAlt: {},
    align: { default: "left" }
  },
  setup(__props) {
    const root = ref(null);
    useReveal(root, { stagger: 0.1 });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ImageReveal = _sfc_main$2;
      _push(`<article${ssrRenderAttrs(mergeProps({
        ref_key: "root",
        ref: root,
        class: "grid md:grid-cols-2 gap-10 md:gap-20 items-center py-20 border-t border-[color:var(--line)]"
      }, _attrs))}><div data-reveal class="${ssrRenderClass(__props.align === "right" ? "md:order-2" : "")}"><span class="eyebrow text-wine">${ssrInterpolate(__props.year)}</span><h3 class="font-serif text-fluid-4xl mt-4 mb-6 leading-tightest">${ssrInterpolate(__props.title)}</h3><p class="text-fluid-base opacity-80 leading-relaxed max-w-prose">${ssrInterpolate(__props.body)}</p></div>`);
      if (__props.image) {
        _push(`<div data-reveal class="${ssrRenderClass(__props.align === "right" ? "md:order-1" : "")}">`);
        _push(ssrRenderComponent(_component_ImageReveal, {
          src: __props.image,
          alt: __props.imageAlt || __props.title,
          ratio: "portrait",
          rounded: ""
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TimelineItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "storia",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: () => `${t("storia.hero.title")} — ${t("brand.name")}`,
      meta: [
        { name: "description", content: () => t("storia.intro") }
      ]
    });
    const timelineEntries = [
      {
        key: "y1972",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=85",
        alt: "Bottiglie e cantina antica"
      },
      {
        key: "y1985",
        image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=1200&q=85",
        alt: "Camino a legna acceso"
      },
      {
        key: "y2005",
        image: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?auto=format&fit=crop&w=1200&q=85",
        alt: "Sala della trattoria"
      },
      {
        key: "y2024",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
        alt: "Ingresso della cascina oggi"
      }
    ];
    const quoteRef = ref(null);
    useSplitReveal(quoteRef, { type: "words", stagger: 0.06, start: "top 80%" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionWrapper = _sfc_main$3;
      const _component_TimelineItem = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir text-cream"><div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&amp;fit=crop&amp;w=2400&amp;q=85" alt="Cantina storica — Cascina Paradiso" class="w-full h-full object-cover" fetchpriority="high"><div class="absolute inset-0" style="${ssrRenderStyle({ "background": "linear-gradient(180deg, rgba(15,15,15,0.9) 0%, rgba(15,15,15,0.8) 40%, rgba(15,15,15,0.995) 100%)" })}"></div></div><div class="relative z-10 h-full container-x flex flex-col justify-end pb-20 md:pb-28"><div class="eyebrow mb-6 text-cream/80"><span class="inline-block w-8 h-px bg-cream/60 mr-3 align-middle"></span> ${ssrInterpolate(_ctx.$t("storia.hero.eyebrow"))}</div><h1 class="font-serif font-light text-fluid-7xl leading-tightest tracking-tightest max-w-5xl text-balance text-cream">${ssrInterpolate(_ctx.$t("storia.hero.title"))}</h1><p class="mt-8 max-w-xl text-fluid-lg opacity-90 leading-relaxed">${ssrInterpolate(_ctx.$t("storia.hero.subtitle"))}</p></div></section>`);
      _push(ssrRenderComponent(_component_SectionWrapper, {
        tone: "transparent",
        padding: "default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid lg:grid-cols-[1fr_2fr] gap-12"${_scopeId}><span class="eyebrow opacity-60"${_scopeId}>${ssrInterpolate(_ctx.$t("brand.since"))}</span><p class="font-serif text-fluid-3xl leading-[1.25] max-w-3xl"${_scopeId}>${ssrInterpolate(_ctx.$t("storia.intro"))}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "grid lg:grid-cols-[1fr_2fr] gap-12" }, [
                createVNode("span", { class: "eyebrow opacity-60" }, toDisplayString(_ctx.$t("brand.since")), 1),
                createVNode("p", { class: "font-serif text-fluid-3xl leading-[1.25] max-w-3xl" }, toDisplayString(_ctx.$t("storia.intro")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_SectionWrapper, {
        tone: "transparent",
        padding: "none",
        class: "pb-section-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(timelineEntries, (entry, i) => {
              _push2(ssrRenderComponent(_component_TimelineItem, {
                key: entry.key,
                year: _ctx.$t(`storia.timeline.${entry.key}.year`),
                title: _ctx.$t(`storia.timeline.${entry.key}.title`),
                body: _ctx.$t(`storia.timeline.${entry.key}.body`),
                image: entry.image,
                "image-alt": entry.alt,
                align: i % 2 === 0 ? "left" : "right"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(timelineEntries, (entry, i) => {
                return createVNode(_component_TimelineItem, {
                  key: entry.key,
                  year: _ctx.$t(`storia.timeline.${entry.key}.year`),
                  title: _ctx.$t(`storia.timeline.${entry.key}.title`),
                  body: _ctx.$t(`storia.timeline.${entry.key}.body`),
                  image: entry.image,
                  "image-alt": entry.alt,
                  align: i % 2 === 0 ? "left" : "right"
                }, null, 8, ["year", "title", "body", "image", "image-alt", "align"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="relative bg-noir text-cream py-section-lg overflow-hidden grain"><div class="container-x max-w-5xl mx-auto text-center"><span class="font-serif text-fluid-7xl text-wine/60 leading-none block mb-4">&quot;</span><blockquote class="font-serif italic text-fluid-5xl leading-[1.15] tracking-tightest">${ssrInterpolate(_ctx.$t("storia.quote"))}</blockquote><p class="eyebrow mt-10 opacity-60">${ssrInterpolate(_ctx.$t("storia.quoteAuthor"))}</p></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/storia.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=storia-Bpkh30ae.js.map
