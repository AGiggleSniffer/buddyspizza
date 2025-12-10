import Image from "next/image";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Hero() {
	return (
		<section className="min-w-screen min-h-screen flex justify-center">
			<div className="absolute min-w-screen min-h-screen bg-[url(/heropizza.jpg)] bg-cover bg-center">
				<div className="absolute inset-0 bg-black/60" />
			</div>
			<div className="flex flex-col gap-3 p-30 items-center z-10">
				<h1 className="font-extrabold text-7xl leading-tight text-white">
					Buddy&apos;s
				</h1>
				<h2 className="italic text-6xl text-center text-white">
					Woodfire Pizza
				</h2>
				<p className="text-xl text-muted-foreground text-center">
					Taste the difference of tradition, perfectly fired in a
					genuine wood-burning oven
				</p>
				<a
					href="#menu"
					className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full transition-colors mt-8"
				>
					View Our Menu
				</a>
			</div>
		</section>
	);
}
