"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const ParallaxSection = ({ children, ...props }: Props) => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      let st: ScrollTrigger | null = null;

      st = ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        onRefresh: () => {
          if (container.current && st) {
            // store the computed start scroll position (pixels) on the element
            container.current.dataset.stStart = String(st.start);
          }
        },
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} {...props}>
      {children}
    </section>
  );
};

export default ParallaxSection;
