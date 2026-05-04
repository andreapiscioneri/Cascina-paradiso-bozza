import { defineComponent, ref, createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot, useSSRContext } from "vue";
import { ssrRenderVNode, ssrRenderSlot } from "vue/server-renderer";
import { u as useSplitReveal } from "./useSplitReveal-BZWnnGc4.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AnimatedText",
  __ssrInlineRender: true,
  props: {
    as: { default: "h2" },
    split: { default: "words" },
    stagger: { default: 0.05 },
    delay: { default: 0 },
    start: { default: "top 85%" }
  },
  setup(__props) {
    const props = __props;
    const root = ref(null);
    useSplitReveal(root, {
      type: props.split,
      stagger: props.stagger,
      delay: props.delay,
      start: props.start
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.as), mergeProps({
        ref_key: "root",
        ref: root,
        class: "overflow-hidden inline-block"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimatedText.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=AnimatedText-B0reH5hT.js.map
