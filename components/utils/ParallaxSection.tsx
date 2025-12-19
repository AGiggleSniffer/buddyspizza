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

  useGSAP(() => {
    if (!container.current) return;

    gsap.to(container.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        pin: true,
        pinSpacing: false,
        // scrub: true,
      },
    });

    // tl.to(container.current, { y: -300 }, 0);
  });

  return (
    <section ref={container} {...props}>
      {children}
    </section>
  );
};

export default ParallaxSection;
