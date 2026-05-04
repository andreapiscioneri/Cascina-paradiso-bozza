import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Marquee",
  __ssrInlineRender: true,
  props: {
    items: {},
    speed: { default: 40 },
    italic: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "marquee select-none py-6" }, _attrs))}><div class="marquee__track" style="${ssrRenderStyle({ animationDuration: `${__props.speed}s` })}"><!--[-->`);
      ssrRenderList([...__props.items, ...__props.items], (item, i) => {
        _push(`<span class="${ssrRenderClass([__props.italic ? "italic" : "", "font-serif text-fluid-5xl flex items-center gap-10"])}">${ssrInterpolate(item)} <span class="inline-block w-2 h-2 rounded-full bg-wine"></span></span>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Marquee.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Marquee-CC4pc3MQ.js.map
