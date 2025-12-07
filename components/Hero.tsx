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
					<div>
						<h1 className="text-4xl font-extrabold leading-tight">
							Dear Darius,
						</h1>
						<p className="mt-3 text-lg text-muted-foreground">
							Please play leauge with me.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
