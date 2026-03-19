import Image from "next/image";

export default function SectionAbout() {
  return (
    <section className="h-screen" id="about">
      <div className="font-playfair grid h-full grid-cols-10 items-center gap-12 py-2">
        <div className="col-span-3 px-25 tracking-wide">
          <h2 className="border-primary font-playfair border-b-2 pb-4 text-center text-2xl">
            WHO WE ARE
          </h2>
          <p className="text-muted-foreground border-primary border-b-2 border-dashed py-4">
            At Buddy&apos;s WoodFire Pizza, we keep it simple and do it right.
            Every pizza is hand-crafted and wood-fired for that perfect crispy,
            chewy crust. We use fresh local ingredients and make our dough from
            scratch daily because we love bringing people together over great
            food.
          </p>
        </div>
        <div className="col-span-7 h-full w-full overflow-hidden">
          <Image
            className="h-full w-full object-center"
            src="/pizzaoven.jpg"
            alt="Pizza restaurant interior"
            height={1000}
            width={1000}
          />
        </div>
      </div>
    </section>
  );
}
