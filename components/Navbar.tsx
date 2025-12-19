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
  SheetClose,
  SheetContent,
  SheetDescription,
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

  const menuItems = links.map(({ name, href }) => (
    <NavigationMenuItem key={`${name}${href}`}>
      <NavigationMenuLink
        asChild
        className={`${navigationMenuTriggerStyle()} `}
      >
        <Link
          href={href}
          className="after:bg-primary dark:hover:bg-muted/70 hover:bg-muted/50 relative bg-transparent after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:content-[''] hover:after:w-full"
        >
          {name}
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
      className={`bg-background/70 max-w-dvw min-w-full justify-end shadow-lg transition-transform duration-300 dark:shadow-sm dark:shadow-neutral-900 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } backdrop-blur-sm backdrop-filter`}
    >
      <div className={`fixed left-0 mx-10 font-bold md:text-2xl`}>
        Buddy&apos;s <span className="text-primary">Woodfire Pizza</span>
      </div>

      <NavigationMenuList className="hidden p-5 md:flex">
        {menuItems}
      </NavigationMenuList>

      <ModeToggle />

      <Sheet>
        <SheetTrigger className="p-5 md:hidden">
          <BiMenu className="text-3xl" />
        </SheetTrigger>
        <SheetContent className="z-50">
          <SheetHeader className="hidden">
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>
              Navigate to different parts of the website
            </SheetDescription>
          </SheetHeader>
          <NavigationMenuList className="mt-15 min-h-screen flex-col justify-start">
            {menuItems}
          </NavigationMenuList>
        </SheetContent>
      </Sheet>
    </NavigationMenu>
  );
}
