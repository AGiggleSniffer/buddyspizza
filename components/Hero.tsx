import Image from "next/image";
import React from "react";

export default function Hero() {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center bg-background text-foreground"
		>
			<div className="mx-auto max-w-4xl px-6 py-12">
				<div className="grid gap-8 sm:grid-cols-2 sm:items-center">
					<div className="flex items-center justify-center">
						<div className="relative h-52 w-52 overflow-hidden rounded-full bg-muted">
							<Image
								src="/pizza.svg"
								alt="Pizza"
								fill
								className="object-cover"
							/>
						</div>
					</div>
					<div>
						<h1 className="text-4xl font-extrabold leading-tight">
							Hot, cheesy, always fresh.
						</h1>
						<p className="mt-3 text-lg text-muted-foreground">
							A showcase of our menu and story — handcrafted
							pizzas and simple, bold flavors.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
