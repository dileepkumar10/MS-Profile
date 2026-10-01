"use client";

import { useEffect } from "react";

export function MotionEnhancer() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (!reduced.matches) {
          const animation = entry.target.animate([
            { opacity: 0.5, transform: "translateY(18px)" },
            { opacity: 1, transform: "translateY(0)" },
          ], { duration: 550, easing: "cubic-bezier(.2,.65,.3,1)" });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        }
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    const cancel = () => { if (reduced.matches) animations.forEach((animation) => animation.cancel()); };
    reduced.addEventListener("change", cancel);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      reduced.removeEventListener("change", cancel);
    };
  }, []);
  return null;
}
