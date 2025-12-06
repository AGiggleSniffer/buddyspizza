import Image from "next/image";
import React from "react";

export default function SectionGallery() {
	return (
		<section
			id="gallery"
			className="min-h-screen flex items-center bg-background"
		>
			<div className="mx-auto max-w-4xl px-6 py-12">
				<h2 className="text-2xl font-semibold">Gallery</h2>
				<p className="mt-3 text-muted-foreground">
					Photos from the oven and the dining room.
				</p>

				<div className="mt-8 grid gap-4 sm:grid-cols-3">
					{Array.from({ length: 6 }).map((_, i) => (
						<div
							key={i}
							className="relative h-32 w-full overflow-hidden rounded-md bg-muted"
						>
							<Image
								src="/pizza.svg"
								alt={`gallery-${i}`}
								fill
								className="object-cover"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
