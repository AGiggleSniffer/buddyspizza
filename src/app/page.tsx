import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionMenu from "@/components/SectionMenu";
import SectionMap from "@/components/SectionMap";
import SectionAbout from "@/components/SectionAbout";
import SectionContact from "@/components/SectionContact";
import Footer from "@/components/Footer";
import * as queries from "@/server/queries";

// export const dynamic = "force-dynamic";

export default async function Home() {
  const [
    desc,
    { email, insta, phone },
    address,
    time,
    menuItems,
    heroPhoto,
    aboutPhoto,
  ] = await Promise.all([
    queries.getAbout(),
    queries.getContact(),
    queries.getAddress(),
    queries.getTime(),
    queries.getMenu(),
    queries.getPhoto("hero"),
    queries.getPhoto("about"),
  ]);

  const heroPhotoUrl = `https://${process.env.UPLOADTHING_APP_ID}.ufs.sh/f/${heroPhoto.key}`;
  const aboutPhotoUrl = `https://${process.env.UPLOADTHING_APP_ID}.ufs.sh/f/${aboutPhoto.key}`;

  const timeInfo = time.sort(
    (a: { id: number }, b: { id: number }) => a.id - b.id,
  );

  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      <header className="fixed top-0 z-50 w-svw">
        <Navbar />
      </header>
      <main className="mx-auto w-full">
        <Hero photo={heroPhotoUrl} />
        <SectionMenu instagram={insta} items={menuItems} />
        <SectionMap address={address} hours={timeInfo} phone={phone} />
        <SectionAbout photo={aboutPhotoUrl} description={desc} />
        <SectionContact email={email} instagram={insta} phone={phone} />
      </main>
      <Footer />
    </div>
  );
}
