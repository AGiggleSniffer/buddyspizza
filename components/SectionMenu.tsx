import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { INSTAGRAM, MENU_ITEMS } from "@/lib/config";

export default function SectionMenu() {
  return (
    <section className="mb-8 h-screen px-4 py-20 md:px-[25%]" id="menu">
      <h2 className="border-primary font-playfair border-b-2 pb-4 text-center text-3xl tracking-wider">
        MENU
      </h2>
      <p className="text-primary font-playfair pt-1 text-center text-xs tracking-wider">
        Wood-fired • Made fresh daily
      </p>
      <Accordion type="single" collapsible className="mt-4 justify-center pb-4">
        {MENU_ITEMS.map((item) => (
          <AccordionItem key={item.id} value={item.name}>
            <AccordionTrigger className="hover:text-primary transform cursor-pointer transition-colors">
              <div className="flex w-full justify-between pr-4 tracking-wide">
                <p>
                  <span className="text-muted-foreground font-playfair pr-4 text-xs italic">
                    {String(item.id).padStart(2, "0")}
                  </span>
                  {item.name}
                </p>
                {/* <p>{item.price}</p> */}
              </div>
            </AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="text-center">
        <div className="mb-4 flex items-center gap-4">
          <div className="via-primary h-px flex-1 bg-gradient-to-r from-transparent to-transparent" />
          <span className="text-xs text-amber-700">◆</span>
          <div className="via-primary h-px flex-1 bg-gradient-to-r from-transparent to-transparent" />
        </div>

        <p className="text-muted-foreground text-[0.5rem] tracking-widest uppercase md:text-xs">
          Check Instagram @{INSTAGRAM} for daily specials and prices
          <br />
          All pizzas available as 12&quot;
        </p>
      </div>
    </section>
  );
}
