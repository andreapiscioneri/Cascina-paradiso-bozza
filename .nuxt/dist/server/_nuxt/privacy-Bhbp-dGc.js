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
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: () => `${t("legal.privacy.seoTitle")} — ${t("brand.name")}`,
      meta: [
        { name: "description", content: () => t("legal.privacy.seoDescription") }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-2fbb74e3><section class="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir text-cream" data-v-2fbb74e3><div class="absolute inset-0" data-v-2fbb74e3><img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&amp;fit=crop&amp;w=2400&amp;q=85" alt="Cascina Paradiso" class="w-full h-full object-cover opacity-42" fetchpriority="high" data-v-2fbb74e3><div class="absolute inset-0" style="${ssrRenderStyle({ "background": "linear-gradient(180deg, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.995) 100%)" })}" data-v-2fbb74e3></div></div><div class="relative z-10 h-full container-x flex flex-col justify-end pb-20 md:pb-28" data-v-2fbb74e3><div class="eyebrow mb-6 text-cream/80" data-v-2fbb74e3><span class="inline-block w-8 h-px bg-cream/60 mr-3 align-middle" data-v-2fbb74e3></span> ${ssrInterpolate(_ctx.$t("legal.eyebrow"))}</div><h1 class="font-serif font-light text-fluid-7xl leading-tightest tracking-tightest max-w-5xl text-balance text-cream" data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.heroTitle"))}</h1><p class="mt-8 max-w-xl text-fluid-lg opacity-90 leading-relaxed" data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.heroSubtitle"))}</p></div></section><section class="container-x py-section max-w-3xl mx-auto" data-v-2fbb74e3><div class="prose-legal" data-v-2fbb74e3><p class="text-fluid-sm opacity-60 mb-12" data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.lastUpdate"))}</p><h2 data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.ownerTitle"))}</h2><p data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.ownerLine1"))}<br data-v-2fbb74e3><strong data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.ownerLine2"))}</strong><br data-v-2fbb74e3> ${ssrInterpolate(_ctx.$t("legal.privacy.ownerLine3"))}<br data-v-2fbb74e3> E-mail: <a href="mailto:info@cascinaparadiso.it" data-v-2fbb74e3>info@cascinaparadiso.it</a><br data-v-2fbb74e3> Tel: <a href="tel:+393519152082" data-v-2fbb74e3>+39 351 915 2082</a></p><h2 data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.collectedTitle"))}</h2><p data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.collectedIntro"))}</p><ul data-v-2fbb74e3><li data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.collectedNav"))}</li><li data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.collectedDirect"))}</li></ul><p data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.collectedNote"))}</p><h2 data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.legalBasisTitle"))}</h2><p data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.legalBasisBody"))}</p><h2 data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.storageTitle"))}</h2><p data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.storageBody"))}</p><h2 data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.rightsTitle"))}</h2><p data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.rightsBody"))} <a href="mailto:info@cascinaparadiso.it" data-v-2fbb74e3>info@cascinaparadiso.it</a>. </p><p data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.rightsAuthority"))} (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener" data-v-2fbb74e3>www.garanteprivacy.it</a>). </p><h2 data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.thirdPartyTitle"))}</h2><p data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.thirdPartyBody"))}</p><h2 data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.cookieTitle"))}</h2><p data-v-2fbb74e3>${ssrInterpolate(_ctx.$t("legal.privacy.cookieBody"))} `);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2fbb74e3"]]);
export {
  privacy as default
};
//# sourceMappingURL=privacy-Bhbp-dGc.js.map
