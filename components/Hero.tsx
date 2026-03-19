"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="grid min-h-screen min-w-screen justify-center tracking-wide grid-cols-10"
      id="home"
    >
      <div className="absolute min-h-screen min-w-screen bg-[url(/heropizza.jpg)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="z-10 flex flex-col justify-center col-span-7 col-start-2">
        <h1 className="text-7xl leading-tight font-extrabold text-white">
          Authentic Italian
        </h1>
        <h2 className="font-playfair text-6xl text-white italic">
          Pizza Perfection
        </h2>
        <p className="text-muted-foreground text-xl py-10">
          <span>
            Hand-tossed dough, premium ingredients, and wood-fired excellence.
          </span>
          <br />
          <span>Experience pizza the way it was meant to be.</span>
        </p>
        <div className="font-playfair flex gap-8">
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
    </section>
  );
}
