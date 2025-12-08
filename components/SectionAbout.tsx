export default function SectionAbout() {
	return (
		<section
			id="about"
			className="min-h-screen flex items-center bg-background"
		>
			<div className="mx-auto max-w-4xl px-6 py-12">
				<h2 className="text-2xl font-semibold">About Us</h2>
				<p className="mt-3 text-muted-foreground">
					Built on family recipes and a love for real ingredients.
				</p>
				<div className="mt-6 text-sm text-muted-foreground">
					We craft every pizza to order, focusing on simplicity and
					quality.
				</div>
			</div>
		</section>
	);
}
