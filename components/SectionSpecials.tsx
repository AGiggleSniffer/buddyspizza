import React from "react";

export default function SectionSpecials() {
	return (
		<section
			id="specials"
			className="min-h-screen flex items-center bg-background"
		>
			<div className="mx-auto max-w-4xl px-6 py-12">
				<h2 className="text-2xl font-semibold">Today's Specials</h2>
				<p className="mt-3 text-muted-foreground">
					Limited-time creations and chef favorites.
				</p>

				<div className="mt-8 grid gap-6 sm:grid-cols-3">
					<div className="rounded-lg border border-border p-4 text-center">
						Spicy Calabrese
					</div>
					<div className="rounded-lg border border-border p-4 text-center">
						Four Cheese
					</div>
					<div className="rounded-lg border border-border p-4 text-center">
						Truffle Mushroom
					</div>
				</div>
			</div>
		</section>
	);
}
