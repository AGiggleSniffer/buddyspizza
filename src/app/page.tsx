import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionMenu from "@/components/SectionMenu";
import SectionMap from "@/components/SectionMap";
import SectionAbout from "@/components/SectionAbout";
import SectionContact from "@/components/SectionContact";
import Footer from "@/components/Footer";
import * as queries from "@/server/queries";

export default async function Home() {
  const { name, mapsrc, location } = await queries.getAddress();
  const { email, insta, phone } = await queries.getContact();
  const desc = await queries.getAbout();
  const menuItems = await queries.getMenu();
  const timeInfo = await queries.getTime();

  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      <header className="fixed top-0 z-50 w-svw">
        <Navbar />
      </header>
      <main className="mx-auto w-full">
        <Hero />
        <SectionMenu instagram={insta} items={menuItems} />
        <SectionMap
          name={name}
          mapsrc={mapsrc}
          location={location}
          hours={timeInfo}
          phone={phone}
        />
        <SectionAbout description={desc} />
        <SectionContact email={email} instagram={insta} phone={phone} />
      </main>
      <Footer />
    </div>
  );
}
