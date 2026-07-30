import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="flex cursor-pointer flex-col font-serif font-bold tracking-wide"
    >
      <span className="text-primary font-playfair text-2xl font-extrabold">
        Buddy&apos;s
      </span>
      <span className="italic">Woodfire Pizza</span>
    </Link>
  );
}
