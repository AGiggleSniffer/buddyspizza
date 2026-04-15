import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionMenu from "@/components/SectionMenu";
import SectionMap from "@/components/SectionMap";
import SectionAbout from "@/components/SectionAbout";
import SectionContact from "@/components/SectionContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      <header className="fixed top-0 z-50 w-svw">
        <Navbar />
      </header>
      <main className="mx-auto w-full">
        <Hero />
        <SectionMenu />
        <SectionMap />
        <SectionAbout />
        <SectionContact />
      </main>
      <Footer />
    </div>
  );
}
