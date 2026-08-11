"use client";
import Image from "next/image";
import { useState } from "react";

export default function SectionAbout({
  photo,
  description,
}: {
  photo: string;
  description: string;
}) {
  const [imgsrc, setImgsrc] = useState(photo);

  return (
    <section className="px-2 py-2 md:h-screen md:px-0" id="about">
      <div className="font-playfair items-centergrid grid h-full grid-rows-2 items-center md:grid-cols-10">
        <div className="flex w-full flex-col justify-center p-[15%] tracking-wide md:col-span-3 md:row-span-2 md:py-0">
          <h2 className="border-primary font-playfair border-b-2 pb-4 text-center text-2xl">
            WHO WE ARE
          </h2>
          <p className="text-muted-foreground border-primary border-b-2 border-dashed py-4">
            {description}
          </p>
        </div>
        <div className="relative row-start-1 h-full overflow-hidden md:col-span-7 md:row-span-2">
          <Image
            className="h-full w-full object-cover object-center"
            src={imgsrc}
            sizes="100vw, 25vw"
            alt="Pizza restaurant interior"
            fill
            loading="eager"
            onError={() => {
              setImgsrc("./heropizza.jpg");
            }}
          />
        </div>
      </div>
    </section>
  );
}
