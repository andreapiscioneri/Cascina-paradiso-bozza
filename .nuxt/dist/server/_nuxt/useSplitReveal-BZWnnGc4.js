import "split-type";
import { b as useNuxtApp } from "../server.mjs";
import "vue";
const useSplitReveal = (target, options = {}) => {
  const { $gsap, $ScrollTrigger } = useNuxtApp();
  if (!$gsap) return;
  const {
    type = "words",
    stagger = 0.04,
    duration = 1,
    y = 120,
    delay = 0,
    once = true,
    start = "top 85%"
  } = options;
};
export {
  useSplitReveal as u
};
//# sourceMappingURL=useSplitReveal-BZWnnGc4.js.map
