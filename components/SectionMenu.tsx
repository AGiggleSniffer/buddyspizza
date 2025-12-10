import { Pizza } from "lucide-react";
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
		description:
			"Fresh basil, tomatoes, and mozzarella - a timeless classic",
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
		description:
			"Grilled chicken, red onions, cilantro, and tangy BBQ sauce",
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
		<section id="menu" className="min-h-screen py-20 px-4 bg-background">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<Pizza className="w-12 h-12 text-orange-600 mx-auto mb-4" />
					<h2 className="text-5xl mb-4">Our Menu</h2>
					<p className="text-xl text-muted-foreground">
						Fresh ingredients, authentic recipes, wood-fired
						perfection
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{menuItems.map((item) => (
						<div
							key={item.id}
							className="bg-accent rounded-lg p-6 border border-neutral-200 hover:border-orange-400 transition-colors"
						>
							<div className="flex justify-between items-start mb-3">
								<h3 className="text-2xl text-primary">
									{item.name}
								</h3>
								<span className="text-xl text-orange-600">
									{item.price}
								</span>
							</div>
							<p className="text-muted-foreground">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
