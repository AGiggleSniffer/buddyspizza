import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionMenu from "@/components/SectionMenu";
import SectionSpecials from "@/components/SectionSpecials";
import SectionAbout from "@/components/SectionAbout";
import SectionContact from "@/components/SectionContact";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground font-sans">
			<header className="fixed top-0 z-50 w-full">
				<Navbar />
			</header>
			<main className="mx-auto w-full">
				<Hero />
				<SectionMenu />
				<SectionSpecials />
				<SectionAbout />
				<SectionContact />
			</main>
			<Footer />
		</div>
	);
}
