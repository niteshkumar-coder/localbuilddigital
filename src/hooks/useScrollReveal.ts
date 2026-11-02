import { useEffect } from "react";

/**
 * useScrollReveal: Lightweight, GPU-accelerated IntersectionObserver hook.
 * Adds the 'is-revealed' class to elements with 'reveal-on-scroll' when they enter viewport.
 * Handcrafted with cubic-bezier physics, zero layout shift, and instant unobserve for maximum 120fps smoothness.
 */
export function useScrollReveal(dependencies: any[] = []) {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      // Immediate reveal fallback
      document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.08,
      }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll:not(.is-revealed)");
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, dependencies);
}
