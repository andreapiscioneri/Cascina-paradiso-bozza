import { b as useNuxtApp } from "../server.mjs";
import "vue";
const useReveal = (target, options = {}) => {
  const { $gsap } = useNuxtApp();
  if (!$gsap) return;
  const { stagger = 0.1, y = 60, delay = 0 } = options;
};
export {
  useReveal as u
};
//# sourceMappingURL=useReveal-BtUQoMKJ.js.map
