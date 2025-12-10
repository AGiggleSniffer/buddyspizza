import Image from "next/image";

export default function SectionAbout() {
	return (
		<section className="h-screen py-20 px-4">
			<div className="max-w-6xl mx-auto h-full">
				<div className="grid md:grid-cols-2 gap-12 items-center h-full">
					<div>
						<h2 className="text-5xl mb-6">About Us</h2>
						<p className="text-lg text-neutral-700 mb-4">
							At Buddy&apos;s WoodFire Pizza, we believe in
							keeping it simple and doing it right. Every pizza is
							crafted by hand and cooked in our authentic
							wood-fired oven, reaching temperatures that create
							that perfect crispy crust with a soft, chewy center.
						</p>
						<p className="text-lg text-neutral-700 mb-4">
							We source the freshest local ingredients and make
							our dough daily. Our passion is bringing people
							together over great food, and we treat every
							customer like family.
						</p>
						<p className="text-lg text-neutral-700">
							Come visit us and taste the difference that
							traditional methods and quality ingredients make.
						</p>
					</div>
					<div className="rounded-lg overflow-hidden shadow-xl">
						<Image
							src="/pizzaoven.jpg"
							alt="Pizza restaurant interior"
							height={1000}
							width={1000}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
