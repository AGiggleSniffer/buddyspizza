import ParallaxSection from "./utils/ParallaxSection";

export default function Footer() {
  return (
    <ParallaxSection>
      <footer className="bg-background/50 border-border fixed w-full border-t">
        <div className="text-muted-foreground mx-auto max-w-4xl px-6 py-6 text-center text-sm">
          © {new Date().getFullYear()} Pizza — Made with care
        </div>
      </footer>
    </ParallaxSection>
  );
}
