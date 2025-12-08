import Image from "next/image";

export default function Hero() {
	return (
		<section
			id="home"
			className="min-h-screen flex justify-center items-center bg-background text-foreground"
		>
			<div className="flex w-full max-w-4xl px-15 py-12">
				<div>
					<h1 className="text-4xl font-extrabold leading-tight">
						Dear Darius,
					</h1>
					<p className="mt-3 text-lg text-muted-foreground">
						Please play leauge with me.
					</p>
				</div>
				<div className="ml-auto">
					<Image
						alt="pizza oven"
						src="/test8.png"
						width={500}
						height={500}
					/>
				</div>
			</div>
		</section>
	);
}
