import Image from "next/image";
import ParallaxSection from "./utils/ParallaxSection";

export default function SectionAbout() {
  return (
    <ParallaxSection className="bg-background h-screen px-4 py-20" id="about">
      <div className="mx-auto h-full max-w-6xl">
        <div className="grid h-full items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-5xl">About Us</h2>
            <p className="text-muted-foreground mb-4 text-lg">
              At Buddy&apos;s WoodFire Pizza, we believe in keeping it simple
              and doing it right. Every pizza is crafted by hand and cooked in
              our authentic wood-fired oven, reaching temperatures that create
              that perfect crispy crust with a soft, chewy center.
            </p>
            <p className="text-muted-foreground mb-4 text-lg">
              We source the freshest local ingredients and make our dough daily.
              Our passion is bringing people together over great food, and we
              treat every customer like family.
            </p>
            <p className="text-muted-foreground text-lg">
              Come visit us and taste the difference that traditional methods
              and quality ingredients make.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/pizzaoven.jpg"
              alt="Pizza restaurant interior"
              height={1000}
              width={1000}
            />
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}
