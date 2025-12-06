import Image from "next/image";
import React from "react";

export default function SectionMenu() {
	return (
		<section
			id="menu"
			className="min-h-screen flex items-center bg-background"
		>
			<div className="mx-auto max-w-4xl px-6 py-12">
				<h2 className="text-2xl font-semibold">Our Menu</h2>
				<p className="mt-3 text-muted-foreground">
					A curated selection of classics and seasonal specials.
				</p>

				<div className="mt-8 grid gap-6 sm:grid-cols-2">
					<div className="rounded-lg border border-border p-4">
						<div className="flex items-center gap-4">
							<div className="relative h-20 w-20 overflow-hidden rounded-md bg-muted">
								<Image
									src="/pizza.svg"
									alt="Pizza"
									fill
									className="object-cover"
								/>
							</div>
							<div>
								<h3 className="text-sm font-semibold">
									Margherita
								</h3>
								<p className="text-sm text-muted-foreground">
									Tomato, mozzarella, basil
								</p>
							</div>
						</div>
					</div>

					<div className="rounded-lg border border-border p-4">
						<div className="flex items-center gap-4">
							<div className="relative h-20 w-20 overflow-hidden rounded-md bg-muted">
								<Image
									src="/pizza.svg"
									alt="Pizza"
									fill
									className="object-cover"
								/>
							</div>
							<div>
								<h3 className="text-sm font-semibold">
									Pepperoni
								</h3>
								<p className="text-sm text-muted-foreground">
									Pepperoni, mozzarella
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
