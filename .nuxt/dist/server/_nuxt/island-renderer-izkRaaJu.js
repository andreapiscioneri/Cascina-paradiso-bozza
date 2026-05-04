import { defineAsyncComponent, defineComponent, onErrorCaptured, createVNode } from "vue";
import { i as injectHead, c as createError } from "../server.mjs";
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
import "vue/server-renderer";
const islandComponents = {
  "BrandedLogo": defineAsyncComponent(() => import(
    "./BrandedLogo-sMbZll9O.js"
    /* webpackChunkName: "components/branded-logo-server" */
  ).then((c) => c.default || c)),
  "Frame": defineAsyncComponent(() => import(
    "./Frame-CQj9VkP4.js"
    /* webpackChunkName: "components/frame-server" */
  ).then((c) => c.default || c)),
  "Nuxt": defineAsyncComponent(() => import(
    "./Nuxt-FMzKJBot.js"
    /* webpackChunkName: "components/nuxt-server" */
  ).then((c) => c.default || c)),
  "NuxtSeo": defineAsyncComponent(() => import(
    "./NuxtSeo-g_S6GA-M.js"
    /* webpackChunkName: "components/nuxt-seo-server" */
  ).then((c) => c.default || c)),
  "Pergel": defineAsyncComponent(() => import(
    "./Pergel-CjikIUP-.js"
    /* webpackChunkName: "components/pergel-server" */
  ).then((c) => c.default || c)),
  "SimpleBlog": defineAsyncComponent(() => import(
    "./SimpleBlog-C9l8A_Hc.js"
    /* webpackChunkName: "components/simple-blog-server" */
  ).then((c) => c.default || c)),
  "UnJs": defineAsyncComponent(() => import(
    "./UnJs-CwVq-bWy.js"
    /* webpackChunkName: "components/un-js-server" */
  ).then((c) => c.default || c)),
  "Wave": defineAsyncComponent(() => import(
    "./Wave-qdArrv7Z.js"
    /* webpackChunkName: "components/wave-server" */
  ).then((c) => c.default || c)),
  "WithEmoji": defineAsyncComponent(() => import(
    "./WithEmoji-CpVBYVMB.js"
    /* webpackChunkName: "components/with-emoji-server" */
  ).then((c) => c.default || c))
};
const islandRenderer = defineComponent({
  name: "IslandRenderer",
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const head = injectHead();
    head.entries.clear();
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        status: 404,
        statusText: `Island component not found: ${props.context.name}`
      });
    }
    onErrorCaptured((e) => {
      console.log(e);
    });
    return () => createVNode(component || "span", { ...props.context.props, "data-island-uid": "" });
  }
});
export {
  islandRenderer as default
};
//# sourceMappingURL=island-renderer-izkRaaJu.js.map
