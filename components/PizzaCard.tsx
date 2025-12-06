import Image from "next/image";
import React from "react";
import Button from "./Button";

type Props = {
	name: string;
	price: string;
	image?: string;
	description?: string;
};

export default function PizzaCard({
	name,
	price,
	image = "/pizza.svg",
	description,
}: Props) {
	return (
		<div className="flex w-full max-w-md flex-col gap-4 rounded-lg border border-border p-4">
			<div className="flex items-center gap-4">
				<div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-muted">
					<Image
						src={image}
						alt={name}
						fill
						className="object-cover"
					/>
				</div>
				<div className="flex flex-1 flex-col">
					<div className="flex items-center justify-between">
						<h4 className="text-sm font-semibold">{name}</h4>
						<span className="text-sm font-medium">{price}</span>
					</div>
					{description && (
						<p className="mt-1 text-sm text-muted-foreground">
							{description}
						</p>
					)}
				</div>
			</div>
			<div className="flex justify-end">
				<Button>Add</Button>
			</div>
		</div>
	);
}
