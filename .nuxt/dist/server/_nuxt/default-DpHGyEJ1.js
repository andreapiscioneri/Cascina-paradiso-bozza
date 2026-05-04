import { m as useState, u as useI18n, j as useLocalePath, d as useRoute, _ as __nuxt_component_0$1 } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./nuxt-link-Bzlihrby.js";
import { defineComponent, computed, mergeProps, unref, useSSRContext, ref, watch, withCtx, openBlock, createBlock, createVNode, toDisplayString, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { _ as _sfc_main$5 } from "./AppButton-DNzz4bE5.js";
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
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ThemeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    const icon = computed(() => {
      if (colorMode.preference === "system") return "system";
      return colorMode.value === "dark" ? "dark" : "light";
    });
    const label = computed(() => {
      if (colorMode.preference === "system") return "Auto";
      return colorMode.preference === "dark" ? "Dark" : "Light";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "w-10 h-10 rounded-full border border-[color:var(--line)] inline-flex items-center justify-center leading-none transition-colors duration-400 ease-expo hover:bg-brown hover:text-cream dark:hover:bg-cream dark:hover:text-brown",
        "aria-label": `Theme: ${unref(label)}`,
        title: `Theme: ${unref(label)}`
      }, _attrs))}>`);
      if (unref(icon) === "light") {
        _push(`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" class="block" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.64 5.64l1.41 1.41M16.95 16.95l1.41 1.41M5.64 18.36l1.41-1.41M16.95 7.05l1.41-1.41"></path></svg>`);
      } else if (unref(icon) === "dark") {
        _push(`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" class="block" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path></svg>`);
      } else {
        _push(`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" class="block" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2"></rect><path d="M8 21h8M12 18v3"></path></svg>`);
      }
      _push(`</button>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThemeToggle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LangToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, setLocale } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "w-10 h-10 rounded-full border border-[color:var(--line)] inline-flex items-center justify-center transition-colors duration-400 ease-expo hover:bg-brown hover:text-cream dark:hover:bg-cream dark:hover:text-brown",
        "aria-label": `Language: ${unref(locale)}`,
        title: `Language: ${unref(locale) === "it" ? "Italiano" : "English"}`
      }, _attrs))}>`);
      if (unref(locale) === "it") {
        _push(`<svg viewBox="0 0 3 2" class="h-3.5 w-5 rounded-[2px] shadow-[0_0_0_1px_rgba(255,255,255,0.25)]" aria-hidden="true"><rect width="3" height="2" fill="#012169"></rect><path d="M0 0l3 2M3 0L0 2" stroke="#FFFFFF" stroke-width="0.4"></path><path d="M0 0l3 2M3 0L0 2" stroke="#C8102E" stroke-width="0.18"></path><rect x="1.2" y="0" width="0.6" height="2" fill="#FFFFFF"></rect><rect x="0" y="0.7" width="3" height="0.6" fill="#FFFFFF"></rect><rect x="1.32" y="0" width="0.36" height="2" fill="#C8102E"></rect><rect x="0" y="0.82" width="3" height="0.36" fill="#C8102E"></rect></svg>`);
      } else {
        _push(`<svg viewBox="0 0 3 2" class="h-3.5 w-5 rounded-[2px] shadow-[0_0_0_1px_rgba(255,255,255,0.25)]" aria-hidden="true"><rect width="1" height="2" x="0" fill="#009246"></rect><rect width="1" height="2" x="1" fill="#FFFFFF"></rect><rect width="1" height="2" x="2" fill="#CE2B37"></rect></svg>`);
      }
      _push(`</button>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LangToggle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SiteNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const localePath = useLocalePath();
    const isScrolled = ref(false);
    const isOpen = ref(false);
    watch(isOpen, (v) => {
      return;
    });
    const route = useRoute();
    const isOnPosizionamento = computed(() => route.path.includes("/posizionamento"));
    watch(isOnPosizionamento, (value) => {
      if (value) isOpen.value = false;
    });
    const links = computed(() => {
      const base = [
        { to: localePath("/storia"), label: t("nav.storia") },
        { to: localePath("/menu"), label: t("nav.menu") },
        { to: localePath("/contatti"), label: t("nav.contatti") }
      ];
      return base;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ThemeToggle = _sfc_main$4;
      const _component_LangToggle = _sfc_main$3;
      const _component_AppButton = _sfc_main$5;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["fixed top-0 left-0 right-0 z-[50] transition-all duration-500 ease-expo", [
          unref(isScrolled) || unref(isOpen) ? "backdrop-blur-xl bg-cream/80 dark:bg-noir/80 border-b border-[color:var(--line)]" : "bg-transparent"
        ]]
      }, _attrs))}><div class="container-x flex items-center justify-between h-[var(--nav-h)]">`);
      if (!unref(isOnPosizionamento)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/"),
          class: "flex items-center gap-3 group",
          onClick: ($event) => isOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg width="32" height="32" viewBox="0 0 72 72" fill="none" class="transition-transform duration-600 ease-expo group-hover:rotate-[8deg]" aria-hidden="true"${_scopeId}><circle cx="36" cy="36" r="34" stroke="currentColor" stroke-width="1.5"${_scopeId}></circle><path d="M22 44c4-10 10-14 14-14s10 4 14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"${_scopeId}></path><circle cx="36" cy="28" r="2.5" fill="currentColor"${_scopeId}></circle></svg><span class="flex flex-col leading-none"${_scopeId}><span class="font-serif text-fluid-lg"${_scopeId}>Cascina Paradiso</span><span class="eyebrow opacity-60 hidden sm:inline"${_scopeId}>${ssrInterpolate(_ctx.$t("brand.since"))}</span></span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  width: "32",
                  height: "32",
                  viewBox: "0 0 72 72",
                  fill: "none",
                  class: "transition-transform duration-600 ease-expo group-hover:rotate-[8deg]",
                  "aria-hidden": "true"
                }, [
                  createVNode("circle", {
                    cx: "36",
                    cy: "36",
                    r: "34",
                    stroke: "currentColor",
                    "stroke-width": "1.5"
                  }),
                  createVNode("path", {
                    d: "M22 44c4-10 10-14 14-14s10 4 14 14",
                    stroke: "currentColor",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                  }),
                  createVNode("circle", {
                    cx: "36",
                    cy: "28",
                    r: "2.5",
                    fill: "currentColor"
                  })
                ])),
                createVNode("span", { class: "flex flex-col leading-none" }, [
                  createVNode("span", { class: "font-serif text-fluid-lg" }, "Cascina Paradiso"),
                  createVNode("span", { class: "eyebrow opacity-60 hidden sm:inline" }, toDisplayString(_ctx.$t("brand.since")), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="flex items-center gap-3"><svg width="32" height="32" viewBox="0 0 72 72" fill="none" aria-hidden="true"><circle cx="36" cy="36" r="34" stroke="currentColor" stroke-width="1.5"></circle><path d="M22 44c4-10 10-14 14-14s10 4 14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><circle cx="36" cy="28" r="2.5" fill="currentColor"></circle></svg><span class="flex flex-col leading-none"><span class="font-serif text-fluid-lg">Cascina Paradiso</span><span class="eyebrow opacity-60 hidden sm:inline">${ssrInterpolate(_ctx.$t("brand.since"))}</span></span></div>`);
      }
      if (!unref(isOnPosizionamento)) {
        _push(`<nav class="hidden lg:flex items-center gap-10"><!--[-->`);
        ssrRenderList(unref(links), (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.to,
            to: link.to,
            class: "text-fluid-sm line-hover",
            "active-class": "opacity-100"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(_component_ThemeToggle, { class: "hidden sm:flex" }, null, _parent));
      _push(ssrRenderComponent(_component_LangToggle, { class: "hidden sm:flex" }, null, _parent));
      if (!unref(isOnPosizionamento)) {
        _push(ssrRenderComponent(_component_AppButton, {
          to: unref(localePath)("/prenotazioni"),
          variant: "solid",
          size: "sm",
          class: "hidden md:inline-flex"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("nav.prenota"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("nav.prenota")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(isOnPosizionamento)) {
        _push(`<button type="button" class="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"${ssrRenderAttr("aria-expanded", unref(isOpen))} aria-label="Menu"><span class="${ssrRenderClass([unref(isOpen) ? "translate-y-[6px] rotate-45" : "", "block w-6 h-px bg-current transition-transform duration-400 ease-expo"])}"></span><span class="${ssrRenderClass([unref(isOpen) ? "opacity-0" : "", "block w-6 h-px bg-current transition-opacity duration-200"])}"></span><span class="${ssrRenderClass([unref(isOpen) ? "-translate-y-[6px] -rotate-45" : "", "block w-6 h-px bg-current transition-transform duration-400 ease-expo"])}"></span></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (unref(isOpen) && !unref(isOnPosizionamento)) {
        _push(`<div class="fixed inset-0 top-[var(--nav-h)] z-[40] bg-cream dark:bg-noir grain lg:hidden"><div class="container-x py-12 flex flex-col h-full"><nav class="flex flex-col gap-6"><!--[-->`);
        ssrRenderList(unref(links), (link, i) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.to,
            to: link.to,
            class: "font-serif text-fluid-4xl",
            style: { transitionDelay: `${i * 60 + 100}ms` },
            onClick: ($event) => isOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></nav><div class="mt-auto py-8 flex flex-col gap-4"><div class="flex gap-4">`);
        _push(ssrRenderComponent(_component_ThemeToggle, null, null, _parent));
        _push(ssrRenderComponent(_component_LangToggle, null, null, _parent));
        _push(`</div>`);
        if (!unref(isOnPosizionamento)) {
          _push(ssrRenderComponent(_component_AppButton, {
            to: unref(localePath)("/prenotazioni"),
            variant: "solid",
            onClick: ($event) => isOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("nav.prenota"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("nav.prenota")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteNavbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SiteFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    const route = useRoute();
    const isOnPosizionamento = computed(() => route.path.includes("/posizionamento"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-noir text-cream grain mt-32" }, _attrs))}><div class="container-x pt-24 pb-10 border-b border-white/10"><p class="eyebrow opacity-50 mb-6">${ssrInterpolate(_ctx.$t("footer.built"))}</p><h2 class="font-serif font-light text-fluid-6xl md:text-fluid-7xl leading-tightest tracking-tightest whitespace-nowrap"> Cascina <span class="italic">Paradiso.</span></h2></div><div class="container-x grid md:grid-cols-[1fr_auto_auto] gap-12 py-14"><div class="max-w-md"><p class="font-serif text-fluid-xl mb-4 whitespace-pre-line">${ssrInterpolate(_ctx.$t("footer.tagline"))}</p><p class="text-fluid-sm opacity-70">${ssrInterpolate(_ctx.$t("footer.address"))}</p></div><div class="flex flex-col gap-3"><span class="eyebrow opacity-50">Nav</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "line-hover text-fluid-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("nav.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("nav.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/storia"),
        class: "line-hover text-fluid-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("nav.storia"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("nav.storia")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/menu"),
        class: "line-hover text-fluid-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("nav.menu"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("nav.menu")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/contatti"),
        class: "line-hover text-fluid-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("nav.contatti"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("nav.contatti")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col gap-3"><span class="eyebrow opacity-50">Contatti</span><a href="tel:+393519152082" class="line-hover text-fluid-sm">351 915 2082</a><a href="https://www.google.com/maps?q=Via+Guglielmo+Ghilardi+20+Alzano+Lombardo" target="_blank" rel="noopener" class="line-hover text-fluid-sm">${ssrInterpolate(_ctx.$t("cta.directions"))}</a><div class="flex items-center gap-3 pt-1"><a href="https://www.instagram.com/ristorantecascinaparadiso/" target="_blank" rel="noopener" aria-label="Instagram" class="inline-flex h-9 w-9 items-center justify-center rounded-full text-cream transition-all duration-300 hover:bg-white/12 hover:-translate-y-0.5"><svg viewBox="0 0 24 24" class="h-4.5 w-4.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"></circle></svg></a><a href="https://wa.me/393519152082" target="_blank" rel="noopener" aria-label="WhatsApp" class="inline-flex h-9 w-9 items-center justify-center rounded-full text-cream transition-all duration-300 hover:bg-white/12 hover:-translate-y-0.5"><svg viewBox="0 0 24 24" class="h-4.5 w-4.5" fill="currentColor" aria-hidden="true"><path d="M12 2.1A9.9 9.9 0 0 0 3.6 17.2L2.3 21.7l4.6-1.2A9.9 9.9 0 1 0 12 2.1Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.7.7.7-2.7-.2-.3A8 8 0 1 1 12 20.1Zm4.4-6.1c-.2-.1-1.2-.6-1.4-.6-.2-.1-.3-.1-.5.1l-.4.6c-.1.1-.2.2-.4.1a6.5 6.5 0 0 1-3.2-2.8c-.1-.2 0-.3.1-.4l.3-.4c.1-.1.1-.3.2-.4 0-.1 0-.3-.1-.4l-.6-1.4c-.1-.3-.3-.2-.4-.2h-.4c-.1 0-.4 0-.6.2-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.8 3.5.5.2 1 .4 1.3.5.5.1 1 .1 1.4.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.4-.3Z"></path></svg></a></div></div></div><div class="container-x flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-6 border-t border-white/10 text-xs opacity-50"><span>© ${ssrInterpolate(unref(year))} Cascina Paradiso — ${ssrInterpolate(_ctx.$t("footer.rights"))}</span><div class="flex gap-6">`);
      if (!unref(isOnPosizionamento)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/privacy"),
          class: "hover:opacity-100 transition-opacity"
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
      } else {
        _push(`<!---->`);
      }
      if (!unref(isOnPosizionamento)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/trattamento-dati"),
          class: "hover:opacity-100 transition-opacity"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Trattamento Dati`);
            } else {
              return [
                createTextVNode("Trattamento Dati")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(isOnPosizionamento)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/cookie"),
          class: "hover:opacity-100 transition-opacity"
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
      } else {
        _push(`<!---->`);
      }
      _push(`<span>P.IVA — Cascina Paradiso</span></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_SiteNavbar = _sfc_main$2;
      const _component_SiteFooter = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grain min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_SiteNavbar, null, null, _parent));
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-DpHGyEJ1.js.map
