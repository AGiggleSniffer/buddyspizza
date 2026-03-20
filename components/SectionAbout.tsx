import Image from "next/image";

export default function SectionAbout() {
  return (
    <section className="px-2 py-2 md:h-screen md:px-0" id="about">
      <div className="font-playfair items-centergrid grid h-full grid-rows-2 items-center md:grid-cols-10">
        <div className="flex w-full flex-col justify-center p-[15%] tracking-wide md:col-span-3 md:row-span-2 md:py-0">
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
        <div className="row-start-1 h-full overflow-hidden md:col-span-7 md:row-span-2">
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
