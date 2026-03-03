"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function ScrollSnap() {
  useEffect(() => {
    let timeoutId: number | undefined;

    const getSections = () =>
      Array.from(document.querySelectorAll<HTMLElement>("[data-st-start]"))
        .map((el) => ({ el, start: Number(el.dataset.stStart) }))
        .sort((a, b) => a.start - b.start);

    const handleScrollEnd = () => {
      const sections = getSections();
      if (!sections.length) return;

      const y = window.scrollY;
      let nearest = sections[0];
      for (const s of sections) {
        if (Math.abs(s.start - y) < Math.abs(nearest.start - y)) nearest = s;
      }

      // Only animate if we're not already at the exact position
      if (Math.abs(nearest.start - y) > 2) {
        gsap.to(window, {
          duration: 0.6,
          scrollTo: { y: nearest.start, autoKill: false },
          ease: "power2.out",
          onComplete: () => ScrollTrigger.refresh(),
        });
      }
    };

    const onScroll = () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(handleScrollEnd, 500);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
