import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "ghost";
};

export default function Button({
	children,
	className = "",
	variant = "primary",
	...props
}: ButtonProps) {
	const base =
		"inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
	const variants: Record<string, string> = {
		primary:
			"bg-primary text-primary-foreground hover:brightness-95 disabled:opacity-50",
		ghost: "bg-transparent border border-border hover:bg-muted",
	};

	return (
		<button
			className={`${base} ${variants[variant]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
