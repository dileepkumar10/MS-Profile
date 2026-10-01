"use client";

import { useEffect } from "react";
import { animate } from "framer-motion";

export function MotionEnhancer() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Map<HTMLElement, ReturnType<typeof animate>>();
    if (!reduced.matches) document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) continue;
        const element = entry.target;
        if (!reduced.matches) {
          const animation = animate(element, { opacity: [0.5, 1], y: [18, 0] }, {
            duration: 0.55,
            ease: [0.2, 0.65, 0.3, 1],
            onComplete: () => {
              element.style.removeProperty("opacity");
              element.style.removeProperty("transform");
              animations.delete(element);
            },
          });
          animations.set(element, animation);
        }
        observer.unobserve(element);
      }
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    const stopAnimations = () => {
      animations.forEach((animation, element) => {
        animation.stop();
        element.style.removeProperty("opacity");
        element.style.removeProperty("transform");
      });
      animations.clear();
    };
    const onPreferenceChange = () => {
      if (reduced.matches) {
        stopAnimations();
        document.documentElement.classList.remove("motion-ready");
      }
    };
    reduced.addEventListener("change", onPreferenceChange);
    return () => {
      observer.disconnect();
      stopAnimations();
      document.documentElement.classList.remove("motion-ready");
      reduced.removeEventListener("change", onPreferenceChange);
    };
  }, []);
  return null;
}
