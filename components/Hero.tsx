import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="mx-auto flex min-h-screen min-w-screen justify-center tracking-wide md:grid md:grid-cols-10"
      id="home"
    >
      <div className="absolute min-h-screen min-w-screen bg-[url(/heropizza.jpg)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="z-10 col-span-7 col-start-2 flex flex-col items-center justify-center md:items-baseline">
        <h1 className="text-3xl leading-tight font-extrabold text-white md:text-5xl lg:text-7xl">
          Authentic Italian
        </h1>
        <h2 className="font-playfair text-2xl text-white italic md:text-4xl lg:text-6xl">
          Pizza Perfection
        </h2>
        <p className="font-playfair w-1/2 py-10 text-center text-xs text-white md:text-start md:text-sm lg:text-xl">
          <span className="px-auto text-pretty">
            Hand-tossed dough, premium ingredients, and wood-fired excellence.{" "}
            Experience pizza the way it was meant to be.
          </span>
          <br />
          <span></span>
        </p>
        <div className="font-playfair flex gap-8">
          <a href="#menu">
            <Button
              size="lg"
              className="cursor-pointer p-6 font-bold shadow-xl hover:bg-orange-400"
            >
              View Our Menu
            </Button>
          </a>
          <a href="#map">
            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer p-6 font-bold shadow-xl"
            >
              Find Where We Are!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
