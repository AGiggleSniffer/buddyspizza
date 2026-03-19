export default function Footer() {
  return (
    <footer className="bg-background/50 border-border w-full border-t">
      <div className="text-muted-foreground mx-auto max-w-4xl px-6 py-6 text-center text-sm">
        © {new Date().getFullYear()} Pizza — Made with care
      </div>
    </footer>
  );
}
