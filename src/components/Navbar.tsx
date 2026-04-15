"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ModeToggle from "@/components/ModeToggle";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BiMenu } from "react-icons/bi";

const links = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "Where We Are", href: "#map" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const menuItems = links.map(({ name, href }, index) => (
    <NavigationMenuItem key={`${name}${href}`} className="w-full md:w-auto">
      <NavigationMenuLink
        asChild
        className={`${navigationMenuTriggerStyle()} w-full text-xl md:text-xs`}
      >
        <Link
          href={href}
          className="after:bg-primary dark:hover:bg-muted/70 hover:bg-muted-foreground/50 font-playfair hover:text-primary relative flex justify-between bg-transparent py-8 tracking-widest uppercase after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:content-[''] hover:after:w-full md:py-0"
        >
          <span className="text-muted-foreground text-sm tracking-normal md:hidden">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{name}</span>
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  ));

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <NavigationMenu
      className={`bg-background max-w-dvw min-w-full justify-end shadow-lg backdrop-blur-sm backdrop-filter transition-transform duration-300 dark:shadow-sm dark:shadow-neutral-900 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="fixed left-0 mx-10 flex flex-col font-serif font-bold tracking-wide">
        <span className="text-primary font-playfair">Buddy&apos;s </span>
        <span className="italic">Woodfire Pizza</span>
      </div>

      <NavigationMenuList className="hidden p-5 md:flex">
        {menuItems}
      </NavigationMenuList>

      <div className="bg-primary hidden h-4 w-px md:flex" />

      <ModeToggle />

      <Sheet>
        <SheetTrigger className="p-5 md:hidden">
          <BiMenu className="text-3xl" />
        </SheetTrigger>
        <SheetContent className="z-50">
          <SheetHeader>
            <SheetTitle>
              {
                <div className="flex flex-col font-serif font-bold tracking-wide">
                  <span className="text-primary font-playfair">
                    Buddy&apos;s{" "}
                  </span>
                  <span className="italic">Woodfire Pizza</span>
                </div>
              }
            </SheetTitle>
            <div className="bg-primary my-4 h-px w-full" />
          </SheetHeader>
          <NavigationMenuList
            onClick={() => setIsVisible(false)}
            className="min-h-screen w-full flex-col justify-start"
          >
            {menuItems}
          </NavigationMenuList>
        </SheetContent>
      </Sheet>
    </NavigationMenu>
  );
}
