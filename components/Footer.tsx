export default function Footer() {
	return (
		<footer className="w-full border-t border-border bg-background/50">
			<div className="mx-auto max-w-4xl px-6 py-6 text-center text-sm text-muted-foreground">
				© {new Date().getFullYear()} Pizza — Made with care
			</div>
		</footer>
	);
}
