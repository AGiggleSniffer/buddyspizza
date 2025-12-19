import { Pizza } from "lucide-react";
import ParallaxSection from "./utils/ParallaxSection";
const menuItems = [
  {
    id: 1,
    name: "Pepperoni",
    price: "$18",
    description:
      "Classic pepperoni with our signature tomato sauce and mozzarella",
  },
  {
    id: 2,
    name: "Cheese",
    price: "$14",
    description:
      "Simple and delicious - fresh mozzarella on our wood-fired crust",
  },
  {
    id: 3,
    name: "Margherita",
    price: "$16",
    description: "Fresh basil, tomatoes, and mozzarella - a timeless classic",
  },
  {
    id: 4,
    name: "Supreme",
    price: "$20",
    description:
      "Loaded with pepperoni, sausage, peppers, onions, and mushrooms",
  },
  {
    id: 5,
    name: "BBQ Chicken",
    price: "$19",
    description: "Grilled chicken, red onions, cilantro, and tangy BBQ sauce",
  },
  {
    id: 6,
    name: "Veggie Delight",
    price: "$17",
    description: "Seasonal vegetables, olives, and fresh herbs",
  },
];

export default function SectionMenu() {
  return (
    <ParallaxSection
      id="menu"
      className="bg-background min-h-screen px-4 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <Pizza className="text-primary mx-auto mb-4 h-12 w-12" />
          <h2 className="mb-4 text-5xl">Our Menu</h2>
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
