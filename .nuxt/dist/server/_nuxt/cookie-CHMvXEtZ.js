import { defineComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { u as useI18n, a as useHead } from "../server.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/hookable/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/unctx/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/h3/dist/index.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/defu/dist/defu.mjs";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/klona/dist/index.mjs";
import "vue-router";
import "/Users/andreapiscioneri/Repo/Cascina-paradiso-bozza/node_modules/ufo/dist/index.mjs";
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
  __name: "cookie",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: () => `${t("legal.cookie.seoTitle")} — ${t("brand.name")}`,
      meta: [
        { name: "description", content: () => t("legal.cookie.seoDescription") }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-aa4fee60><section class="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir text-cream" data-v-aa4fee60><div class="absolute inset-0" data-v-aa4fee60><img src="https://images.unsplash.com/photo-1495195134817-aeb325a55b65?auto=format&amp;fit=crop&amp;w=2400&amp;q=85" alt="Cascina Paradiso" class="w-full h-full object-cover opacity-48" fetchpriority="high" data-v-aa4fee60><div class="absolute inset-0" style="${ssrRenderStyle({ "background": "linear-gradient(180deg, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.995) 100%)" })}" data-v-aa4fee60></div></div><div class="relative z-10 h-full container-x flex flex-col justify-end pb-20 md:pb-28" data-v-aa4fee60><div class="eyebrow mb-6 text-cream/80" data-v-aa4fee60><span class="inline-block w-8 h-px bg-cream/60 mr-3 align-middle" data-v-aa4fee60></span> ${ssrInterpolate(_ctx.$t("legal.eyebrow"))}</div><h1 class="font-serif font-light text-fluid-7xl leading-tightest tracking-tightest max-w-5xl text-balance text-cream" data-v-aa4fee60>${ssrInterpolate(_ctx.$t("legal.cookie.heroTitle"))}</h1><p class="mt-8 max-w-xl text-fluid-lg opacity-90 leading-relaxed" data-v-aa4fee60>${ssrInterpolate(_ctx.$t("legal.cookie.heroSubtitle"))}</p></div></section><section class="container-x py-section max-w-3xl mx-auto" data-v-aa4fee60><div class="prose-legal" data-v-aa4fee60><p class="text-fluid-sm opacity-60 mb-12" data-v-aa4fee60>${ssrInterpolate(_ctx.$t("legal.lastUpdate"))}</p><h2 data-v-aa4fee60>${ssrInterpolate(_ctx.$t("legal.cookie.whatTitle"))}</h2><p data-v-aa4fee60>${ssrInterpolate(_ctx.$t("legal.cookie.whatBody"))}</p><h2 data-v-aa4fee60>${ssrInterpolate(_ctx.$t("legal.cookie.usedTitle"))}</h2><p data-v-aa4fee60>${ssrInterpolate(_ctx.$t("legal.cookie.usedIntro"))}</p><ul data-v-aa4fee60><li data-v-aa4fee60>${ssrInterpolate(_ctx.$t("legal.cookie.usedOne"))}</li><li data-v-aa4fee60>${ssrInterpolate(_ctx.$t("legal.cookie.usedTwo"))}</li><li data-v-aa4fee60>${ssrInterpolate(_ctx.$t("legal.cookie.usedThree"))}</li></ul><p data-v-aa4fee60>${ssrInterpolate(_ctx.$t("legal.cookie.usedNote"))}</p><h2 data-v-aa4fee60>${ssrInterpolate(_ctx.$t("legal.cookie.thirdTitle"))}</h2><p data-v-aa4fee60>${ssrInterpolate(_ctx.$t("legal.cookie.thirdBody"))} ${ssrInterpolate(" ")} <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" data-v-aa4fee60>Privacy Policy di Google</a>. </p><h2 data-v-aa4fee60>${ssrInterpolate(_ctx.$t("legal.cookie.manageTitle"))}</h2><p data-v-aa4fee60>${ssrInterpolate(_ctx.$t("legal.cookie.manageBody"))}</p><ul data-v-aa4fee60><li data-v-aa4fee60><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener" data-v-aa4fee60>Chrome</a></li><li data-v-aa4fee60><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener" data-v-aa4fee60>Firefox</a></li><li data-v-aa4fee60><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener" data-v-aa4fee60>Safari</a></li></ul><h2 data-v-aa4fee60>${ssrInterpolate(_ctx.$t("legal.cookie.contactsTitle"))}</h2><p data-v-aa4fee60>${ssrInterpolate(_ctx.$t("legal.cookie.contactsBody"))} <a href="mailto:info@cascinaparadiso.it" data-v-aa4fee60>info@cascinaparadiso.it</a></p></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cookie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cookie = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aa4fee60"]]);
export {
  cookie as default
};
//# sourceMappingURL=cookie-CHMvXEtZ.js.map
