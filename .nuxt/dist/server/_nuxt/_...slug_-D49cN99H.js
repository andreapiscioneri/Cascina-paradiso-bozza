import { _ as __nuxt_component_0 } from "./nuxt-link-Bzlihrby.js";
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { setResponseStatus } from "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/h3/dist/index.mjs";
import { u as useI18n, j as useLocalePath, f as useRequestEvent, a as useHead } from "../server.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/ufo/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/defu/dist/defu.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/hookable/dist/index.mjs";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const localePath = useLocalePath();
    const event = useRequestEvent();
    if (event) {
      setResponseStatus(event, 404, "Page not found");
    }
    useHead({
      title: () => `${t("errorPage.seoTitle")} — ${t("brand.name")}`,
      meta: [
        { name: "robots", content: "noindex, nofollow" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-[100svh] w-full overflow-hidden bg-noir text-cream" }, _attrs))}><div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1514516345957-556ca7d90a29?auto=format&amp;fit=crop&amp;w=2400&amp;q=85" alt="Fuoco acceso" class="w-full h-full object-cover"><div class="absolute inset-0" style="${ssrRenderStyle({ "background": "linear-gradient(180deg, rgba(15,15,15,0.9) 0%, rgba(15,15,15,0.82) 40%, rgba(15,15,15,0.995) 100%)" })}"></div></div><section class="relative z-10 min-h-[100svh] container-x flex flex-col items-center justify-center text-center py-20"><p class="eyebrow text-wine mb-6">${ssrInterpolate(unref(t)("errorPage.code"))}</p><h1 class="font-serif font-light text-fluid-6xl leading-tightest tracking-tightest max-w-3xl text-balance">${ssrInterpolate(unref(t)("errorPage.titleLine1"))}<br><span class="italic text-wine">${ssrInterpolate(unref(t)("errorPage.titleHighlight"))}</span></h1><p class="mt-6 text-fluid-base md:text-fluid-lg opacity-80 max-w-2xl leading-relaxed">${ssrInterpolate(unref(t)("errorPage.descriptionStart"))} <span class="md:whitespace-nowrap">${ssrInterpolate(unref(t)("errorPage.descriptionCta"))}</span></p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "mt-8 inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-fluid-sm uppercase tracking-eyebrow transition hover:bg-white/10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("errorPage.backHome"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("errorPage.backHome")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_...slug_-D49cN99H.js.map
