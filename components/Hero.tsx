"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import ParallaxSection from "./utils/ParallaxSection";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  const title = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!title.current) return;
    if (!image.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: title.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(image.current, { y: -150 }, 0);
    tl.to(title.current, { y: 150 }, 0);
  });

  return (
    <ParallaxSection
      className="flex min-h-screen min-w-screen justify-center"
      id="home"
    >
      <div
        ref={image}
        className="absolute min-h-screen min-w-screen bg-[url(/heropizza.jpg)] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div ref={title} className="z-10 flex flex-col items-center gap-3 p-30">
        <h1 className="text-7xl leading-tight font-extrabold text-white">
          Authentic Italian
        </h1>
        <h2 className="text-center text-6xl text-white italic">
          Pizza Perfection
        </h2>
        <p className="text-muted-foreground text-center text-xl">
          <span>
            Hand-tossed dough, premium ingredients, and wood-fired excellence.
          </span>
          <br />
          <span>Experience pizza the way it was meant to be.</span>
        </p>
        <div className="my-10 flex gap-8">
          <a href="#menu">
            <Button
              size="lg"
              className="cursor-pointer p-6 shadow-xl hover:bg-orange-400"
            >
              View Our Menu
            </Button>
          </a>
          <a href="#map">
            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer p-6 shadow-xl"
            >
              Find Where We Are!
            </Button>
          </a>
        </div>
      </div>
    </ParallaxSection>
  );
}
