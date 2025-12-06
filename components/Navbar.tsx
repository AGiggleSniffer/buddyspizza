"use client";
import React from "react";
import Button from "./Button";

export default function Navbar() {
	return (
		<header className="w-full border-b border-border bg-background/50">
			<div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-4">
				<div className="flex items-center gap-3">
					<div className="h-10 w-10 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold">
						P
					</div>
					<div>
						<h3 className="text-sm font-semibold">Pizza</h3>
						<p className="text-xs text-muted-foreground">
							Showcase
						</p>
					</div>
				</div>

				<nav className="flex items-center gap-3">
					<a
						href="#home"
						className="text-sm text-foreground hover:underline"
					>
						Home
					</a>
					<a
						href="#menu"
						className="text-sm text-foreground hover:underline hidden sm:inline-block"
					>
						Menu
					</a>
					<a
						href="#specials"
						className="text-sm text-foreground hover:underline hidden sm:inline-block"
					>
						Specials
					</a>
					<a
						href="#about"
						className="text-sm text-foreground hover:underline hidden md:inline-block"
					>
						About
					</a>
					<a
						href="#contact"
						className="text-sm text-foreground hover:underline"
					>
						Contact
					</a>
				</nav>
			</div>
		</header>
	);
}
