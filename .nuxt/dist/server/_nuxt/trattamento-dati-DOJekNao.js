import { _ as __nuxt_component_0 } from "./nuxt-link-Bzlihrby.js";
import { defineComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useI18n, a as useHead } from "../server.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "trattamento-dati",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: () => `${t("legal.data.seoTitle")} — ${t("brand.name")}`,
      meta: [
        { name: "description", content: () => t("legal.data.seoDescription") }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1156a7d1><section class="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir text-cream" data-v-1156a7d1><div class="absolute inset-0" data-v-1156a7d1><img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&amp;fit=crop&amp;w=2400&amp;q=85" alt="Trattamento dati — Cascina Paradiso" class="w-full h-full object-cover opacity-46" fetchpriority="high" data-v-1156a7d1><div class="absolute inset-0" style="${ssrRenderStyle({ "background": "linear-gradient(180deg, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.995) 100%)" })}" data-v-1156a7d1></div></div><div class="relative z-10 h-full container-x flex flex-col justify-end pb-20 md:pb-28" data-v-1156a7d1><div class="eyebrow mb-6 text-cream/80" data-v-1156a7d1><span class="inline-block w-8 h-px bg-cream/60 mr-3 align-middle" data-v-1156a7d1></span> ${ssrInterpolate(_ctx.$t("legal.eyebrow"))}</div><h1 class="font-serif font-light text-fluid-7xl leading-tightest tracking-tightest max-w-5xl text-balance text-cream" data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.data.heroTitle"))}</h1><p class="mt-8 max-w-xl text-fluid-lg opacity-90 leading-relaxed" data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.data.heroSubtitle"))}</p></div></section><section class="container-x py-section max-w-3xl mx-auto" data-v-1156a7d1><div class="prose-legal" data-v-1156a7d1><p class="text-fluid-sm opacity-60 mb-12" data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.lastUpdate"))}</p><h2 data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.data.purposeTitle"))}</h2><p data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.data.purposeBody"))}</p><h2 data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.data.typesTitle"))}</h2><ul data-v-1156a7d1><li data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.data.typesOne"))}</li><li data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.data.typesTwo"))}</li><li data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.data.typesThree"))}</li></ul><h2 data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.data.methodsTitle"))}</h2><p data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.data.methodsBody"))}</p><h2 data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.data.retentionTitle"))}</h2><p data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.data.retentionBody"))}</p><h2 data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.data.sharingTitle"))}</h2><p data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.data.sharingBody"))}</p><h2 data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.data.rightsTitle"))}</h2><p data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.data.rightsBody"))} <a href="mailto:info@cascinaparadiso.it" data-v-1156a7d1>info@cascinaparadiso.it</a>. </p><h2 data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.data.referencesTitle"))}</h2><p data-v-1156a7d1>${ssrInterpolate(_ctx.$t("legal.data.referencesBody"))} ${ssrInterpolate(" ")} `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "underline underline-offset-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` ${ssrInterpolate(" ")}${ssrInterpolate(_ctx.$t("legal.data.and"))}${ssrInterpolate(" ")} `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cookie",
        class: "underline underline-offset-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cookie Policy`);
          } else {
            return [
              createTextVNode("Cookie Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. </p></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/trattamento-dati.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const trattamentoDati = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1156a7d1"]]);
export {
  trattamentoDati as default
};
//# sourceMappingURL=trattamento-dati-DOJekNao.js.map
