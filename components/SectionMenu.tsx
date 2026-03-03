import { Pizza } from "lucide-react";
import ParallaxSection from "./utils/ParallaxSection";
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
    <ParallaxSection
      id="menu"
      className="bg-background flex h-screen px-4 py-30"
    >
      <div className="m-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 flex justify-center text-5xl">
            <Pizza className="text-primary mr-4 h-12 w-12" />
            Our Menu
          </h2>
          <p className="text-muted-foreground text-xl">
            Fresh ingredients, authentic recipes, wood-fired perfection
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-accent hover:text-primary rounded-lg border border-neutral-200 p-6 transition-colors"
            >
              <div className="mb-3 flex items-start justify-between">
                <h3 className="text-2xl">{item.name}</h3>
                <span className="text-primary text-xl">{item.price}</span>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
