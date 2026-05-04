import { _ as __nuxt_component_0 } from "./nuxt-link-Bzlihrby.js";
import { defineComponent, computed, createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext } from "vue";
import { ssrRenderVNode, ssrRenderSlot } from "vue/server-renderer";
const base = "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-400 ease-expo rounded-full whitespace-nowrap select-none will-change-transform group";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppButton",
  __ssrInlineRender: true,
  props: {
    to: {},
    href: {},
    variant: { default: "solid" },
    size: { default: "md" },
    external: { type: Boolean, default: false },
    type: { default: "button" }
  },
  setup(__props) {
    const props = __props;
    const variants = {
      solid: "bg-brown text-cream hover:bg-wine dark:bg-cream dark:text-brown dark:hover:bg-wine dark:hover:text-cream",
      outline: "border border-current text-current hover:bg-brown hover:text-cream dark:hover:bg-cream dark:hover:text-brown",
      ghost: "text-current hover:opacity-70"
    };
    const sizes = {
      sm: "px-5 py-2 text-xs uppercase tracking-eyebrow",
      md: "px-7 py-3.5 text-sm uppercase tracking-eyebrow",
      lg: "px-9 py-4 text-sm uppercase tracking-eyebrow"
    };
    const classes = computed(() => [base, variants[props.variant], sizes[props.size]]);
    const tag = computed(() => {
      if (props.to) return __nuxt_component_0;
      if (props.href) return "a";
      return "button";
    });
    const bindings = computed(() => {
      if (props.to) return { to: props.to };
      if (props.href)
        return {
          href: props.href,
          ...props.external ? { target: "_blank", rel: "noopener noreferrer" } : {}
        };
      return { type: props.type };
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(tag)), mergeProps(unref(bindings), { class: unref(classes) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`<span class="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1" aria-hidden="true"${_scopeId}> → </span>`);
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode("span", {
                class: "inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1",
                "aria-hidden": "true"
              }, " → ")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=AppButton-DNzz4bE5.js.map
