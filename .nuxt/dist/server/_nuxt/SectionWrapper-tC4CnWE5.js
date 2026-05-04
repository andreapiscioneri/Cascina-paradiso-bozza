import { defineComponent, createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot, useSSRContext } from "vue";
import { ssrRenderVNode, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SectionWrapper",
  __ssrInlineRender: true,
  props: {
    as: { default: "section" },
    tone: { default: "transparent" },
    padding: { default: "default" },
    id: {}
  },
  setup(__props) {
    const toneClass = {
      cream: "bg-cream text-brown dark:bg-noir dark:text-cream",
      noir: "bg-noir text-cream",
      wine: "bg-wine text-cream",
      transparent: ""
    };
    const padClass = {
      default: "py-section",
      lg: "py-section-lg",
      none: ""
    };
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.as), mergeProps({
        id: __props.id,
        class: ["relative container-x", [toneClass[__props.tone], padClass[__props.padding]]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionWrapper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=SectionWrapper-tC4CnWE5.js.map
