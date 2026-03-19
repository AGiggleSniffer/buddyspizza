import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const menuItems = [
  {
    id: 1,
    name: "Pepperoni",
    price: "$18",
    description:
      "Classic pepperoni with tangy tomato sauce and creamy mozzarella",
  },
  {
    id: 2,
    name: "Cheese",
    price: "$14",
    description:
      "Pure simplicity. Fresh mozzarella on our signature wood-fired crust",
  },
  {
    id: 3,
    name: "Margherita",
    price: "$15",
    description:
      "The Italian way. Fresh basil, ripe tomatoes, and silky mozzarella",
  },
  {
    id: 4,
    name: "Spicy Pepperoni",
    price: "$20",
    description: "Pepperoni turned up to 11 with hot honey and cracked pepper",
  },
  {
    id: 5,
    name: "The Meat",
    price: "$19",
    description:
      "Meat lovers rejoice. Pepperoni, ham, and sausage in perfect harmony",
  },
  {
    id: 6,
    name: "Hawaiian",
    price: "$17",
    description:
      "The controversial classic. Sweet ham, tropical pineapple, and mozzarella",
  },
  {
    id: 7,
    name: "Sweet n' Spicy Piggy",
    price: "$17",
    description:
      "Ham meets pineapple meets jalapeño heat with a drizzle of hot honey",
  },
  {
    id: 8,
    name: "Buddy's Breadsticks",
    price: "$11",
    description:
      "Crispy, golden, and dangerously addictive with garlic and parmesan",
  },
  {
    id: 9,
    name: "Extra Toppings",
    price: "$2",
    description: "Make it yours. Add any topping your heart desires",
  },
];

export default function SectionMenu() {
  return (
    <section className="h-screen px-[25%] py-20" id="menu">
      <h2 className="border-primary font-playfair border-b-2 pb-4 text-center text-3xl tracking-wider">
        MENU
      </h2>
      <p className="text-primary font-playfair pt-1 text-center text-xs tracking-wide">
        Wood-fired • Made fresh daily
      </p>
      <Accordion type="single" collapsible className="mt-4 justify-center pb-4">
        {menuItems.map((item) => (
          <AccordionItem key={item.id} value={item.name}>
            <AccordionTrigger className="hover:text-primary transform cursor-pointer transition-colors">
              <div className="flex w-full justify-between pr-4 tracking-wide">
                <p>
                  <span className="text-muted-foreground font-playfair pr-4 text-xs italic">
                    {String(item.id).padStart(2, "0")}
                  </span>
                  {item.name}
                </p>
                <p>{item.price}</p>
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

        <p className="text-muted-foreground text-[10px] tracking-[0.25em] uppercase">
          All pizzas available as 12&quot;
        </p>
      </div>
    </section>
  );
}
