import { _ as _sfc_main$2 } from "./ImageReveal-DAJIIrzh.js";
import { _ as _sfc_main$3 } from "./AnimatedText-B0reH5hT.js";
import { defineComponent, mergeProps, useSSRContext, withCtx, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { u as useI18n, a as useHead } from "../server.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/defu/dist/defu.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/ufo/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/h3/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/hookable/dist/index.mjs";
import "./useSplitReveal-BZWnnGc4.js";
import "split-type";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MenuItem",
  __ssrInlineRender: true,
  props: {
    name: {},
    desc: {},
    price: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        "data-reveal": "",
        class: "group flex items-start justify-between gap-6 py-6 border-b border-[color:var(--line)] last:border-0"
      }, _attrs))}><div class="flex-1"><h4 class="font-serif text-fluid-xl mb-1 transition-colors duration-400 group-hover:text-wine">${ssrInterpolate(__props.name)}</h4><p class="text-fluid-sm opacity-70 max-w-prose leading-relaxed">${ssrInterpolate(__props.desc)}</p></div><span class="font-serif text-fluid-xl shrink-0 tabular-nums after:content-[&#39;€&#39;] after:text-fluid-base after:opacity-60 after:ml-0.5">${ssrInterpolate(__props.price)}</span></article>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MenuItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "menu",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm, rt } = useI18n();
    useHead({
      title: () => `${t("menu.hero.title")} — ${t("brand.name")}`,
      meta: [
        { name: "description", content: () => t("menu.intro") }
      ]
    });
    const categories = [
      {
        key: "antipasti",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=85"
      },
      {
        key: "primi",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=85"
      },
      {
        key: "brace",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=85"
      },
      {
        key: "contorni",
        image: "https://images.unsplash.com/photo-1518291344630-4857135fb581?auto=format&fit=crop&w=1200&q=85"
      },
      {
        key: "dolci",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=85"
      }
    ];
    const getItems = (key) => {
      const items = tm(`menu.items.${key}`);
      return Array.isArray(items) ? items.map((item) => ({
        name: rt(item.name),
        desc: rt(item.desc),
        price: rt(item.price)
      })) : [];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ImageReveal = _sfc_main$2;
      const _component_AnimatedText = _sfc_main$3;
      const _component_MenuItem = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir text-cream"><div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&amp;fit=crop&amp;w=2400&amp;q=85" alt="Carne alla brace — Menu Cascina Paradiso" class="w-full h-full object-cover" fetchpriority="high"><div class="absolute inset-0" style="${ssrRenderStyle({ "background": "linear-gradient(180deg, rgba(15,15,15,0.9) 0%, rgba(15,15,15,0.8) 40%, rgba(15,15,15,0.995) 100%)" })}"></div></div><div class="relative z-10 h-full container-x flex flex-col justify-end pb-20 md:pb-28"><div class="eyebrow mb-6 text-cream/80"><span class="inline-block w-8 h-px bg-cream/60 mr-3 align-middle"></span> ${ssrInterpolate(_ctx.$t("menu.hero.eyebrow"))}</div><h1 class="font-serif font-light text-fluid-7xl leading-tightest tracking-tightest max-w-5xl text-balance text-cream">${ssrInterpolate(_ctx.$t("menu.hero.title"))}</h1><p class="mt-8 max-w-xl text-fluid-lg opacity-90 leading-relaxed">${ssrInterpolate(_ctx.$t("menu.hero.subtitle"))}</p></div></section><div class="container-x space-y-section-lg pb-section-lg"><!--[-->`);
      ssrRenderList(categories, (cat, i) => {
        _push(`<section class="grid lg:grid-cols-[1fr_1.3fr] gap-10 md:gap-20 items-start"><div class="${ssrRenderClass([i % 2 === 1 ? "lg:order-2" : "", "lg:sticky lg:top-[calc(var(--nav-h)+3rem)]"])}">`);
        _push(ssrRenderComponent(_component_ImageReveal, {
          src: cat.image,
          alt: _ctx.$t(`menu.categories.${cat.key}`),
          ratio: i % 2 === 0 ? "portrait" : "landscape",
          rounded: ""
        }, null, _parent));
        _push(`<span class="eyebrow text-wine mt-6 block">0${ssrInterpolate(i + 1)} — ${ssrInterpolate(_ctx.$t(`menu.categories.${cat.key}`))}</span></div><div class="${ssrRenderClass(i % 2 === 1 ? "lg:order-1" : "")}">`);
        _push(ssrRenderComponent(_component_AnimatedText, {
          as: "h2",
          class: "font-serif text-fluid-5xl leading-tightest tracking-tightest mb-10"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(`menu.categories.${cat.key}`))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(`menu.categories.${cat.key}`)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div><!--[-->`);
        ssrRenderList(getItems(cat.key), (item, idx) => {
          _push(ssrRenderComponent(_component_MenuItem, {
            key: `${cat.key}-${idx}`,
            name: item.name,
            desc: item.desc,
            price: item.price
          }, null, _parent));
        });
        _push(`<!--]--></div></div></section>`);
      });
      _push(`<!--]--></div><section class="container-x pb-section"><div class="max-w-3xl mx-auto text-center border-t border-[color:var(--line)] pt-14"><p class="eyebrow text-wine mb-4">* Nota</p><p class="text-fluid-base opacity-70 leading-relaxed">${ssrInterpolate(_ctx.$t("menu.note"))}</p></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=menu-xSyGFQ6j.js.map
